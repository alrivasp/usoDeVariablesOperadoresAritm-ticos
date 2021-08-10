// Variables are created
var quantity_number = 5
var result_sum = 0

//number entry
for (let index = 1; index <= quantity_number; index++) {
    validate_input(prompt(`Ingrese ${index}° numero:`), index)
}

//number validation
function validate_input(_prompt, _index) {
    do {
        if (_prompt == '' || _prompt == null) {
            _prompt = prompt(`Numero no puede estar en blanco, Ingrese ${_index}° numero:`)
        }
    } while (_prompt == '' || _prompt == null);
    result_sum += parseInt(_prompt)
}

// Show results
document.write('***Resultados***<br>')
document.write(`La suma de todos los Numeros: ${result_sum} <br>`)
document.write(`El promedio de los ${quantity_number} numeros ingresados: ${result_sum / quantity_number}`)
