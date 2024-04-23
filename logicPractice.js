// Crear un programa en PSeInt o JavaScript que realice lo siguiente:
// Debe solicitar al usuario 3 números y guardarlos.
// Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
// Debe imprimir los números ordenados de mayor a menor, y de menor a mayor.
// Debe ser capaz de identificar si los números son iguales e imprimir un mensaje diciendo que los números son iguales.

let cantidad1 = parseFloat(prompt("Ingrese el primer número: "));
let cantidad2 = parseFloat(prompt("Ingrese el segundo número: "));
let cantidad3 = parseFloat(prompt("Ingrese el tercer número: "));

if (cantidad1 === cantidad2 || cantidad1 === cantidad3 || cantidad2 === cantidad3) {
    alert("Los números son iguales");
} else {
    let cantidades = [cantidad1, cantidad2, cantidad3];

    console.log(cantidades);
    cantidadesAscendente = cantidades.sort((a, b) => a - b);

    function mostrarMayor() {
        return("El número mayor es: " + Math.max(cantidad1, cantidad2, cantidad3));
    }
    function mostrarMenor() {
        return("El número menor es: " + Math.min(cantidad1, cantidad2, cantidad3));
    }
    function numeroDelCentro() {
        return("El número del centro es: " + cantidadesAscendente[1]);
    }

    console.log(mostrarMayor());
    console.log(mostrarMenor());
    console.log(numeroDelCentro());
    console.log("Números organizados de forma ascendente: " + cantidadesAscendente);

    cantidadesDescendente = cantidades.reverse();
    console.log("Números organizados de forma descendente: " + cantidadesDescendente);
}