/*************************************************************
 * litw.data.2.0.0js
 *
 * Contains functions for writing LITW Study data operations
 * using the LITW REST API
 *
 * Dependencies: jQuery
 *
 * Author: LabintheWild DEV crew
 *
 * © Copyright 2023 LabintheWild
 * For questions about this file and permission to use
 * the code, contact us at tech@labinthewild.org
 *************************************************************/

(function( exports ) {
    "use strict";

    var version = '2.0.0',
        params = {
            _isInitialized: false,
            prolificId: null,
            studyId: -1,
            ipCountry: "not_fetched_or_initialized",
            ipRegion: "not_fetched_or_initialized",
            ipCity: "not_fetched_or_initialized",
            userAgent: "not_fetched_or_initialized"
        },
        getProlificId = function() {
            return params.participantId;
        },
        getStudyId = function() {
            return params.studyId;
        },
        getCountry = function() {
            return params.ipCountry;
        },
        getCity = function() {
            return params.ipCity;
        },
        isInitialized = function() {
            return params._isInitialized;
        },
        getURLparams = function () {
            return params.url;
        },

        getTopic = function() {
            switch (params.studyId) {
                case '1':
                    return "controversy";
                case '2':
                    return "uncertainty";
                case '3':
                    return "controversy-uncertainty";
                case '4':
                    return "relevant-reasonings";
                case '5':
                    return "irrelevant-reasonings";
            
                default:
                    return "Unknown-Topic";
            }
        },

        initialize = function(baseUrl) {
            let litw_locale = LITW.locale.getLocale() || "";
            // TODO: This is not working because I did not figure how to get the client IP behind the NGINX yet!
            // let geoip_url = '/service/geoip';
            let geoip_url = 'https://api.labinthewild.org/service/geoip';

            if (!params._isInitialized) {
                params._isInitialized = true;
                LITW.utils.APIaseUrl = baseUrl || LITW.utils.APIBaseURL;
                params.url = LITW.utils.getRequestParams();
                params.prolificId = params.url["prolificId"];
                params.studyId = params.url["studyId"];
                params.userAgent = navigator.userAgent;

                console.log("prolificId: " + params.prolificId);
                if (params.prolificId == null) {
                    console.error("prolificId Not Found");
                    alert("Invalid URL, Prolific ID Not Found.\n The results will not be recorded. Please contact the researcher.")
                }
                
                return $.getJSON(geoip_url, function(data) {
                    params.ipCity = data.city;
                    params.ipRegion = data.region;
                    params.ipCountry = data.country;
                }).always(function() {
                    let data = {
                        contentLanguage: litw_locale,
                        geoLoc: {
                            city: params.ipCity,
                            region: params.ipRegion,
                            country: params.ipCountry,
                        },
                        userAgent: params.userAgent,
                        urlParams: params.url
                    };
                    submitData(data,"litw:initialize");
                });
            }
        },

        uuidv4 = function() {
            return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(
            /[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16))
        },
        _submit = function(obj_data, finalAttempt) {
            // $.ajax({
            //     url: '/service/data/',
            //     type: 'POST',
            //     contentType: 'application/json',
            //     data: JSON.stringify(obj_data),
            // }).fail(function(e) {
            //     if (!finalAttempt) {
            //         _submit(obj_data, true);
            //     }
            // });
        },
        submitData = function(data, dataType) {
            if (!params._isInitialized) {
                initialize();
            }
            data.prolificId = getProlificId();
            data.data_type = dataType;
            _submit(data, false);
        },
        submitComments = function(data) {
            submitData(data,"study:comments")
        },
        submitDemographics = function(data) {
            submitData(data,"study:demographics")
        },
        submitConsent = function(accepted) {
            Data.consentAccepted = accepted;
        },
        submitConfig = function(data) {
            submitData(data,"study:configuration")
        },
        submitStudyData = function(data) {
            submitData(data,"study:data")
        };

    /**** PUBLIC METHODS ****/
    var Data = {
        consentAccepted: false,
        surveyStartTime: null,
        questions: {},
    };
    exports.data = Data;
    exports.data.submitComments = submitComments;
    exports.data.submitDemographics = submitDemographics;
    exports.data.submitConsent = submitConsent;
    exports.data.submitStudyConfig = submitConfig;
    exports.data.submitStudyData = submitStudyData;
    exports.data.submitData = submitData;
    exports.data.initialize = initialize;
    exports.data.getProlificId = getProlificId;
    exports.data.getStudyId = getStudyId;
    exports.data.getCountry = getCountry;
    exports.data.getCity = getCity;
    exports.data.getURLparams = getURLparams;
    exports.data.isInitialized = isInitialized;
    exports.data.getTopic = getTopic;

})( window.LITW = window.LITW || {} );
