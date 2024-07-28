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

        trainingData = [
            // placeholder for training data
            {},
            // controversy
            {},
            // uncertainty
            {
                _id: "../meat",
                title: "Am I the asshole for not buying meat for my 9 year old daughter?",
                selftext: "I’ve raised my daughter vegetarian from birth and a few years ago made" +
                " the switch the veganism. Me and her father are separated and a few months ago she "+
                " tried meat at his and liked it. He has her 2 nights a week so now she’s eating meat"+
                ", dairy and eggs at his. When she told me I said that was fine, it’s her body and she"+
                " gets to decide what goes into it, she then asked me if she could get some meat when "+
                "we went shopping but I said no. The smell and everything about meat kinda makes me feel"+
                " sick and I’d be the one having to prepare it for her. I let her have cheese and eggs "+
                "now at ours but she’s asked me again if she can get meat.",
                very_certain_YA: 1,
                not_very_certain_YA: 100 - 1,
                very_certain_NA: 43,
                not_very_certain_NA: 100 - 43,
                YA_percentage: 0.5,
                NA_percentage: 0.5,
            },
            // controversy-uncertainty
            {},
            // relevant-reasonings
            {},
            // irrelevant-reasonings
            {}
        ],

        attentionQuestions = [
            {
                question: "I have lunch on the moon every afternoon",
                options: [
                    "Strongly Disagree",
                    "Disagree",
                    "Neutral",
                    "Agree",
                    "Strongly Agree"
                ],
                expextedList: ["Strongly Disagree", "Disagree"]
            },
            {
                note: "Please remember, to verify that you are reading the survey questions attentively, when you encounter a question about your favorite season, you are to select 'Winter' regardless of your true preference.",
                question: "According to the above instruction, which season will you state as your favorite?",
                options: [
                    "Spring",
                    "Summer",
                    "Autumn",
                    "Winter"
                ],
                expextedList: ["Winter"]
            }
        ],

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

        getTrainingData = function() {
            return trainingData[params.studyId];
        },

        getQuestionData = function() {
            console.log("Data.questions: ", Data.questions);
            return Data.questions;
        },

        setQuestion = function(data) {
            Data.questions = data;
            Data.questions.img = JSON.stringify(Data.questions._id);
            Data.questions.YA_percentage = Math.round(Data.questions.YA_percentage * 100)
            Data.questions.NA_percentage = Math.round(Data.questions.NA_percentage * 100)
            Data.questions.very_certain_NA = Math.floor(Data.questions.very_certain_NA * 100).toString()
            Data.questions.not_very_certain_NA = 100 - Data.questions.very_certain_NA
            Data.questions.very_certain_YA = Math.floor(Data.questions.very_certain_YA * 100).toString()
            Data.questions.not_very_certain_YA = 100 - Data.questions.very_certain_YA
            Data.questions.YA_NA_percentage = Data.questions.YA_percentage.toString() + ":" + Data.questions.YA_percentage.toString()
            console.log(LITW.data.questions);

            // sessionStorage.setItem('img', JSON.stringify(LITW.data.questions.img));
            console.log("Self Texts:", LITW.data.questions.selftext);
            console.log("Titles:", LITW.data.questions.title);
        },

        getLikertScaleQuestions = function() {
            return {
                title: "I see myself as someone who ...",
                dimensions: [
                    "1. worries a lot",
                    "2. gets nervous easily",
                    "3. remains calm in tense situations",
                    "4. is talkative",
                    "5. is outgoing, sociable",
                    "6. is reserved",
                    "7. is original, comes up with new ideas",
                    "8. values artistic, aesthetic experiences",
                    "9. has an active imagination",
                    "10. is sometimes rude to others",
                    "11. has a forgiving nature",
                    "12. is considerate and kind to almost everyone",
                    "13. is sometimes shy, inhibited",
                    "14. tends to be lazy",
                    "15. does things efficiently",
                ]
            };
        },

        getRandomAttentionCheck = function() {
            let randomIndex = Math.floor(Math.random() * attentionQuestions.length);
            let res = attentionQuestions[randomIndex];
            attentionQuestions.splice(randomIndex, 1);
            return res;
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
        skipTraining: false,
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
    exports.data.getTrainingData = getTrainingData;
    exports.data.getRandomAttentionCheck = getRandomAttentionCheck;
    exports.data.getQuestionData = getQuestionData;
    exports.data.setQuestion = setQuestion;
    exports.data.getLikertScaleQuestions = getLikertScaleQuestions;

})( window.LITW = window.LITW || {} );
