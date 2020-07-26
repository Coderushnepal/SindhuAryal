## Form Validation Using Pure JavaScript

Four fields and everything should be added with javascript in run-time. Classes can be defined but should be attached in JS.
1. Name: is required and length > 3
2. Email: Valid email and is required
3. Password: length > 6 and is required
4. Confirm Password: should be equal to Password
On clicking, Submit should trigger the validation.
Error message should be shown exactly below the input field
Border color should be red if there is an error
Border color should be green if there is no error and no error message should show

// form.js
function Form(){
}

// main.js
var form  = new Form();

// validate.js
function email(value){
return true if valid else return false;
}

function username(){
	//write your rules and conditions
return true if valid else return false;	
}

------------ long method -------------------
 //body - container
    //container - form
    //form - h1, label, input


function Form() {
    var container = document.createElement('div');
    container.classList.add('container');
    document.body.appendChild(container);

    //body - container
    //container - form
    //form - h1, label, input

    var form =  document.createElement("form");
    //  form.method = " ";
        form.action = " ";  
        form.classList.toggle("form");

    var title = document.createElement('h1');
    title.innerHTML = "Register with us";
    form.appendChild(title);

    //Username
    var uname =  document.createElement("label");
    uname.innerText = "Username";
    form.appendChild(uname);

    var nextLine = document.createElement('br');
    form.appendChild(nextLine);

    var username =  document.createElement("input");
    username.name = "uname";
    username.type = "text";
    username.placeholder = "Enter username";
    form.appendChild(username);

    var nextLine = document.createElement('br');
    form.appendChild(nextLine);
    var nextLine = document.createElement('br');
    form.appendChild(nextLine);

    //Email
    var Email = document.createElement("label");
    Email.innerText = "Email";
    form.appendChild(Email);

    var nextLine = document.createElement('br');
    form.appendChild(nextLine);

    var email = document.createElement("input");
    email.name="email";
    email.type = "email";
    email.placeholder ="Enter email";
    form.appendChild(email);

    var nextLine = document.createElement('br');
    form.appendChild(nextLine);
    var nextLine = document.createElement('br');
    form.appendChild(nextLine);


    //Password
    var pwd  = document.createElement("label"); 
    pwd.innerText = "Password";
    form.appendChild(pwd);

    var nextLine = document.createElement('br');
    form.appendChild(nextLine);

    var password  = document.createElement("input");
    password.name = "password";
    password.type = "password";
    password.placeholder ="Enter password";
    form.appendChild(password);

    var nextLine = document.createElement('br');
    form.appendChild(nextLine);
    var nextLine = document.createElement('br');
    form.appendChild(nextLine);


    //Confirm Password
    var cpd = document.createElement("label"); 
    cpd.innerText = "Confirm Password";
    form.appendChild(cpd);

    var nextLine = document.createElement('br');
    form.appendChild(nextLine);

    var cpwd = document.createElement("input");
    cpwd.name="cpassword";
    cpwd.type =  "password";
    cpwd.placeholder = "Confirm password";
    form.appendChild(cpwd);

    var nextLine = document.createElement('br');
    form.appendChild(nextLine);
    var nextLine = document.createElement('br');
    form.appendChild(nextLine);

    var btn = document.createElement("BUTTON");
    btn.innerHTML = "SUBMIT";
    form.appendChild(btn);
    btn.classList.toggle("btn");

    container.appendChild(form);

    // form.submit();
}




    // var frame = document.createElement('div');
    // document.body.appendChild(frame);
    // frame.classList.toggle("frame");

    // var title = document.createElement('h1');
    // title.innerHTML = "Register with us"
    // frame.appendChild(title);

    // var username = document.createElement('label');
    // username.innerText = "Username";
    // frame.appendChild(username);
    // var uname = document.createElement('input');
    // frame.appendChild(uname);

    // var email = document.createElement('label');
    // email.innerText = "Email";
    // frame.appendChild(email);
    // var Email = document.createElement('input');
    // frame.appendChild(Email);

    // var password = document.createElement('label');
    // password.innerText = "Password";
    // frame.appendChild(password);
    // var pwd = document.createElement('input');
    // frame.appendChild(pwd);

    // var Cpassword = document.createElement('label');
    // Cpassword.innerText = "Confirm Password";
    // frame.appendChild(Cpassword);
    // var cpwd = document.createElement('input');
    // frame.appendChild(cpwd);


    