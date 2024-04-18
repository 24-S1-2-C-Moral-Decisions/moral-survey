var situation1_template = `
    <div class="lar-middle" id="ind">
    <h2 class="bolded-blue" data-i18n="litw-real-survey-header-1"></h2>
    <div class="survey1-paragraph">
      <span class="survey1-paragraph-body" style="font-weight: bolder;" data-i18n='litw-real-body-sur-s1'></span><span class="survey1-paragraph-body" data-i18n='litw-real-body-sur-s2'></span>

      <p class="survey1-paragraph-body lar-font2" style="margin-top: 20px;font-weight: bolder" data-i18n='litw-real-body-sur-p1'></p>
      <span class="survey1-paragraph-body" style="font-weight: bolder" data-i18n='litw-real-body-sur-s3'></span>
      <p class="survey1-paragraph-body" data-i18n='litw-real-body-sur-p2'></p>
      <p class="survey1-paragraph-body" data-i18n='litw-real-body-sur-p3'></p>
      <p class="survey1-paragraph-body" data-i18n='litw-real-body-sur-p4'></p>
      <p class="survey1-paragraph-body" data-i18n='litw-real-body-sur-p5'></p>
      <p class="survey1-paragraph-body" data-i18n='litw-real-body-sur-p6'></p>
      <p class="survey1-paragraph-body" data-i18n='litw-real-body-sur-p7'></p>
      <p class="survey1-paragraph-body" data-i18n='litw-real-body-sur-p8'></p>
      <p class="survey1-paragraph-body" data-i18n='litw-real-body-sur-p9'></p>
    </div>

    <div class="survey1-paragraph">
    <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur2-body-ans-text'></span>
      <p class="survey1-paragraph-body lar-font" data-i18n='litw-sur2-body-idm-p3' style="font-weight: bolder"></p>
      <form id="decisionForm" class="form needs-validation" novalidate>
        <input type="radio" class="btn-check form-check-input" value="YA" name="options" id="option1" autocomplete="off" required>
        <label class="btn btn-light jud form-check-label YA-NA " data-target="#YA" for="option1" data-i18n='litw-sur2-body-ans-la1'></label><br>
        <input type="radio" class="btn-check form-check-input" value="NA" name="options" id="option2" autocomplete="off" required>
        <label class="btn btn-light jud form-check-label YA-NA " data-target="#NA" for="option2" data-i18n='litw-sur2-body-ans-la2'></label>
        <div class="survey1-paragraph">
          <p class="survey1-paragraph-body lar-font" data-i18n='litw-sur2-body-cho-p1' style="font-weight: bolder;margin-top: 130px"></p>

          <input type="radio" class="btn-check form-check-input" name="decision" id="option3" autocomplete="off" required>
          <label class="btn  btn-light first-cho form-check-label" for="option3" data-i18n='litw-sur2-body-cho-la1'></label>
          <input type="radio" class="btn-check form-check-input" name="decision" id="option4" autocomplete="off" required>
          <label class="btn  btn-light first-cho form-check-label" for="option4" data-i18n='litw-sur2-body-cho-la2'></label>
          <input type="radio" class="btn-check form-check-input" name="decision" id="option5" autocomplete="off" required>
          <label class="btn btn-light first-cho form-check-label" for="option5" data-i18n='litw-sur2-body-cho-la3'></label>
          <input type="radio" class="btn-check form-check-input" name="decision" id="option6" autocomplete="off" required>
          <label class="btn btn-light first-cho form-check-label" for="option6" data-i18n='litw-sur2-body-cho-la4'></label>
          <input type="radio" class="btn-check form-check-input" name="decision" id="option7" autocomplete="off" required>
          <label class="btn btn-light first-cho form-check-label" for="option7" data-i18n='litw-sur2-body-cho-la5'></label>
          <div class="invalid-feedback">
            Please answer the question.
          </div>
        </div>
        <button type="submit" class="btn btn-secondary custom" id="sub1" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem; width: auto;" >Next</button>
      </form>
    </div>
  </div>



  <div class="lar-middle" id="YA-group" style="display: none">
    <div class="survey1-paragraph">
      <p class="survey1-paragraph-body lar-font2" style="margin-top: 20px;font-weight: bolder" data-i18n='litw-real-group-sur-p1'></p>
      <span class="survey1-paragraph-body fst-italic" style="font-weight: bolder;" data-i18n='litw-real-group-sur-s1'></span>
      <p class="survey1-paragraph-body" data-i18n='litw-real-group-sur-p2'></p>
      <p class="survey1-paragraph-body" data-i18n='litw-real-group-sur-p3'></p>
      <p class="survey1-paragraph-body" data-i18n='litw-real-group-sur-p4'></p>
      <p class="survey1-paragraph-body" data-i18n='litw-real-group-sur-p5'></p>
      <p class="survey1-paragraph-body" data-i18n='litw-real-group-sur-p6'></p>
      <p class="survey1-paragraph-body" data-i18n='litw-real-group-sur-p7'></p>
      <p class="survey1-paragraph-body" data-i18n='litw-real-group-sur-p8'></p>
    </div>

    <div class="survey1-paragraph" id="YA">
      <p class="survey1-paragraph-body" data-i18n='litw-sur2-body-group-p1' style="font-weight: bolder"></p>
      <ul>
        <li class="content"><span class="survey1-paragraph-body" data-i18n='litw-sur2-body-YA-s1' style="font-weight: bolder"></span>
          <span class="survey1-paragraph-body" data-i18n='litw-sur2-body-YA-p1'></span>
        </li>
        <li class="content">
          <p class="survey1-paragraph-body" data-i18n='litw-sur2-group-YA-p2' style="font-weight: bolder"></p>
        </li>
      </ul>

      <img class="survey1-img" src="../WechatIMG1019.jpg" alt="For every 100 Reddit users who made NA judgements, 47 users are very certain in NA">
      <p class="survey1-paragraph-body lar-font" data-i18n='litw-situation2_group-p4' style="font-weight: bolder"></p>
      <form id="myForm2" class="form needs-validation" novalidate>
        <input type="radio" class="btn-check form-check-input" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1"   name="YA-options" id="YA-option1" autocomplete="off" required>
        <label class="btn btn-light jud form-check-label" for="YA-option1" data-i18n='litw-sur2-body-ans-la1'></label><br>
        <input type="radio" class="btn-check form-check-input" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2"  name="YA-options" id="YA-option2" autocomplete="off" required>
        <label class="btn btn-light jud form-check-label" for="YA-option2" data-i18n='litw-sur2-body-ans-la2'></label>

        <div class="YA-room">
          <div class="collapse" id="collapseExample1">
            <div class="card-body answer">
              <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur2-body-ans-s1'></span>
            </div>
          </div>
          <div class="collapse" id="collapseExample2">
            <div class="card-body answer">
              <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur2-body-ans-s2'></span>
            </div>
          </div>
        </div>


        <p class="survey1-paragraph-body lar-font" data-i18n='litw-sur2-body-cho-p1' style="font-weight: bolder;"></p>

        <input type="radio" class="btn-check form-check-input" name="YA-decision" id="YA-option3" autocomplete="off" required>
        <label class="btn  btn-light cho form-check-label" for="YA-option3" data-target="#ans-1" data-i18n='litw-sur2-body-cho-la1'></label>
        <input type="radio" class="btn-check form-check-input" name="YA-decision" id="YA-option4" autocomplete="off" required>
        <label class="btn  btn-light cho form-check-label" for="YA-option4" data-target="#ans-2" data-i18n='litw-sur2-body-cho-la2'></label>
        <input type="radio" class="btn-check form-check-input" name="YA-decision" id="YA-option5" autocomplete="off" required>
        <label class="btn btn-light cho form-check-label" for="YA-option5" data-target="#ans-3" data-i18n='litw-sur2-body-cho-la3'></label>
        <input type="radio" class="btn-check form-check-input" name="YA-decision" id="YA-option6" autocomplete="off" required>
        <label class="btn btn-light cho form-check-label" for="YA-option6" data-target="#ans-4" data-i18n='litw-sur2-body-cho-la4'></label>
        <input type="radio" class="btn-check form-check-input" name="YA-decision" id="YA-option7" autocomplete="off" required>
        <label class="btn btn-light cho form-check-label" for="YA-option7" data-target="#ans-5" data-i18n='litw-sur2-body-cho-la5'></label>


        <div class="survey1-paragraph-body YA-ans" id="ans-1">
          <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur2-body-YA-an1'></span>
        </div>
        <div class="survey1-paragraph-body YA-ans" id="ans-2">
          <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur2-body-YA-an2'></span>
        </div>
        <div class="survey1-paragraph-body YA-ans" id="ans-3">
          <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur2-body-YA-an3'></span>
        </div>
        <div class="survey1-paragraph-body YA-ans" id="ans-4">
          <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur2-body-YA-an4'></span>
        </div>
        <div class="survey1-paragraph-body YA-ans" id="ans-5">
          <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur2-body-YA-an5'></span>
        </div>


        <p class="survey1-paragraph-body lar-font" data-i18n='litw-sur2-group-reason-p1' style="font-weight: bolder;margin-top: 50px"></p>
        <div class="form-floating">
          <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px" required></textarea>
          <label for="floatingTextarea2">Comments</label>
        </div>
        <div class="invalid-feedback">
          Please answer the above questions.
        </div>

        <button type="submit" class="btn btn-secondary custom" id="sub2" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem; width: auto; margin-top: 30px" onclick="if(this.form.checkValidity()) {    $('#btn-next-page').click(); }else {  this.form.stopPropagation(); } return false;">Next</button>
      </form>
    </div>

  </div>

  <div class="lar-middle" id="NA-group" style="display: none">
    <div class="survey1-paragraph">
      <p class="survey1-paragraph-body lar-font2" style="margin-top: 20px;font-weight: bolder" data-i18n='litw-real-group-sur-p1'></p>
      <span class="survey1-paragraph-body fst-italic" style="font-weight: bolder;" data-i18n='litw-real-group-sur-s1'></span>
      <p class="survey1-paragraph-body" data-i18n='litw-real-group-sur-p2'></p>
      <p class="survey1-paragraph-body" data-i18n='litw-real-group-sur-p3'></p>
      <p class="survey1-paragraph-body" data-i18n='litw-real-group-sur-p4'></p>
      <p class="survey1-paragraph-body" data-i18n='litw-real-group-sur-p5'></p>
      <p class="survey1-paragraph-body" data-i18n='litw-real-group-sur-p6'></p>
      <p class="survey1-paragraph-body" data-i18n='litw-real-group-sur-p7'></p>
      <p class="survey1-paragraph-body" data-i18n='litw-real-group-sur-p8'></p>
    </div>

    <div class="survey1-paragraph" id="NA">
      <p class="survey1-paragraph-body" data-i18n='litw-sur2-body-group-p1' style="font-weight: bolder"></p>
      <ul>
        <li class="content"><span class="survey1-paragraph-body" data-i18n='litw-sur2-body-YA-s1' style="font-weight: bolder"></span>
          <span class="survey1-paragraph-body" data-i18n='litw-sur2-body-YA-p1'></span>
        </li>
        <li class="content">
          <p class="survey1-paragraph-body" data-i18n='litw-situation1-NA-p1' style="font-weight: bolder"></p>
        </li>
      </ul>
    <img class="survey1-img" src="../WechatIMG1022.jpg" alt="For every 100 Reddit users who made YA judgements, 33 users are very certain in YA.">
      <p class="survey1-paragraph-body lar-font" data-i18n='litw-situation2_group-p4' style="font-weight: bolder"></p>

    <form id="myForm3" class="form needs-validation" novalidate>
      <input type="radio" class="btn-check form-check-input" data-bs-toggle="collapse" data-bs-target="#NA-collapseExample1" aria-expanded="false" aria-controls="NA-collapseExample1"   name="NA-options" id="NA-option1" autocomplete="off" required>
      <label class="btn btn-light jud form-check-label" for="NA-option1" data-i18n='litw-sur2-body-ans-la1'></label><br>
      <input type="radio" class="btn-check form-check-input" data-bs-toggle="collapse" data-bs-target="#NA-collapseExample2" aria-expanded="false" aria-controls="NA-collapseExample2"  name="NA-options" id="NA-option2" autocomplete="off" required>
      <label class="btn btn-light jud form-check-label" for="NA-option2" data-i18n='litw-sur2-body-ans-la2'></label>

      <div class="YA-room">
        <div class="collapse" id="NA-collapseExample1">
          <div class="card-body answer">
            <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur2-body-NA-s1'></span>
          </div>
        </div>
        <div class="collapse" id="NA-collapseExample2">
          <div class="card-body answer">
            <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur2-body-NA-s2'></span>
          </div>
        </div>
      </div>


      <p class="survey1-paragraph-body lar-font" data-i18n='litw-sur2-body-cho-p1' style="font-weight: bolder;"></p>

      <input type="radio" class="btn-check form-check-input" name="NA-decision" id="NA-option3" autocomplete="off" required>
      <label class="btn  btn-light cho2 form-check-label" for="NA-option3" data-target="#NA-ans-1" data-i18n='litw-sur2-body-cho-la1'></label>
      <input type="radio" class="btn-check form-check-input" name="NA-decision" id="NA-option4" autocomplete="off" required>
      <label class="btn  btn-light cho2 form-check-label" for="NA-option4" data-target="#NA-ans-2" data-i18n='litw-sur2-body-cho-la2'></label>
      <input type="radio" class="btn-check form-check-input" name="NA-decision" id="NA-option5" autocomplete="off" required>
      <label class="btn btn-light cho2 form-check-label" for="NA-option5" data-target="#NA-ans-3" data-i18n='litw-sur2-body-cho-la3'></label>
      <input type="radio" class="btn-check form-check-input" name="NA-decision" id="NA-option6" autocomplete="off" required>
      <label class="btn btn-light cho2 form-check-label" for="NA-option6" data-target="#NA-ans-4" data-i18n='litw-sur2-body-cho-la4'></label>
      <input type="radio" class="btn-check form-check-input" name="NA-decision" id="NA-option7" autocomplete="off" required>
      <label class="btn btn-light cho2 form-check-label" for="NA-option7" data-target="#NA-ans-5" data-i18n='litw-sur2-body-cho-la5'></label>


      <div class="survey1-paragraph-body NA-ans" id="NA-ans-1">
        <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur2-body-YA-an1'></span>
        <p class="survey1-paragraph-body" data-i18n='litw-sur2-body-leave' style="font-weight: bolder"></p>
      </div>
      <div class="survey1-paragraph-body NA-ans" id="NA-ans-2">
        <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur2-body-YA-an2'></span>
        <p class="survey1-paragraph-body" data-i18n='litw-sur2-body-leave' style="font-weight: bolder"></p>
      </div>
      <div class="survey1-paragraph-body NA-ans" id="NA-ans-3">
        <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur2-body-YA-an3'></span>
        <p class="survey1-paragraph-body" data-i18n='litw-sur2-body-leave' style="font-weight: bolder"></p>
      </div>
      <div class="survey1-paragraph-body NA-ans" id="NA-ans-4">
        <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur2-body-YA-an4'></span>
        <p class="survey1-paragraph-body" data-i18n='litw-sur2-body-leave' style="font-weight: bolder"></p>
      </div>
      <div class="survey1-paragraph-body NA-ans" id="NA-ans-5">
        <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur2-body-YA-an5'></span>
        <p class="survey1-paragraph-body" data-i18n='litw-sur2-body-leave' style="font-weight: bolder"></p>
      </div>
      <div class="invalid-feedback">
        Please answer the question.
      </div>
      <button type="submit" class="btn btn-secondary custom" id="sub3" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem; width: auto;" onclick="if(this.form.checkValidity()) { $('#btn-next-page').click(); }else {  this.form.stopPropagation(); } return false;">Next</button>
    </form>
    </div>
  </div>


</div>
  <div style="display: block;width: 100%;height: 400px;"></div>

 <script>
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

    const label_YA_NA = document.querySelectorAll('.first-cho');
    label_YA_NA.forEach(labels => {
      labels.addEventListener('click', function() {
         label_YA_NA.forEach(label => {
            label.style.pointerEvents = "none"
        });
      });
    });
    
    const label_YA = document.querySelectorAll('.cho');
    label_YA.forEach(label => {
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



    const label_NA = document.querySelectorAll('.cho2');
    label_NA.forEach(label => {
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

</script>
    
    
`;