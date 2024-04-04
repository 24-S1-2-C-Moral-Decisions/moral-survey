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
var situation2_ind = require("./content/situation2_ind.html");
var situation3_ind = require("./content/situation3_ind.html");
var surveyTemplate = require("./content/survey-template.html");
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
				type: "call-function",
				func: function(){
					genSurvey(0, "real-survey1");
				}
			},
			SITUATION2_IND: {
				type: "call-function",
				func: function(){
					genSurvey(1, "situation2_ind");
				}
			},
			SITUATION3_IND: {
				type: "call-function",
				func: function(){
					genSurvey(2, "situation3_ind");
				}
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
		timeline.push(params.slides.REAL_SURVEY1);
		timeline.push(params.slides.SITUATION2_IND);
		timeline.push(params.slides.SITUATION3_IND);
		// timeline.push(params.slides.COMMENTS);
		// timeline.push(params.slides.RESULTS);
	}

	function calculateResults() {
		//TODO: Nothing to calculate
		let results_data = {}
		showResults(results_data, true)
	}

	situations = [
		{
			title: "AITA for not wanting my husband to go back to school",
			subtitle: "Throwaway, husband uses reddit.",
			description: [
				"Backstory first. I (27f) work full time as does my husband (26m). I do make more than my husband and the dicotomy is only going to increase as time goes due to my line of work. We have two kids, a 2 and a half year old and a 10 month old. We both love our kids endlessly and share equally in all parental duties.",
				"All that said, I do work earlier than my husband and pick both of our children up from their respective daycares and am home with them for a couple hours before my husband gets home. When he gets home, he is more often than not in a, for lack of a better word, shitty mood. He does not like his job, and that stress follows him home.",
				"We are not financially well off at the moment but in the future due to my job, we have spoken of the possibility of him being a stay at home dad. This is the future that I thought we were working towards.",
				"About a month ago, my husband informed me that he was in the process of applying for college. I was a little taken aback due to us both talking about our future with him at home. I am trying to be supportive of the idea, but, did mention that i had thought that he was looking forward to being a stay at home dad.",
				"That is where I left the conversation. I did not tell him of my other concerns which are more responsible for my disagreement with him going back to school. I mentioned that he is in a shitty mood sometimes when he gets back home, and that attitude can sometimes be taken out on our kids.",
				"Now, I do want to stress that he is a great and loving father, but, on some days, seeing the way he interacts with our children can be heartbreaking. He can be short with them and often will shout at our oldest. Every interruption the kids can cause is likely to upset him and cause him to be angry. Most nights I will take over caring for the kids to give him a break as I can see that he is in a bad mood.",
				"The financial aspect of college is also an issue I have. As I mentioned, we are not too financially well off and I do not know how well we could manage the prospect of student loans."
			],
			YA: 50,
			NA: 50,
			conclution: 'About half of people chose "YA - Yes, the Individual is the Asshole" and about half chose "NA - No, the Individual is Not the Asshole"',
			NAPreHundred: 47,
			YAPreHundred: 33,
			NAImg: "./img/WechatIMG1019.jpg",
			YAImg: "./img/WechatIMG1022.jpg",
		},
		{
			title: "AITA for complaining that I was not allowed in the pool as it was a ‘Women only’ session.",
			subtitle: "",
			description: [
				"Took my kids swimming. Toddler was happy in the baby pool, but the eldest wanted to go in the big pool. I went with her, but was told to get out as I am male. I think it was discrimination, the pool say they’re meeting a demand from the public and are being inclusive."
			],
			YA: 51,
			NA: 49,
			NAPreHundred: 47,
			YAPreHundred: 33,
			NAImg: "./img/WechatIMG1019.jpg",
			YAImg: "./img/WechatIMG1022.jpg",
		},
		{
			title: "AITA for calling my fat friend fat after she called me a twig?",
			subtitle: "",
			description: [
				'I am very self conscious about my weight. I am very skinny because of my fast metabolism and im very bony. It tears me apart when i hear people calling me a twig. I was eating lunch with some of my friends and the biggest one in the group said "Eat" when i was throwing out half of my sandwich. I said "Im not hungry" and she said "You have to eat, your a twig" they already know i have a fast metabolism because i told them before about it when they asked why i was so bony. I snapped back and said "I\'d rather be a twig then a whole tree" and suddenly im the asshole. Everyone in my group of friends hate me and i want to know if its my fault.'
			],
			YA: 50,
			NA: 50,
			NAPreHundred: 47,
			YAPreHundred: 33,
			NAImg: "./img/WechatIMG1019.jpg",
			YAImg: "./img/WechatIMG1022.jpg",
		}
	]

	function genSurvey(num = 0, id) {
		$("#"+id).html(
			surveyTemplate({
				startNow: true,
				situationNumber: num + 1,
				totalSituations: 3,
				situationTitle: "Individual Decision Making",
				situation: situations[num],
			}));

		$("#"+id).i18n();
		LITW.utils.showSlide(id);
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


