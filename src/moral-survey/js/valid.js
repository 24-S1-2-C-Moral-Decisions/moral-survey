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

document.getElementById('option1').addEventListener('click', function() {
    document.getElementById('collapseExample2').classList.remove('show');
});

document.getElementById('option2').addEventListener('click', function() {
    document.getElementById('collapseExample1').classList.remove('show');
});


document.getElementById('YA-option1').addEventListener('click', function() {
    document.getElementById('collapseExample2').classList.remove('show');
});

document.getElementById('YA-option2').addEventListener('click', function() {
    document.getElementById('collapseExample1').classList.remove('show');
});



document.getElementById('NA-option1').addEventListener('click', function() {
    document.getElementById('NA-collapseExample2').classList.remove('show');
});

document.getElementById('NA-option2').addEventListener('click', function() {
    document.getElementById('NA-collapseExample1').classList.remove('show');
});



document.addEventListener('DOMContentLoaded', function() {
    const labels = document.querySelectorAll('.cho');
    labels.forEach(label => {
        label.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const target = document.querySelector(targetId);
            if (target) {
                document.querySelectorAll('.YA-ans').forEach(ans => {
                    ans.style.display = 'none';
                });
                target.style.display = 'block';
            }
        });
    });
})

document.addEventListener('DOMContentLoaded', function() {
    const labels = document.querySelectorAll('.cho2');
    labels.forEach(label => {
        label.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const target = document.querySelector(targetId);
            if (target) {
                document.querySelectorAll('.NA-ans').forEach(ans => {
                    ans.style.display = 'none';
                });
                target.style.display = 'block';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var option1 = document.getElementById('option1');
    var option2 = document.getElementById('option2');
    var subForm = document.getElementById('decisionForm');
    var button1  = document.getElementById('sub1');
    subForm.addEventListener('click', function() {
        if(document.getElementById('option1').checked && subForm.querySelector('input[name="decision"]:checked')){
                document.getElementById('YA').style.display = 'block';
                document.getElementById('NA').style.display = 'none';
                button1.style.display='none';
        }
        if(document.getElementById('option2').checked && subForm.querySelector('input[name="decision"]:checked')){
            document.getElementById('YA').style.display = 'none';
            document.getElementById('NA').style.display = 'block';
            button1.style.display='none';
        }
    });
});