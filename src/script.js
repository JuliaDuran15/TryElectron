const pass= document.querySelector('#pass')
const newPassword = document.querySelector("#newPassword")

function generatePass(){
    if(pass.value === ''){
        alert('Digite o tamanho da senha')
        return;
    }

    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFHIJKLMNOPQRSTUVWXYZ1234567890"
    let password = "";
    for(var i=0, n =charset.length;i < pass.value; i++){ 
        password += charset.charAt(Math.floor(Math.random() *n));
    }

    let result = document.createTextNode(password)
    return newPassword.appendChild(result);

}