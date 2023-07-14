const emailBtn = document.getElementById('btn');
const dismissBtn = document.getElementById('dismiss-btn');
const emailInput = document.getElementById('email');
const invalidMail = document.getElementById('invalid-email');
const overwrite = document.getElementById('email-variation')


function parseEnteredEmail(parse) {
    overwrite.textContent = parse;
}
function errorHandle() {
    emailInput.style.backgroundColor = 'hsla(0, 80%, 64% , 0.5)';
    emailInput.style.border = '1px solid red';
    invalidMail.style.visibility = 'visible';
}

function ErrorReset() {
    emailInput.style = ""
    invalidMail.style = ""
}

function execution() {
    if (emailInput.value.includes('com') && emailInput.value.includes('@') === true) {
        grantModal();
        parseEnteredEmail(emailInput.value);
    }
    else {
        errorHandle()
    }
}

function grantModal() {
    const Modal = document.getElementById('modal-bg');
    Modal.style.visibility = "visible";
}
function hideModal() {
    const hideModal = document.getElementById('modal-bg');
    hideModal.style.visibility = "hidden";
    emailInput.value = ""
}
emailInput.addEventListener('click', ErrorReset);
emailBtn.addEventListener('click', execution);
dismissBtn.addEventListener('click', hideModal);