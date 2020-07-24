function Form() {
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

    document.body.appendChild(form);

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

    
