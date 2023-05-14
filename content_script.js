let isRequired;
let isEmailToText;
let isNumberToText;

function init() {

}
function disableRequired() {
    // get all elements that have the required attribute
    let required = Array.from(document.querySelectorAll('[required]'));
    if(required.length == 0) return;
    for (let i = 0; i < required.length; i++) {
        required[i].removeAttribute('required');
    }
}
function emailToText() {
    // get all elements that have the type email
    let email = Array.from(document.querySelectorAll('[type="email"]'));
    if(email.length == 0) return;
    for (let i = 0; i < email.length; i++) {
        email[i].setAttribute('type', 'text');
    }
}
function numberToText() {
    // get all elements that have the type number
    let number = Array.from(document.querySelectorAll('[type="number"]'));
    if(number.length == 0) return;
    for (let i = 0; i < number.length; i++) {
        number[i].setAttribute('type', 'text');
    }
}

// content.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'sendData') {
      isRequired = request.isRequired;
      isEmailToText = request.isEmailToText;
      isNumberToText = request.isNumberToText;

        if(isRequired) 
            disableRequired();
        if(isEmailToText)
            emailToText();
        if(isNumberToText)
            numberToText();
    }
  });
  


// features to add:
// 1. add a button to the extension that will allow the user to turn the extension on and off
// 2. add a button to the extension that will allow the user to turn the extension on and off for a specific website
// add checkbox that will make input email switch to type text
// add checkbox that will make input number switch to type text
