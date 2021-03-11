const form = document.getElementById('subscription');
const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs(){
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (firstNameValue === ""){
        setErrorFor(firstName, 'First Name cannot be empty');
    } else {
        setSuccessFor(firstName);
    }

    if (lastNameValue === ""){
        setErrorFor(lastName, 'Last Name cannot be empty');
    } else {
        setSuccessFor(lastName);
    }

    if (emailValue === ""){
        setErrorFor(email, 'Email cannot be empty');
    } else if (!validEmail(email)){
        setErrorFor(email, 'Looks like this is not an valid email')
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === ""){
        setErrorFor(password, 'Password cannot be empty');
    } else {
        setSuccessFor(password);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = "form-control error";
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function validEmail(email) {
  return (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
}