let userUserName = document.getElementById("username");
let userPassword = document.getElementById("password");
let signInBtn = document.getElementById('loginBtn')
let logged = false
var userFirstName = ""
if(window.localStorage.getItem('users') !== null)
{
    var localStorageData = JSON.parse(window.localStorage.getItem('users'))
}

signInBtn.addEventListener('click' , ()=>{
    for (var i = 0; i < localStorageData.length; i++)
     {
        if(userUserName.value === localStorageData[i].username && userPassword.value === localStorageData[i].upassword)
        {
            logged = true
            userFirstName = localStorageData[i].fname
            loggedFunction()
        }
        else
        {
            logged = false
        }
    }
})
function loggedFunction()
{
    if(logged === true)
    {
        let welcome = document.getElementById('welcomeusername')
        welcome.innerHTML = `Welcome ${userFirstName}`
    }
}








// if(window.localStorage.getItem('users') !== null)
// {
//     var localStorageData = JSON.parse(window.localStorage.getItem('users'))
// }
// // console.log(localStorageData[5].username);
// signInBtn.addEventListener('click' , function(){
//     localStorageLoopData()
// })
// function localStorageLoopData()
// {
//     for (let i = 0; i < localStorageData.length; i++) {
//         if(userUserName.value === localStorageData[i].username && userPassword.value === localStorageData[i].upassword)
//         {
//             console.log("OK");
//              logged = true
//              if(logged == true)
//              {
//                  let welcome = document.getElementById('welcomeusername');
//                  welcome.innerHTML = `Welcome ${localStorageData[i].fname}`
//              }
//         }
//         else
//         {
//             logged = false
//         }
        
//     }
// }
// function localStorageLoopData()
// {
//     for (let i = 0; i < localStorageData.length; i++) {
//         if(validation(i) === true)
//         {
//             console.log("Welcome");
//         }
//         else
//         {
//             alert("OK")
//         }
//     }
// }
// function validation(index)
// {
//     if(userUserName.value === localStorageData[index].username && userPassword.value === localStorageData[index].upassword)
//     {
//         return true
//     }
//     else
//     {
//         return false
//     }
// }
// // if(window.localStorage.getItem('users') !== null)
// {
//     var localStorageData = JSON.parse(localStorage.getItem('users'))
//     // var x = JSON.parse(window.localStorage.getItem('users'));
// }

// // console.log(x);
// signInBtn.addEventListener('click' , function(){
//     localStorageLoopData()
// })
// function localStorageLoopData()
// {
//     for (let i = 0; i < localStorageData.length; i++) {
//         if(userUserName.value === localStorageData[i].username && userPassword.value === localStorageData[i].upassword)
//         {
//             var logged = true
//         }
//         else
//         {
            
//         }

//     }
//     if(logged == true){
//         console.log('ok')
//     }
// }

// console.log(signInBtn);
// console.log(window.localStorage.getItem('users'));
// let newObject = JSON.parse(window.localStorage.getItem('users'))
// // console.log(JSON.parse(newObject));
// for (let i = 0; i < newObject.length; i++) {
//     console.log(newObject[i].username);
    
// }
