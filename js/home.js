let userName = document.querySelector("#userName");
let logOutBtn = document.querySelector("#logOutBtn");

if(localStorage.getItem('name')!= null){
    userName.innerHTML=`${localStorage.getItem('name')}`
}
logOutBtn.addEventListener('click',function(){
    localStorage.removeItem('name');
})