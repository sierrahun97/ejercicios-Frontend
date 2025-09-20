let password = document.querySelector("#psw");
let mensaje = document.querySelector("#message");
let minusculas = document.querySelector("#letter");
let mayusculas = document.querySelector("#capital");
let numeros = document.querySelector("#number");
let minimo = document.querySelector("#lenght");

//expresiones regulares (regEX)
let minus = /[a-z]/;
let mayus = /[A-Z]/;
let num = /[0-9]/;
let simbolos = /[*$#+-.,;:_=)(/&%$#"!)]/;

//agregar un evento a la contraseña
password.addEventListener("focus", () => {
    console.log("estoy en la contraseña");
    mensaje.style.display = "block";
});

password.addEventListener("blur" , () => {
    console.log("No estoy en la contraseña")
    mensaje.style.display = "none";
});

password.addEventListener("keyup", () => {
    console.log(password.value);
    //compara minusculas
    if (password.value.match(minus)) {
        minusculas.classList.replace("invalid", "valid");
    } else {
        minusculas.classList.replace("valid", "invalid");
    }
    //compara mayúsculas
    if (password.value.match(mayus)) {
        mayusculas.classList.replace("invalid", "valid");
    } else {
        mayusculas.classList.replace("valid", "invalid");
    }
    //compara numeros
    if (password.value.match(num)) {
        numeros.classList.replace("invalid", "valid");
    } else {
        numeros.classList.replace("valid", "invalid");
    }
    //compara minimo caracteres
    if (password.value.lenght >= 8) {
        minimo.classList.replace("invalid", "valid");
    } else {
        minimo.classList.replace("valid", "invalid");
    }
});