let errorText = document.getElementById('error');
let pwd = document.getElementById('pwd');
let confirmPwd = document.getElementById('confirm-pwd');

pwd.addEventListener('keyup', pwdMatch);
confirmPwd.addEventListener('keyup', pwdMatch);

function pwdMatch() {
    if (pwd.value !== confirmPwd.value) {
        pwd.classList.add('pwd-error');
        confirmPwd.classList.add('pwd-error');
        errorText.textContent = '* Passwords do not match';
    } else {
        pwd.classList.remove('pwd-error');
        confirmPwd.classList.remove('pwd-error');
        errorText.textContent = ' ';
    }
}