function userIsCorrect(user, password) {
    return user.value == "anna" && password.value == "654321";
}

function login() {
    var user = document.getElementById("user");
    var password = document.getElementById("password");


if (user.value == "" || password.value == "") {
    alert ("Por favor preencha todos os campos");
}

if (this.userIsCorrect(user, password)) {
    alert(
        "Obrigada sr(a) " + 
        user.value + 
        ". \n Em breve nosso sistema estará disponível para acesso do público"
    );
} else {
    alert("Email ou senha incorretos");
    }
}