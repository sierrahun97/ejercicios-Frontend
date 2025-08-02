// 1.	Pide al usuario un número y determina si es par o impar y si es positivo o negativo.



// 2.	Pide al usuario dos números y determina cual es el número mayor y cual es el menor.
let num1 = Number(prompt("Ingrese un número:"));
let num2 = Number(prompt("Ingrese otro número:"));
if (num1 > num2) {
    document.write ("El número mayor es " + num1);
} else if (num1 < num2) {
    document.write("El número mayor es " + num2);
}

// 3.	Pide al usuario que digite un numero del 1 al 7 y Realiza el código correspondiente para saber cuál es el dia de la semana correspondiente al número digitado;
let dia = Number(prompt("Ingrese un número del 1 al 7:"));
switch (dia) {
    case 1:
        document.write("Lunes");
        break;
    case 2:
        document.write("Martes"); 
        break;
    case 3:
        document.write("Miércoles");
        break;
    case 4:
        document.write("Jueves");
        break;
    case 5:
        document.write("Viernes");
        break;
    case 6: 
        document.write("Sábado");
        break;  
    case 7:
        document.write("Domingo");
        break;
    default:
        document.write("Por favor, ingrese un número del 1 al 7.");
        break;
}
// 4.	 Se necesita clasificar la etapa de una persona solo pidiéndole como dato su edad. (Si la edad es menor de 18 es adolente), (si la edad está en el rango de 18 a 28 es adulto adolecente), (si la edad está entre 29 a 49 es adulto), (si la edad está entre 50 en adelante es adulto mayor). Mostrar en pantalla la etapa de la persona.
let edad = Number(prompt("Ingrese su edad:"));
if (edad < 18) {
    document.write("Adolescente");
} else if (edad >= 18 && edad <= 28) {
    document.write("Adulto adolescente");
} else if (edad >= 29 && edad <= 49) {
    document.write("Adulto");
} else if (edad >= 50) {    
    document.write("Adulto mayor");
}


// 5.	 Realice una factura de venta, ingrese el valor de 3 productos y calcule lo siguiente:
// si paga en efectivo paga el valor total.
// si paga con cupón realice un 3% de descuento
// si paga a crédito aumente el 5% al total.

let producto1 = Number(prompt("Ingrese el valor del primer producto:"));
let producto2 = Number(prompt("Ingrese el valor del segundo producto:")); 
let producto3 = Number(prompt("Ingrese el valor del tercer producto:"));
let total = producto1 + producto2 + producto3;
let cupon = total * 0.03;
let credito = total * 0.05;

let metodoPago = prompt("Ingrese el método de pago (efectivo, cupón, crédito):")
if (metodoPago == "efectivo") {
    document.write("El total a pagar es: " + total);
}
else if (metodoPago === "cupón") {
    document.write("El total a pagar con cupón es: " + (total - cupon));
}
else if (metodoPago === "crédito") {
    document.write("El total a pagar a crédito es: " + (total + credito));
} else {
    document.write("Método de pago no válido.");
}


// 6.	 Se pide ingresar 3 notas y calcular el promedio de un alumno, mostrar el nivel del alumnos según su promedio: 
// *  menos 2,0 = Malo
// *  menos 2,9 = Debe recuperar
// * entre 3 – 3,9 = Regular.
// * entre 4 – 4,4 = Bueno.
// * entre 4,5 – 5 = Muy bueno.

let nota1 = Number(prompt("Ingrese la primera nota:"));
let nota2 = Number(prompt("Ingrese la segunda nota:")); 
let nota3 = Number(prompt("Ingrese la tercera nota:"));
let promedio = (nota1 + nota2 + nota3) / 3;
if (promedio < 2.0) {
    document.write("Nivel del alumno: Malo");
}
else if (promedio < 2.9) {
    document.write("Nivel del alumno: Debe recuperar");
}
else if (promedio >= 3 && promedio < 3.9) {
    document.write("Nivel del alumno: Regular");
}
else if (promedio >= 4 && promedio < 4.5) {
    document.write("Nivel del alumno: Bueno");
}
else if (promedio >= 4.5 && promedio <= 5) {
    document.write("Nivel del alumno: Muy bueno");
} else {
    document.write("Promedio no válido.");
}


// 7.	 Calcula la edad actual de una persona a partir de su fecha de nacimiento.
// Los datos a pedir son: día, mes y año de nacimiento.
let diaNacimiento = Number(prompt("Ingrese el día de nacimiento:"));
let mesNacimiento = Number(prompt("Ingrese el mes de nacimiento:"));
let añoNacimiento = Number(prompt("Ingrese el año de nacimiento:"));



// 8.	 Calcula cuánto se debe pagar por costos de hospitalización en la clínica Me Muero según los siguientes datos:
