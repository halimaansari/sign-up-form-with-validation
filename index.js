
function validation() {
    const form = document.forms['formfill'];
    const popup = document.getElementById('popup');
    const result = document.getElementById('result');


    result.innerHTML = "";

    if (form.Username.value === "") {
        result.innerHTML = "Enter Username";
        return false;
    } else if (form.Username.value.length < 6) {
        result.innerHTML = "User name At least six letters";
        return false;
    } else if (form.email.value === "") {
        result.innerHTML = "Enter Your Email";
        return false;
    } else if (form.password.value === "") {
        result.innerHTML = "Enter Your Password";
        return false;
    } else if (form.password.value.length < 6) {
        result.innerHTML = "Password must be 6 characters";
        return false;
    } else if (form.Cpassword.value === "") {
        result.innerHTML = "Enter confirm password";
        return false;
    } else if (form.Cpassword.value !== form.password.value) {
        result.innerHTML = "Passwords do not match";
        return false;
    } else if (form.password.value === form.Cpassword.value) {
    
        popup.classList.add('open-slide');
        return false; 
    }
}

document.getElementById('popup').querySelector('button').addEventListener('click', function() {
    this.closest('.popup').classList.remove('open-slide');
});

