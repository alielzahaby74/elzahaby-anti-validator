// popup.js
document.addEventListener('DOMContentLoaded', function () {

    let isRequired = localStorage.getItem("isRequired") ? localStorage.getItem("isRequired") : false;
    let isEmailToText = localStorage.getItem("isEmailToText") ? localStorage.getItem("isEmailToText") : false;
    let isNumberToText = localStorage.getItem("isNumberToText") ? localStorage.getItem("isNumberToText") : false;

    if(checkBoolean(isRequired) || checkBoolean(isEmailToText) || checkBoolean(isNumberToText)) {
        sendData();
        setOldValues();
    }
    antiBtn = document.getElementById("anti-validate");
    antiBtn.addEventListener("click", function () {

        isRequired = document.getElementById("disable-required").checked;
        isEmailToText = document.getElementById("email-to-text").checked;
        isNumberToText = document.getElementById("number-to-text").checked;


        localStorage.setItem("isRequired", isRequired);
        localStorage.setItem("isEmailToText", isEmailToText);
        localStorage.setItem("isNumberToText", isNumberToText);

        sendData();
    });

    function sendData() {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'sendData', isRequired: isRequired, isEmailToText: isEmailToText, isNumberToText: isNumberToText });
          });
      }
    
      function setOldValues() {
        document.getElementById("disable-required").checked = isRequired === "true" ? true : false;
        document.getElementById("email-to-text").checked = isEmailToText === "true" ? true : false;
        document.getElementById("number-to-text").checked = isNumberToText === "true" ? true : false;
      }
  });

  function checkBoolean($value) {
    if($value === "true" || $value === true || $value === 1 || $value === "1")
        return true;
    return false;
  }