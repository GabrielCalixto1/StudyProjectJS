let username
let password 
//1
function login(){
    username = prompt("Digite o nome de usuário")
    password = prompt("Digite a senha")
}
//2
function loginValidation(username,password){
    let username2 = prompt("Digite o nome de usuário")
    let password2 = prompt("Digite a senha")
    if(username === username2 && password === password2)
    {
        return true
    }else{
        return false
    }
}
//3
login()
loginValidation(username,password)