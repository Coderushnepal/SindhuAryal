function myFunction() {
    var x = document.getElementById("myInput"); //password
    var y = document.getElementById("eyeIcon");  //showpwd
    if (x.type === "password") {
      x.type = "text";
      eyeIcon.title = "Hide Password"
      eyeIcon.className = "fa fa-eye-slash"
    } 
    else  if(x.type === "text") {
      x.type = "password";
      eyeIcon.title = "Show Password"
      eyeIcon.className = "fa fa-eye"
    }

            // or
    //         <input type="password" class="password" id="password" placeholder="enter password here">
    // <i class="fa fa-eye" id="showpwd" aria-hidden="true"></i>
    // eyeIcon.addEventListener('click', function(e) {
    //     var type = x.getAttribute('type') == 'password' ? 'text' : 'password';
    //     x.setAttribute('type', type);
    //     this.classList.toggle('fa-eye-slash');
    // });

  }

