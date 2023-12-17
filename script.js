const password = document.querySelector('#pswd');
const confirmPassword = document.querySelector('#cpswd');
const err = document.querySelector('.error');

const updatePasswordMatchStatus = () => {
    if (password.value !== confirmPassword.value) {
        err.textContent = "* Passwords do not match";
        confirmPassword.style.borderColor = 'red';
        password.style.borderColor = 'red';
    } else {
        err.textContent = '';
        confirmPassword.style.borderColor = '';
        password.style.borderColor = ''; 
    }
};

confirmPassword.addEventListener('input', updatePasswordMatchStatus);

password.addEventListener('input', () => {
    updatePasswordMatchStatus();
});
