let userFirstName = document.getElementById("firstname");
let userLastName = document.getElementById("lastname");
let userUserName = document.getElementById("username");
let userEmail = document.getElementById("email");
let userPassword = document.getElementById("password");
let userMobile = document.getElementById("mobile");
let userAddress = document.getElementById("address");
let submitBtn = document.getElementById("submitBtn");
let allUserData =[]

if(localStorage.getItem('users') !== null)
{
    allUserData = JSON.parse(localStorage.getItem('users'))
}
console.log(submitBtn);
// Register
submitBtn.addEventListener('click' , function(){
    let userData = {
        fname : userFirstName.value,
        lname : userLastName.value,
        username : userUserName.value,
        uemail : userEmail.value,
        upassword : userPassword.value,
        umobile : userMobile.value,
        uaddress : userAddress.value,
    }
    allUserData.push(userData)
    console.log(allUserData);
    localStorage.setItem("users" , JSON.stringify(allUserData))
})

// ------------------------------------------------------------------

