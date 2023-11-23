function sendOTP() {
    const email = document.getElementById('email');
    const verificacaoOtp = document.getElementsByClassName('verificacaoOtp')[0];



    let otp_rand = Math.floor(Math.random() * 10000)

    let emailbody = `
        <h1>Seu código é</h1>${otp_rand}
    `

    Email.send({
        SecureToken: "767def94-feeb-4465-b435-c989fe0fa25f",
        To: email.value,
        From: "pedrotenerelli257@gmail.com",
        Subject: "Seu código",
        Body: emailbody
    }).then(
        message => {
            if (message === "OK")
                alert("Código enviado para o seu email " + email.value);



            verificacaoOtp.style.display = "block";
            const input_otp = document.getElementById('input_otp');
            const btn_otp = document.getElementById('btn_otp');

            btn_otp.addEventListener('click', () => {
                //agora verifica email é valido
                if (input_otp.value == otp_rand) {
                    alert("Email verificado");
                    location.reload();
                }
                else {
                    alert("OTP Invalido");
                }


            })
        })
}




