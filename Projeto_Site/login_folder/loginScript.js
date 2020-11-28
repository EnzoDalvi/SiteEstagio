function logar(){
    
    var username= document.getElementById("Login").value
    var senha = document.getElementById("Senha").value
    var sub = document.getElementById("error")

    if(username == 'user' && senha == '123')
    {
        sub.style.visibility= "visible"
    }
   else //if(username == userc && senha == senhac){
        window.alert("Você está logado")  
        location.replace("/home_folder/pag_home.html")
   // }
}   