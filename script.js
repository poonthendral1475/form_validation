let form=document.getElementById('form')
let userName=document.getElementById('username')
let eMail=document.getElementById('email')
let password=document.getElementById('password')
let cPassword=document.getElementById('cpassword')
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
})
function validateInputs(){
    let userNameVal=userName.value.trim();
    let eMailVal=eMail.value.trim();
    let passwordVal=password.value.trim();
    let cPasswordVal=cPassword.value.trim();
    if(userNameVal==='')
    {
       setError(userName,'username is reruired')
    }
    else{
        setSucess(userName)
    }
    if(eMailVal==='')
    {
        setError(eMail,'email is required')
    }
    else if(!validateEmail(eMailVal))
    {
        setError(eMail,'pls enter a valid mail')
    }
    else{
        setSucess(eMail)
    }
    if(passwordVal==='')
    {
        setError(password,'password is required')
    }
    else if(passwordVal.length<8){
        setError(password,'password need atleast 8 character')
    }
    else{
        setSucess(password)
    }
    if(cPasswordVal==='')
    {
       setError(cPassword,'confirm password is required')
    }
    else if(cPasswordVal!==passwordVal)
    {
        setError(cPassword,'password is not match')
    }
    else{
        setSucess(cPassword)
    }
}
function setError(element,message){
     let inputGroup=element.parentElement;
     let errorElement=inputGroup.querySelector('.error');
     errorElement.innerText=message;
     inputGroup.classList.add('error')
     inputGroup.classList.remove('sucess')
}
function setSucess(element){
    let inputGroup=element.parentElement;
    let errorElement=inputGroup.querySelector('.error')
   
    errorElement.innerText='';
    inputGroup.classList.add('sucess')
    inputGroup.classList.remove('error')
}
function validateEmail(email){
    return String(email)
    .toLowerCase()
    .match("^[A-Za-z0-9](([a-zA-Z0-9,=\.!\-#|\$%\^&\*\+/\?_`\{\}~]+)*)@(?:[0-9a-zA-Z-]+\.)+[a-zA-Z]{2,9}$");
}

