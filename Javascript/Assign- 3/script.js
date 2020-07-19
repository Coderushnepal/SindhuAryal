function myFunction() {
    var x = document.getElementById("myInput");
    var y = document.getElementById("eyeIcon");
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
    //eyeIcon.addEventListener('click', function(e) {
    //     var x = password.getAttribute('type') == 'password' ? 'text' : 'password';
    //     password.setAttribute('x', type);
    //     this.classList.toggle('fa-eye-slash');
    // });

  }

