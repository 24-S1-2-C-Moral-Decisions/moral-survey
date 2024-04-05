/*************************************************************
 * Main code, responsible for configuring the steps and their
 * actions.
 *
 * Author: LITW Team.
 *
 * © Copyright 2017-2023 LabintheWild.
 * For questions about this file and permission to use
 * the code, contact us at tech@labinthewild.org
 *************************************************************/

// load webpack modules
window.$ = window.jQuery = require("jquery");
require("bootstrap");
require("jquery-ui-bundle");
var _ = require('lodash');
var introTemplate = require("../templates/introduction.html");
var moralAnnouncementTemplate = require("../templates/moralAnnounce.html");
var demographicsTemplate = require("../templates/demographics.html");
var loadingTemplate = require("../templates/loading.html");
var resultsTemplate = require("../templates/results.html");
var resultsFooter = require("../templates/results-footer.html");
var commentsTemplate = require("../templates/comments.html");
require("../js/litw/jspsych-display-info");
require("../js/litw/jspsych-display-slide");

// load survey templates
var motivationSurvey = require("./content/motivationSurvey.html");
var mock_survey = require("./content/mocksurvey.html");
var real_survey1 = require("./content/realsurvey1.html");
var situation1 = require("./content/situation1.html");
var situation2_ind = require("./content/situation2_ind.html");
var situation3_ind = require("./content/situation3_ind.html");
module.exports = (function(exports) {
	var timeline = [],
	params = {
		study_id: "TO_BE_ADDED_IF_USING_LITW_INFRA",
		study_recommendation: [],
		preLoad: ["../img/btn-next.png","../img/btn-next-active.png","../img/ajax-loader.gif"],
		slides: {
			INTRODUCTION: {
				name: "introduction",
				type: "display-slide",
				template: introTemplate,
				display_element: $("#intro"),
				display_next_button: false,
			},
			SURVEY1:{
				name: "motivationsurvey",
				type: "display-slide",
				template: motivationSurveyTemplate,
				display_element: $("#motivationsurvey"),
				display_next_button: false,
			},
			MOCK_SURVEY: {
				name: "mock-survey",
				type: "display-slide",
				template: mock_surveyTemplate,
				display_element: $("#mock-survey"),
				display_next_button: false,
			},
			REAL_SURVEY1: {
				name: "real-survey1",
				type: "display-slide",
				template: real_survey1Template,
				display_element: $("#real-survey1"),
				display_next_button: false,
			},
			SITUATION1: {
				name: "situation1",
				type: "display-slide",
				template: situation1_Template,
				display_element: $("#situation1"),
				display_next_button: false,
			},
			SITUATION2_IND: {
				name: "situation2_ind",
				type: "display-slide",
				template: situation2_ind_Template,
				display_element: $("#situation2_ind"),
				display_next_button: false,
			},
			SITUATION2_GROUP: {
				name: "situation2_group",
				type: "display-slide",
				template: situation2_group_Template,
				display_element: $("#situation2_group"),
				display_next_button: false,
			},
			SITUATION3_IND: {
				name: "situation3_ind",
				type: "display-slide",
				template: situation3_ind_Template,
				display_element: $("#situation3_ind"),
				display_next_button: false,
			},
			COMMENT: {
				name: "comment",
				type: "display-slide",
				template: comment_Template,
				display_element: $("#comment"),
				display_next_button: false,
			},
			SITUATION3_GROUP: {
				name: "situation3_group",
				type: "display-slide",
				template: situation3_group_Template,
				display_element: $("#situation3_group"),
				display_next_button: false,
			},
			COMMENTS: {
				type: "display-slide",
				template: commentsTemplate,
				display_element: $("#comments"),
				name: "comments",
				finish: function(){
					var comments = $('#commentsForm').alpaca().getValue();
					if (Object.keys(comments).length > 0) {
						LITW.data.submitComments({
							comments: comments
						});
					}
				}
			},
			INFORMED_CONSENT: {
				name: "informed_consent",
				type: "display-slide",
				template: moralAnnouncementTemplate,
				display_element: $("#moral-announcement"),
				display_next_button: false,
			},
			DEMOGRAPHICS: {
				type: "display-slide",
				template: demographicsTemplate,
				display_element: $("#demographics"),
				name: "demographics",
				finish: function(){
					var dem_data = $('#demographicsForm').alpaca().getValue();
					LITW.data.submitDemographics(dem_data);
				}
			},
			SURVEY1:{
				name: "motivationsurvey",
				type: "display-slide",
				template: motivationSurvey,
				display_element: $("#motivationsurvey"),
				display_next_button: false,
			},
			MOCK_SURVEY: {
				name: "mock-survey",
				type: "display-slide",
				template: mock_survey,
				display_element: $("#mock-survey"),
				display_next_button: false,
			},
			REAL_SURVEY1: {
				name: "real-survey1",
				type: "display-slide",
				template: real_survey1,
				display_element: $("#real-survey1"),
				display_next_button: false,
			},
			SITUATION1: {
				name: "situation1",
				type: "display-slide",
				template: situation1,
				display_element: $("#situation1"),
				display_next_button: false,
			},
			SITUATION2_IND: {
				name: "situation2_ind",
				type: "display-slide",
				template: situation2_ind,
				display_element: $("#situation2_ind"),
				display_next_button: false,
			},
			SITUATION3_IND: {
				name: "situation3_ind",
				type: "display-slide",
				template: situation3_ind,
				display_element: $("#situation3_ind"),
				display_next_button: false,
			},
			COMMENTS: {
				type: "display-slide",
				template: commentsTemplate,
				display_element: $("#comments"),
				name: "comments",
				display_next_button: false,
				// finish: function(){
				// 	var comments = $('#commentsForm').alpaca().getValue();
				// 	if (Object.keys(comments).length > 0) {
				// 		LITW.data.submitComments({
				// 			comments: comments
				// 		});
				// 	}
				// }
			},
			RESULTS: {
				type: "call-function",
				func: function(){
					calculateResults();
				}
			}
		}
	};

	function configureStudy() {
		// timeline.push(params.slides.INTRODUCTION);
		// timeline.push(params.slides.INFORMED_CONSENT);
		// // timeline.push(params.slides.DEMOGRAPHICS);
		// timeline.push(params.slides.SURVEY1);
		// timeline.push(params.slides.MOCK_SURVEY);
		// timeline.push(params.slides.REAL_SURVEY1);
		// timeline.push(params.slides.SITUATION2_IND);
		// timeline.push(params.slides.SITUATION3_IND);
		timeline.push(params.slides.COMMENTS);
		timeline.push(params.slides.RESULTS);
	}

	function calculateResults() {
		//TODO: Nothing to calculate
		let results_data = {}
		showResults(results_data, true)
	}

	function showResults(results = {}, showFooter = false) {
		if('PID' in params.URL) {
			//REASON: Default behavior for returning a unique PID when collecting data from other platforms
			results.code = LITW.data.getParticipantId();
		}

		$("#results").html(
			resultsTemplate({
				data: results
			}));
		if(showFooter) {
			$("#results-footer").html(resultsFooter(
				{
					share_url: window.location.href,
					share_title: $.i18n('litw-irb-header'),
					share_text: $.i18n('litw-template-title'),
					more_litw_studies: params.study_recommendation
				}
			));
		}
		$("#results").i18n();
		LITW.utils.showSlide("results");
	}

	function readSummaryData() {
		$.getJSON( "summary.json", function( data ) {
			//TODO: 'data' contains the produced summary form DB data
			//      in case the study was loaded using 'index.php'
			//SAMPLE: The example code gets the cities of study partcipants.
			console.log(data);
		});
	}

	function startStudy() {
		// generate unique participant id and geolocate participant
		LITW.data.initialize();
		// save URL params
		params.URL = LITW.utils.getParamsURL();
		if( Object.keys(params.URL).length > 0 ) {
			LITW.data.submitData(params.URL,'litw:paramsURL');
		}
		// populate study recommendation
		LITW.engage.getStudiesRecommendation(2, (studies_list) => {
			params.study_recommendation = studies_list;
		});
		// initiate pages timeline
		jsPsych.init({
		  timeline: timeline
		});
	}

	function startExperiment(){
		//TODO These methods should be something like act1().then.act2().then...
		//... it is close enough to that... maybe the translation need to be encapsulated next.
		// get initial data from database (maybe needed for the results page!?)
		//readSummaryData();

		// determine and set the study language
		$.i18n().locale = LITW.locale.getLocale();
		var languages = {
			'en': './i18n/en.json?v=1.0',
			'pt': './i18n/pt-br.json?v=1.0',
		};
		//TODO needs to be a little smarter than this when serving specific language versions, like pt-BR!
		var language = LITW.locale.getLocale().substring(0,2);
		var toLoad = {};
		if(language in languages) {
			toLoad[language] = languages[language];
		} else {
			toLoad['en'] = languages['en'];
		}
		$.i18n().load(toLoad).done(
			function() {
				$('head').i18n();
				$('body').i18n();

				LITW.utils.showSlide("img-loading");
				//start the study when resources are preloaded
				jsPsych.pluginAPI.preloadImages(params.preLoad,
					function () {
						configureStudy();
						startStudy();
					},

					// update loading indicator
					function (numLoaded) {
						$("#img-loading").html(loadingTemplate({
							msg: $.i18n("litw-template-loading"),
							numLoaded: numLoaded,
							total: params.preLoad.length
						}));
					}
				);
			});
	}



	// when the page is loaded, start the study!
	$(document).ready(function() {
		startExperiment();
	});
	exports.study = {};
	exports.study.params = params
})( window.LITW = window.LITW || {} );




