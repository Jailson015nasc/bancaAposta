const buttonLogin = document.querySelector(".abrir-login")
const modalLogin = document.querySelector(".modal-login")

const closeLogin = document.querySelector(".closelog")

buttonLogin.onclick = function (){
    modalLogin.showModal()
}
closeLogin.onclick = function(){
    modalLogin.close()
}

const buttonRegistrar = document.querySelector(".abrir-registrar")
const modalRegistrar = document.querySelector(".modal-registrar")

const closeRegistrar = document.querySelector(".closereg")

buttonRegistrar.onclick = function (){
    modalRegistrar.showModal()
}
closeRegistrar.onclick = function(){
    modalRegistrar.close()
}