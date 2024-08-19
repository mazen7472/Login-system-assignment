let signInEmail = document.querySelector("#signInEmail");
let signInPassword = document.querySelector("#signInPassword");
let signInBtn = document.querySelector("#signInBtn");
let alertMessage=document.querySelector("#alertMessage");
let dataList=[];

if(localStorage.userData==null){
    dataList=[];
}
else{
    dataList=JSON.parse(localStorage.getItem("userData"))
}

function logIn(){
if(isInputEmpty()){
    getAlertMessage("All inputs are required","red")
}
else{
    if(checkEmailAndPassword()==true){
         window.location.href='home.html';
       
      }
      else{
       getAlertMessage("Incorrect email or password","red")
      }
}

}

signInBtn.addEventListener('click',function(){
 logIn();
})

function checkEmailAndPassword(){
    for (let i = 0 ; i < dataList.length ; i++) {
        if(dataList[i].email == signInEmail.value && dataList[i].password == signInPassword.value){
            localStorage.setItem('name',dataList[i].name);
            return true;
        }
        
    }
   
}
function isInputEmpty(){
    if(signInEmail.value == ''||signInPassword.value == ''){
       return true;
    }
   
}

function getAlertMessage(text,color){
    alertMessage.innerHTML=text;
    alertMessage.style.color=color;
    
}
