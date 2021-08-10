// Variables are created
var num1, num2

// cycle to validate first digit
do {
    if (num1 <= 0 || num1 == '') {
        num1 = prompt('El numero debe ser superior a cero o no venir en blanco, Ingrese primer numero:')
    }
    else{
        num1 = prompt('Ingrese primer Numero:')
    }
} while (num1 <= 0 || num1 == '')

// cycle to validate second digit
do {
    if (num2 <= 0 || num2 == '' || num2 == num1) {
        num2 = prompt(`El numero debe ser superior a cero, no venir en blanco o repetir el primer digito ${num1}, Ingrese Segundo numero:`)
    }
    else{
        num2 = prompt('Ingrese Segundo Numero:')
    }
} while (num2 <= 0 || num2 == '' || num2 == num1)

// convert to integer capture of numbers
num1 =  parseInt(num1)
num2 =  parseInt(num2)

// math calculation function
function calculate(one, two) {
    document.write('***Calculos Solicitados*** <br>')
    document.write(`Suma de los digitos => ${one + two} <br>`)
    document.write(`Resta de los digitos => ${one - two} <br>`)
    document.write(`Multiplicacion de los digitos => ${one * two} <br>`)
    document.write(`Division de los digitos => ${one / two} <br>`)
    document.write(`modulo de los digitos => ${one % two} <br>`)
}

// show results on html screen
calculate(num1, num2)