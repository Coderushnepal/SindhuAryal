// Array of objects containing the elements inside the form
var formAttributes = [
    {
        label: 'Username',
		type: 'text',
		name: 'username',
		placeholder: 'Enter your username',
		errorMsg: 'Username must be at least 3 characters'
	},
	{
		label: 'Email',
		type: 'email',
		name: 'email',
		placeholder: 'Enter your email',
		errorMsg: 'Email is not valid'
	},
	{
		label: 'Password',
		type: 'password',
		name: 'password',
		placeholder: 'Enter your Password',
		errorMsg: 'Password must be at least 6 characters'
	},
	{
		label: 'Confirm Password',
		type: 'password',
		name: 'Comfirmpassword',
		placeholder: 'Re-enter your Password',
		errorMsg: 'Password Required'
	}
]   

function Form() {
    var i = 1;
	this.createFormContainer = function(container) {
		this.form = document.createElement('form');
		this.form.classList.add('form');
		container.append(this.form);
	};

	this.createForm = function(value, index) {
		var label = document.createElement('label');
		label.id = index + 1;
		label.for = value.name;
		label.innerHTML = value.label;
		this.form.appendChild(label);

		input = document.createElement('input');
		input.classList.add('input');
		input.id = value.name;
		input.setAttribute('type', value.type);
		input.setAttribute('name', value.name);
		input.setAttribute('placeholder', value.placeholder);
		if (value.type == 'password') {
			input.setAttribute('required', 'required');
		}
		this.form.appendChild(input);

		var errorDiv = document.createElement('div');
		var divId = value.name + '-'+ 'error'; 
		errorDiv.id = divId;
		errorDiv.classList.add('errorBox', 'hidden');
		errorDiv.innerHTML = value.errorMsg;
		this.form.appendChild(errorDiv);
	};

	this.createSubmitButton = function() {
        var btn = document.createElement("BUTTON");
		btn.type = 'submit';
		btn.name = 'submit';
        btn.innerHTML = 'Submit';
		btn.id = 'submit-btn';
		this.form.appendChild(btn);
	};
}

//------ Form container -----------------
var container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

//------- Form title ---------------------
var title = document.createElement('h1');
title.innerHTML = 'Register with us';
container.appendChild(title);

