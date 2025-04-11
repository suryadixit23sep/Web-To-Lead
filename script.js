let captchachecked = false;

function timestamp() {
  var response = document.getElementById("g-recaptcha-response");
  if (response == null || response.value.trim() == "") {
    var elems = JSON.parse(
      document.getElementsByName("captcha_settings")[0].value
    );
    elems["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value =
      JSON.stringify(elems);
  }
  
}
setInterval(timestamp, 500);
//above function we got it from the generate web to lead form


function captchasuccess()
{
    captchachecked = true;
}

// Form submission handler
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form"); // Replace with your specific form ID if needed

    if (form) {
        form.addEventListener("submit", function (event) {
            if (!captchachecked) {
                alert("Please check the reCAPTCHA box to submit the lead.");
                event.preventDefault(); // Prevent form submission
            }
        });
    }
});