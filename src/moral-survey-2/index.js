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
