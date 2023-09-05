
//OPERACIÓN Sumar
function sumar(valor1, valor2) {
    const resultado = valor1 + valor2;
    return resultado;
}

//OPERACIÓN Restar
function restar(valor1, valor2) {
    const resultado = valor1 - valor2;
    return resultado;
}

//OPERACIÓN Multiplicar
function multiplicar(valor1, valor2) {
    const resultado = valor1 * valor2;
    return resultado;
}

//OPERACIÓN Dividir
function dividir(valor1, valor2) {
    const resultado = valor1 / valor2;
    return resultado;
}


function calculadora() {
    let operacion;
    let valor1;
    let valor2;


    while (operacion != "x") {

        operacion = prompt(" Qué operacion quieres hacer? \n  +\n - \n  *\n  / \n Salir de la calcluladora →    x")

        switch (operacion) {

            //Suma
            case "+":
                valor1 = parseInt(prompt("Ingrese el primer valor"));
                valor2 = parseInt(prompt("Ingrese el segundo valor"));
                alert("La operación es " + sumar(valor1, valor2));
                break;

                //Resta
            case "-":
                valor1 = parseInt(prompt("Ingrese el primer valor"));
                valor2 = parseInt(prompt("Ingrese el segundo valor"));
                alert("La operación es " + restar(valor1, valor2));
                break;

                //Multiplicación
            case "*":
                valor1 = parseInt(prompt("Ingrese el primer valor"));
                valor2 = parseInt(prompt("Ingrese el segundo valor"));
                alert("La operación es " + multiplicar(valor1, valor2));
                break;

                //División
            case "/":
                valor1 = parseInt(prompt("Ingrese el primer valor"));
                valor2 = parseInt(prompt("Ingrese el segundo valor"));
                alert("La operación es " + dividir(valor1, valor2));
                break;
                //Salir de la calculadora
            case "x":
                alert("Cerrando calculadora...☻");
                break;
                //Cuando tire dato erroneo
            default:
                alert("Disculpame. No conozco ese comando")
                break;
        }
    }


}