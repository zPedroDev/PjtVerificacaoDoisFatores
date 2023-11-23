const email = document.getElementById('email');
const senha = document.getElementById('senha');
const submit = document.getElementsByClassName('form')[0];


submit.addEventListener('submit',(e)=>{
    e.preventDefault();


    Email.send({
        SecureToken : "767def94-feeb-4465-b435-c989fe0fa25f",
        To : 'pedrotenerelli257@gmail.com',
        From : "pedrotenerelli257@gmail.com",
        Subject : "Teste",
        Body : "Teste"
    }).then(
      message => alert(message)
    );

})