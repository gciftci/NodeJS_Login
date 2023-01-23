function ValidateEmail(e) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.value)) {
        e.classList.remove('is-invalid');
        e.classList.add('is-valid');
        checkButton();
    } 
    else {
        e.classList.remove('is-valid');
        e.classList.add('is-invalid');
    }
};
function ValidatePW(pw1) {
    if (pw1.value && pw1.value.length >= 9) {
        pw1.classList.remove('is-invalid');
        pw1.classList.add('is-valid');
        checkButton();
    }
    else {
        pw1.classList.remove('is-valid');
        pw1.classList.add('is-invalid');
    }
};
function ValidatePW2(pw2, pw1) {
    if (pw2.value == pw1.value && pw1.value) {
        pw2.classList.remove('is-invalid');
        pw2.classList.add('is-valid');
        checkButton();
    }
    else if (pw2.value.length = 0 || pw1.value.length == 0) {
        pw2.classList.remove('is-invalid');
        pw2.classList.remove('is-valid');
    }
    else {
        pw2.classList.remove('is-valid');
        pw2.classList.add('is-invalid');
    }
};
function checkButton() {
    email = document.getElementById('inputEmail');
    button = document.getElementById('buttonSub');
    pw2 = document.getElementById('inputPassword');
    if ( email.classList.contains('is-valid') && pw2.classList.contains('is-valid') ) {
        button.classList.remove('btn-secondary');
        button.classList.add('btn-danger');
        button.disabled = false;
    }
    else {
        button.classList.add('btn-secondary');
        button.classList.remove('btn-danger');
        button.disabled = true;
    }
}
