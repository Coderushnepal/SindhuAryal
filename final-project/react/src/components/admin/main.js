function myFunction() {
    var x = document.getElementById("myInput"); //password
    var y = document.getElementById("eyeIcon");  //showpwd
    if (x.type === "password") {
      x.type = "text";
      eyeIcon.title = "Hide Password"
      eyeIcon.class = "fa fa-eye-slash"
    } 
    else  if(x.type === "text") {
      x.type = "password";
      eyeIcon.title = "Show Password"
      eyeIcon.class = "fa fa-eye"
    }
}