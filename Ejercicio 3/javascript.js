// Variables are created
var celsius

// cycle to validate second digit
do {
    if (celsius == '' || celsius == null) {
        celsius = prompt('El numero de grados Celsius no puede estar en blanco, Ingrese grados celsius:')
    } else {
        celsius = prompt('Ingrese grados celsius:')
    }
    
} while (celsius == '' || celsius == null);

//parser variable
celsius = parseInt(celsius)

//function to convert from celsius to kelvin
function convert_to_kelvin(_celsius) {
    return (_celsius + 273.15)
}

//function to convert from celsius to fahrenheit
function convert_to_fahrenheit(celsius) {
    return (celsius * (9/5))+32
}

// show results on html screen
if (typeof(celsius) == "number") {
    document.write('***Grados convertidos***<br>')
    document.write(`${celsius}° Celsius a Kelvin ${convert_to_kelvin(celsius)}<br>`)
    document.write(`${celsius}° Celsius a Fahrenheit ${convert_to_fahrenheit(celsius)}`)
}
