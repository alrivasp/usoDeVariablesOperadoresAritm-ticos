// Variables are created
var quantity 

// cycle to validate digit
do {
    if (quantity == '' || quantity == null) {
        quantity = prompt('El numero de dias no puede estar en blanco, Ingrese cantidad de dias:')
    } else {
        quantity = prompt('Ingrese cantidad de dias:')
    }
} while (quantity == '' || quantity == null);

//parser variable
quantity = parseInt(quantity)

//function to calculate years
function calculate_years () {
    let years = 0
    while (quantity >= 365) {
        years++
        quantity -= 365
    }
    return years
}

//function to calculate weeks
function calculate_week () { 
    let weeks = 0
    while (quantity >= 7) {
        weeks++
        quantity -= 7
    }
    return weeks
}

// show results on html screen
document.write('***Calculo de Tiempo***<br>')
document.write(`${calculate_years ()} Años, ${calculate_week ()} semanas, ${quantity} dias`)