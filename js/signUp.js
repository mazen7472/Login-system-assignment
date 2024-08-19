let userName= document.querySelector("#userName");
let userEmail= document.querySelector("#userEmail");
let userPassword= document.querySelector("#userPassword");
let signUpBtn= document.querySelector("#signUpBtn");
let alertMessage=document.querySelector("#alertMessage");
let boxInfo=document.querySelector("#boxInfo");
let close=document.querySelector("#close");
let dataList;

//regex
nameRegex= /^[A-Za-z0-9]{3,}(?:[ _-][A-Za-z0-9]+)*$/;
emailRegex=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
passwordRegex=/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

if(localStorage.userData==null){
    dataList=[];
}
else{
    dataList=JSON.parse(localStorage.getItem("userData"))
}

function signUp(){
  
    if(isInputEmpty()){
        getAlertMessage("All inputs are required","red");
        
    }
    else{
        if(isEmailExist()){
            getAlertMessage("Email already exist","red");
        }
        else{
        if(validateUserName()&&validateUserEmail()&&validateUserPassword()){
            let data={
                name:userName.value,
                email:userEmail.value,
                password:userPassword.value
        
            }
          dataList.push(data);
          setLocal();
          clearForm();
          getAlertMessage("Success","green");
        }
        else{
            boxInfo.classList.replace('d-none','d-block')
        }
     
    }
  
    
}
}

signUpBtn.addEventListener('click',function(){
    signUp();
});

function getAlertMessage(text,color){
    alertMessage.innerHTML=text;
    alertMessage.style.color=color;
    
}

//setLocal
function setLocal(){
    localStorage.setItem("userData",JSON.stringify(dataList));
}

//clearValues
function clearForm(){
    userName.value='';
    userEmail.value='';
    userPassword.value='';
}

//Validation

function isInputEmpty(){
    if(userName.value ==''||userEmail.value == ''||userPassword.value == ''){
       return true;
    }
   
}
function isEmailExist(){
    for(let i=0;i<dataList.length;i++){
       if(dataList[i].email==userEmail.value){
        return true;
       }
       
    }
}

function validateUserName(){
     
    if(nameRegex.test(userName.value)){
        userName.style.border='none';
        return true;
    }else{
        userName.style.border='5px solid red';
        return false;
    }
    }
    
    function validateUserEmail(){
        
        if(emailRegex.test(userEmail.value)){
            userEmail.style.border='none';
            return true;
         
        }else{
            userEmail.style.border='5px solid red';
            return false;
            
        }
       
    }
    function validateUserPassword(){
        
        if(passwordRegex.test(userPassword.value)){
            userPassword.style.border='none';
            return true;
         
        }else{
            userPassword.style.border='5px solid red';
            return false;
            
        }
       
    }
    
  
    userName.addEventListener('input',function(){
        validateUserName();
        
    })
    userEmail.addEventListener('input',function(){
        validateUserEmail();
        
    })
    userPassword.addEventListener('input',function(){
        validateUserPassword();
        
    })

    close.addEventListener('click',function(){
        boxInfo.classList.replace('d-block','d-none')
    })