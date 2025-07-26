// 1. Realiza el cálculo del salario que debe recibir un trabajador que gana x salario con un descuento del 4% por salud y 7% por pensión.

let salario = prompt("Ingrese el salario salario mensual: ");
let descuentoSalud = salario * 4 / 100;
let descuentoPension = salario * 7 / 100;
let salarioTotal = salario - (descuentoSalud + descuentoPension);

alert("Su salario total es: " + salarioTotal);

// 2. Aplica la fórmula a = (b*h)/2 para calcular el área de un triángulo donde sus dimensiones base y altura se deben pedir al usuario que las digite

let base = prompt("Ingrese la base del triángulo:");
let altura = prompt("Ingrese la altura del triángulo:");

let areaTriangulo = (base * altura) / 2;

alert("El área del triángulo es: " + areaTriangulo);

// 3. Realiza las operaciones de suma, resta, multiplicación, división, y módulo pidiéndole solo 2 números al usuario.

let num1 = prompt("Ingrese el primer número:");
let num2 = prompt("Ingrese el segundo número:");

let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;
if (num2 == 0) {
    division = "No se puede dividir por cero";
}
let modulo = num1 % num2;

alert("Resultados:\n" +
    "Suma: " + suma + "\n" +
    "Resta: " + resta + "\n" +
    "Multiplicación: " + multiplicacion + "\n" +
    "División: " + division + "\n" +
    "Módulo: " + modulo);


// 4. Calcule el sueldo mensual de un trabajador ingresando el número de horas trabajadas en el mes y el valor tanto como de las horas normales de trabajo y las horas extras.

let horasNormales = prompt("Ingrese el número de horas trabajadas en el mes:");
let horasExtras = prompt("Ingrese el número de horas extras trabajadas en el mes:");
let valorHoraNormal = prompt("Ingrese el valor de la hora normal:");
let valorHoraExtra = prompt("Ingrese el valor de la hora extra:");

let sueldoMensual = (horasNormales * valorHoraNormal) + (horasExtras * valorHoraExtra);
alert("El sueldo mensual del trabajador es: " + sueldoMensual);

// 5. Digita el ingreso del precio de un producto y se debe calcular el IVA, mostrar cuanto es el IVA que se agrega, mostrar el precio del producto sin IVA y el total a pagar.

let precioProducto = prompt("Ingrese el precio del producto:");
let iva = 0.19;
let precioIva = precioProducto * iva;
let precioTotal = precioProducto + precioIva;

alert("Precio del producto sin IVA: " + precioProducto + "\n" +
    "IVA agregado: 19%" + "\n" +
    "Se agrega un IVA de: " + precioIva + "\n" +
    "Precio total a pagar: " + precioTotal);


// 6. Calcule el porcentaje de alumnos y alumnas de un salón de clase, digitando el total de alumnos hombres y mujeres.

let totalHombres = prompt("Ingrese el número de alumnos hombres:");
let totalMujeres = prompt("Ingrese el número de alumnas mujeres:");

let totalAlumnos = totalHombres + totalMujeres;
let porcentajeHombres = (totalHombres / totalAlumnos) * 100;
let porcentajeMujeres = (totalMujeres / totalAlumnos) * 100;
alert("Porcentaje de alumnos hombres: " + porcentajeHombres + "%\n" +
    "Porcentaje de alumnas mujeres: " + porcentajeMujeres + "%");


// 7. Calcule el promedio de 3 notas de un alumno, el rango de cada nota es del 1 al 5.

let nota1 = prompt("Ingrese la primera nota :");
let nota2 = prompt("Ingrese la segunda nota :");
let nota3 = prompt("Ingrese la tercera nota :");
if (nota1 >= 1 && nota1 <= 5 && nota2 >= 1 && nota2 <= 5 && nota3 >= 1 && nota3 <= 5) {
    let promedio = (nota1 + nota2 + nota3) / 3;
    alert("El promedio del alumno es: " + promedio);
} else {
    alert("Error: Todas las notas deben estar entre 1 y 5.");
}
