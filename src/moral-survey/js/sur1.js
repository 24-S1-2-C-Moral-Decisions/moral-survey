var template1 = `
    <div class="lar-middle">
        <h2 class="bolded-blue" data-i18n="litw-motivationsurvey-header"></h2>
        <div class="survey1-paragraph">
            <ul>
                <li>
                    <strong class="survey1-paragraph-header" data-i18n='litw-sur1-body-first-p1'></strong>
                    <ul>
                        <li class="content"><span style="font-weight: bolder" data-i18n='litw-sur1-body-first-s1'></span><span class="survey1-paragraph-body" data-i18n='litw-sur1-body-first-s2'></span></li>
                    </ul>
                </li>
    
                <li>
                    <strong class="survey1-paragraph-header" data-i18n='litw-sur1-body-second-p1'></strong>
                    <ul>
                        <li class="content"><span style="font-weight: bolder" data-i18n='litw-sur1-body-second-s1'></span><span class="survey1-paragraph-body" data-i18n='litw-sur1-body-second-s2'></span>
                            <span style="font-weight: bolder" class="survey1-paragraph-body" data-i18n='litw-sur1-body-second-s3'></span><span class="survey1-paragraph-body" data-i18n='litw-sur1-body-second-s4'></span></li>
                        <li class="content">
                            <p class="survey1-paragraph-body" data-i18n='litw-sur1-body-second-p2'></p>
                        </li>
                    </ul>
                </li>
    
                <li>
                    <strong class="survey1-paragraph-header" data-i18n='litw-sur1-body-third-p1'></strong>
                    <ol>
                        <li class="content"><strong class="survey1-paragraph-header" data-i18n='litw-sur1-body-third-p2'></strong>
                            <ul>
                                <li class="content"><span class="survey1-paragraph-body" data-i18n='litw-sur1-body-third-s1'></span>
                                    <ul>
                                        <li class="content"><span class="survey1-paragraph-body" data-i18n='litw-sur1-body-third-s2'></span></li>
                                        <li class="content"><span class="survey1-paragraph-body" data-i18n='litw-sur1-body-third-s3'></span></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
    
                        <li class="content"><strong class="survey1-paragraph-header" data-i18n='litw-sur1-body-third-p3'></strong>
                            <ul>
                                <li class="content"><span class="survey1-paragraph-body" data-i18n='litw-sur1-body-third-s4'></span>
                                    <ul>
                                        <li class="content"><span class="survey1-paragraph-body" data-i18n='litw-sur1-body-third-s5'></span></li>
                                        <li class="content"><span class="survey1-paragraph-body" data-i18n='litw-sur1-body-third-s6'></span></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ol>
                </li>
            </ul>
        </div>
    
        <h2 class="bolded-blue" data-i18n="litw-motivationsurvey-header2"></h2>
        <div class="survey1-paragraph">
            <span class="survey1-paragraph-body" data-i18n='litw-sur1-body-uncertainty-s1' style="font-weight: bolder"></span ><span class="survey1-paragraph-body" data-i18n='litw-sur1-body-uncertainty-s2'></span>
            <ul>
                <li class="content"><span class="survey1-paragraph-body line" data-i18n='litw-sur1-body-uncertainty-p1'></span><span class="survey1-paragraph-body" data-i18n='litw-sur1-body-uncertainty-s3'></span></li>
                <li class="content"><span class="survey1-paragraph-body line" data-i18n='litw-sur1-body-uncertainty-p2'></span><span class="survey1-paragraph-body" data-i18n='litw-sur1-body-uncertainty-s4'></span></li>
            </ul>
        </div>
    
        <div class="survey1-paragraph">
            <p class="survey1-paragraph-body lar-font" data-i18n='litw-sur1-body-qus-p1' style="font-weight: bolder"></p>
            <span class="survey1-paragraph-body lar-font" data-i18n='litw-sur1-body-qus-p2' style="font-weight: bolder"></span>
            <p class="survey1-paragraph-body lar-font" data-i18n='litw-sur1-body-qus-p3' style="font-weight: bolder"></p>
            <img class="survey1-img" src="../WechatIMG1018.jpg" alt="For every 100 Reddit users who made NA judgements, 43 users are very certain in NA">
        </div>
    
        <div class="survey1-paragraph">
            <p class="survey1-paragraph-body lar-font" data-i18n='litw-sur1-body-qus-p4' style="font-weight: bolder"></p>
        </div>
    
        <div class="survey1-paragraph">
            <form id="myForm" class="needs-validation" novalidate>
                <input type="radio" class="btn-check form-check-input" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1"  name="options" id="option1" autocomplete="off" required>
                <label class="btn btn-light jud form-check-label" for="option1">High uncertainty</label><br>
                <input type="radio" class="btn-check form-check-input" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2" name="options" id="option2" autocomplete="off" required>
                <label class="btn btn-light jud form-check-label" for="option2" >Low uncertainty</label>
                <div class="invalid-feedback">Please answer the question</div>
                <div class="invalid-feedback2" id="wrong" style="color: red;display: none">Your answer is wrong. Please choose the right answer to proceed.</div>
                <div class="room">
                    <div class="collapse" id="collapseExample1">
                        <div class="card-body answer">
                            <p class="survey1-paragraph-body mid-font" data-i18n='litw-sur1-body-ans-p1' style="font-weight: bolder"></p>
                            <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur1-body-ans-s1' style="font-weight: bolder"></span>
                            <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur1-body-ans-s2'></span>
                        </div>
                    </div>
                    <div class="collapse" id="collapseExample2">
                        <div class="card-body answer">
                            <p class="survey1-paragraph-body mid-font" data-i18n='litw-sur1-body-ans2-p1' style="font-weight: bolder"></p>
                            <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur1-body-ans2-s1' style="font-weight: bolder"></span>
                            <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur1-body-ans2-s2'></span><br>
                            <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur1-body-ans2-s3' style="font-weight: bolder"></span>
                            <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur1-body-ans2-s4'></span>
                        </div>
                    </div>
                </div>
                
                        <script>
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
                    </script>
                <button type="submit" class="btn btn-secondary custom"  style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem; width: auto;" onclick="if(this.form.checkValidity()) { if(document.getElementById('option2').checked){document.getElementById('wrong').style.display = 'block';} else {$('#btn-next-page').click(); }}else {  this.form.stopPropagation(); } return false;">Next</button>
            </form>
        </div>

    </div>
    <div style="display: block;width: 100%;height: 400px;"></div>
    <script>
        document.getElementById('option1').addEventListener('click', function() {
            document.getElementById('collapseExample2').classList.remove('show');
            document.getElementById('wrong').style.display = 'none';
        });
        
        document.getElementById('option2').addEventListener('click', function() {
            document.getElementById('collapseExample1').classList.remove('show');
        });
        
        function check(){
          if(this.form.checkValidity()){
            //{ $('#btn-next-page').click(); }
            var option1 = document.getElementById('option1');
            var option2 = document.getElementById('option2');
            if(option1.checked){
              $('#btn-next-page').click();
            }
            if(option2.checked){
              document.getElementById('wrong').style.display = 'show';
            }
          }
          else {  this.form.stopPropagation(); }
          return false;
        }
    </script>
    
`;

module.exports = template1;