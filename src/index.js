window.onload = function (){
    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault(); // 阻止表单默认提交行为

        var option1 = document.getElementById('option1').checked;
        var option2 = document.getElementById('option2').checked;
        if (option1) {
            window.location.href = 'moral-survey/index.html';
        }
        if(option2){
            window.location.href = 'moral-survey/leave.html';
        }
    });

    (() => {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
    })()
}

