function nextPage(){
	$("#btn-next-page").click();
}

function passedValidation() {
    $(".needs-validation").removeClass("was-validated");
}

function failedValidation() {
    $(".needs-validation").addClass("was-validated");
}
