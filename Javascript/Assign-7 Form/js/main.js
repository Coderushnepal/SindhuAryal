//------- Form Attributes ---------------------
var form  = new Form();
form.createFormContainer(container);
formAttributes.forEach(function(value, index) {
	form.createForm(value, index);
});

form.createSubmitButton();


//------- Validation ---------------------

const username = document.getElementById('username');
const userError = document.getElementById('username-error');

const email = document.getElementById('email');
const emailError = document.getElementById('email-error');

const password = document.getElementById('password');
const pwdError = document.getElementById('password-error');

const password2 = document.getElementById('Comfirmpassword');
const pwd2Error = document.getElementById('Comfirmpassword-error');

const submitBtn = document.getElementById('submit-btn');

// console.log(userError, username);
// console.log( email, emailError);
// console.log( password, pwdError);
// console.log( password2, pwd2Error);
// console.log( submitBtn);


validate = new Validate();
var validateFunction;

submitBtn.addEventListener('click', function(event) {
	var isFormValid = validateFunction(event);
	if (!isFormValid) {
		event.preventDefault();
	}
});

var validateFunction = function(event) {
	console.log(event);
	console.log(username.value);
	if (validate.isUsernameValid(username.value)) {
		username.className = 'input valid';
		userError.className = 'errorbox hidden';
	} else {
		username.classList.add('invalid');
		userError.classList.add('visible');
	}

	if (validate.isEmailValid(email.value)) {
		email.className = 'input valid';
		emailError.className = 'errorBox hidden';
	} else {
		email.classList.add('invalid');
		emailError.classList.add('visible');
	}

	if (validate.isPasswordValid(password.value)) {
		password.className = 'input valid';
		pwdError.className = 'errorBox hidden';
	} else {
		password.classList.add('invalid');
		pwdError.classList.add('visible');
	}

	if (validate.isPassword2Valid(password2.value, password.value)) {
		password2.className = 'input valid';
		pwd2Error.className = 'errorBox hidden';
	} else {
		password2.classList.add('invalid');
		pwd2Error.classList.add('visible');
	}

	return false;
};