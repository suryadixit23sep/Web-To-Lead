let captchachecked = false;

function timestamp(event) {
  var response = document.getElementById("g-recaptcha-response");
  if (response == null || response.value.trim() == "") {
    var elems = JSON.parse(
      document.getElementsByName("captcha_settings")[0].value
    );
    elems["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value =
      JSON.stringify(elems);
  }
  if(captchachecked){

  }
  else{
      alert("please check the reCaptcha box to submit the lead");
      event.preventDefault();
  }
}
setInterval(timestamp, 500);
//above function we got it from the generate web to lead form


function captchasuccess()
{
    captchachecked = true;
}