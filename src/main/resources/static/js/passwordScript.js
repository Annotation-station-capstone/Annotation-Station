// password and confirm password are the same

let password = document.getElementById("reg_password")
    , confirm_password = document.getElementById("confirm_password");
function validatePassword(){
    if(password.value !== confirm_password.value) {
        console.log("passwords dont match")
        confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
        console.log("passwords match")
        confirm_password.setCustomValidity('');
    }
}
// password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
$("#reg_password").keyup(function(){
    validatePassword();
});
function checkPassword() {
    let password = document.getElementById('reg_password').value,
        errors = [];
    if (password.length < 8) {
        errors.push("Your password must be at least 8 characters.");
    }
    if (password.search(/[a-z]/i) < 0) {
        errors.push("Your password must contain at least one letter.");
    }
    if (password.search(/[0-9]/) < 0) {
        errors.push("Your password must contain at least one digit.");
    }
    if(password.search(/[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/) < 0){
        errors.push("Your password must contain at least one special character.")
    }
    if (errors.length > 0) {
        alert(errors.join("\n"));

    }
}
password.onchange = checkPassword;
confirm_password.onkeyup = checkPassword;

$("#reg_password").keyup(function(){
    check_pass();
});

//password strength meter

function check_pass()
{
    var val=document.getElementById("reg_password").value;
    var meter=document.getElementById("meter");
    var no=0;
    if(val!="")
    {
        // If the password length is less than or equal to 6
        if(val.length<=8)no=1;

        // If the password length is greater than 6 and contain any lowercase alphabet or any number or any special character
        if(val.length>8 && (val.match(/[a-z]/) || val.match(/\d+/) || val.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)))no=2;

        // If the password length is greater than 6 and contain alphabet,number,special character respectively
        if(val.length>8 && ((val.match(/[a-z]/) && val.match(/\d+/)) || (val.match(/\d+/) && val.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) || (val.match(/[a-z]/) && val.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/))))no=3;

        // If the password length is greater than 6 and must contain alphabets,numbers and special characters
        if(val.length>8 && val.match(/[a-z]/) && val.match(/\d+/) && val.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/))no=4;

        if(no==1)
        {
            $("#meter").animate({width:'50px'},300);
            meter.style.backgroundColor="red";
            document.getElementById("pass_type").innerHTML="Very Weak";
        }

        if(no==2)
        {
            $("#meter").animate({width:'100px'},300);
            meter.style.backgroundColor="#ee0f1f";
            document.getElementById("pass_type").innerHTML="Weak";
        }

        if(no==3)
        {
            $("#meter").animate({width:'150px'},300);
            meter.style.backgroundColor="#efca0a";
            document.getElementById("pass_type").innerHTML="Good";
        }

        if(no==4)
        {
            $("#meter").animate({width:'200px'},300);
            meter.style.backgroundColor="#00FF40";
            document.getElementById("pass_type").innerHTML="Strong";
        }
    }

    else
    {
        meter.style.backgroundColor="white";
        document.getElementById("pass_type").innerHTML="";
    }
}







