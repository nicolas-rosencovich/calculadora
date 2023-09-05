//Funciones de mi calculadora sumar - restar - multiplicar - dividir

//Paso 1 = Hacer que atraves de un prompt nos ingresen los valores (dos valores)
//Paso 2 = hacer que a traves de un prompt nos ingresen el tipo de operacion que quieran hacer(+ - * /)
//Paso 3 = Sería que tenga un boton para abrir la calculadora y otro para cerrarla(SALIR)

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

//Ahora el siguiente paso seria hacer los prompts
function calculadora() {
    let operacion;
 let valor1;
 let valor2;

    /*     const operacion = prompt("Qué operación queres hacer? \n + - * /") */
    while (operacion != "x" && operacion != "X" && operacion != "Salir") {
        //Hasta q no pongamos el comando X x o salir nos repetirá la calculadora
        operacion = prompt(" Qué operacion quieres hacer? \n  +\n - \n  *\n  / \n Salir de la calcluladora →    x")

        
        switch (operacion) {
            case "+":
                valor1 = parseInt(prompt("Ingrese el primer valor"));
                valor2 = parseInt(prompt("Ingrese el segundo valor"));
                alert("La operación es " + sumar(valor1, valor2));
                break;
    
    
            case "-":
                valor1 = parseInt(prompt("Ingrese el primer valor"));
                valor2 = parseInt(prompt("Ingrese el segundo valor"));
                alert("La operación es " + restar(valor1, valor2));
                break;
    
            case "*":
                valor1 = parseInt(prompt("Ingrese el primer valor"));
                valor2 = parseInt(prompt("Ingrese el segundo valor"));
                alert("La operación es " + multiplicar(valor1, valor2));
                break;
    
    
            case "/":
                valor1 = parseInt(prompt("Ingrese el primer valor"));
                valor2 = parseInt(prompt("Ingrese el segundo valor"));
                alert("La operación es " + dividir(valor1, valor2));
                break;
    
                case "x":
alert("Cerrando calculadora...☻");
break;
            default:
                alert("El valor ingresado es incorrecto")
                break;
        }
    }

    
    }
