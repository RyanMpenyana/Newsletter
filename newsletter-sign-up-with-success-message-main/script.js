const emailBtn = document.getElementById('btn');
const dismissBtn = document.getElementById('dismiss-btn');
const emailInput = document.getElementById('email');
const invalidMail = document.getElementById('invalid-email');



function getEmailValue(inputField){
    emailInput.textContent = inputField;

}

function errorHandle(){
    emailInput.style.backgroundColor = 'hsla(0, 80%, 64% , 0.5)';
    emailInput.style.border = '1px solid red';
    invalidMail.style.visibility = 'visible';
}

function errorReset(){
    emailInput.style = 'default'
    invalidMail.style = 'default'
}
function execution(){
    if (emailInput.value.includes('com') && emailInput.value.includes('@')  === true) {
        grantModal();
    }
    else{
        errorHandle()
    }
}
function grantModal(){
    const Modal = document.getElementById('modal-bg');
    Modal.style.visibility = "visible";
}
function hideModal(){
    const hideModal = document.getElementById('modal-bg');
    hideModal.style.visibility = "hidden";
}
emailInput.addEventListener('click' , errorReset);
emailBtn.addEventListener('click' , execution);
dismissBtn.addEventListener('click', hideModal);
