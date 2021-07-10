

const submit = document.querySelector(".submit")

const firstName = document.querySelector(".primeiro-nome")

const lastName = document.querySelector('.ultimo-nome')

const password = document.querySelector(".senha")

const email = document.querySelector(".email")

const required = document.querySelectorAll('[required]')


submit.addEventListener("click", (event) => {
    event.preventDefault()

    if (!firstName.value) {
        firstName.classList.add("input-invalido")
        alert('primeiro nome vazio')

    } else if (firstName.value) {
        firstName.classList.remove("input-invalido")
        firstName.classList.add("input-valido")
    }

    if (!lastName.value) {
        lastName.classList.add("input-invalido")
        alert('ultimo nome vazio')

    } else if (lastName.value) {
        lastName.classList.remove("input-invalido")
        lastName.classList.add("input-valido")
    }


    if (!password.value) {
        password.classList.add("input-invalido")
        alert('senha vazia')

    } else if (password.value) {
        password.classList.remove("input-invalido")
        password.classList.add("input-valido")
    }
    if(!email.value){
        email.classList.add('input-invalido')
        alert('email vazio')
    }
    else if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 || email.value.indexOf('@') - email.value.indexOf('.') === 1 
    || email.value.indexOf('.') - email.value.indexOf('@') === 1){
        email.classList.add("input-invalido")
        alert('formato de email invalido')

    }else{
    
        email.classList.remove('input-invalido')
        email.classList.add('input-valido')
        
    }

})