let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOK = false
let emailOK = false
let assuntoOK = false



/* campo nome*/

nome.style.width = '100%'
nome.style.height = '25px'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3){
    txtNome.innerHTML = 'Nome Invalido'
    txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = ''
        txtNome.style.color = ''
        nomeOK = true

    }

}

/* campo email*/

email.style.width = '100%'
email.style.height = '25px'

function validaEmail() {
    let txtEmail = document.querySelector('#email')
    if(email.value.indexOF('@') == -1 || email.value.indexOF('.') ){
        txtEmail.innerHTML = 'Email Invalido'
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = ''
        txtEmail.style.color = ''
        emailOK = true

    }

}

/* campo assunto*/

email.style.width = '100%'
email.style.height = '30px'

function validaAssunto() {
    let txtAssunto = document.querySelector('#assunto')
    if(assunto.value.length >=300){
        txtAssunto.innerHTML = 'Limite de caracteres ultrapassado'
        txtAssunto.style.color = 'red'

    }else{
        txtAssunto.innerHTML = ''
        txtAssunto.style.color = ''
        assuntoOK = true
    }

}

/* campo botao*/

function enviar() {
    if(nomeOK == true && emailOK == true && assuntoOK == true){
        alert('Formulario enviado com sucesso')
    }else{
        alert('Formulario incorreto')
    }
}
