
// 添加错误处理和调试信息
console.log("Survey initialization started...");

// 检查必要的全局变量
if (typeof $ === 'undefined') {
    console.error("jQuery not loaded!");
}

if (typeof LITW === 'undefined') {
    console.error("LITW not loaded!");
}

if (typeof MORAL === 'undefined') {
    console.error("MORAL not loaded!");
}

// observer for the two-stage-surveys
new MutationObserver(() => {
    if ($("#two-stage-survey").children().length > 0) {
        console.log("Initializing two-stage survey...");
        if (MORAL && MORAL.twoStageSurvey) {
            MORAL.twoStageSurvey.initialize();
        } else {
            console.error("MORAL.twoStageSurvey not available");
        }
    }
}).observe($("#two-stage-survey")[0], { childList: true, subtree: false });

// observer for the attention
new MutationObserver(() => {
    if ($("#attention").children().length > 0) {
        console.log("Initializing attention...");
        if (MORAL && MORAL.attention) {
            MORAL.attention.initialize();
        } else {
            console.error("MORAL.attention not available");
        }
    }
}).observe($("#attention")[0], { childList: true, subtree: false });

function nextPage(){
	$("#btn-next-page").click();
}

function passedValidation(id=".invalid-feedback") {
    // stlye display none
    $(id).hide();
}

function failedValidation(id=".invalid-feedback") {
    // do not add was-validated here
    $(id).show();
}

var attention = false;

// let result = {
//     studyId: "1",
//     answer: {
//         questionId:  null,
//         individualAnswer: {
//             isAsshole: null,
//             rating: null
//         },
//         groupAnswer: {
//             isAsshole: null,
//             rating: null
//         },
//         comments: null
//     },
//     comments: null,
//     time: null
// };

window.onbeforeunload = function() {
    sessionStorage.removeItem('img');
};
// 保存指定页面的相对路径
// const specifiedPageUrl = MORAL_URL;  // Use MORAL_URL from webpack config
