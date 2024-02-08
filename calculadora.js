// Selecciono el botón
let boton = document.getElementById("boton1")
        
// Creo un evento sobre el botón
boton.addEventListener("click", botonHandler)

function botonHandler() {
    // Obtener el valor del input y convertirlo a un array de números
    let input = document.getElementById("numInput")
    let numeros = input.value.split(',').map(Number)
    
    // Verificar si hay al menos un número ingresado
    if (numeros.length > 0) {
        // Calcular la suma
        let suma = 0
        for (let i = 0; i < numeros.length; i++) {
            suma += numeros[i]
        }

        // Calcular la media
        let media = suma / numeros.length

        // Calcular el máximo y el mínimo
        let maximo = Math.max(...numeros)
        let minimo = Math.min(...numeros)

        // Mostrar los resultados
        let resultadoElement = document.getElementById("resultado")
        resultadoElement.innerHTML = `Suma: ${suma}<br>
                                      Media: ${media}<br>
                                      Máximo: ${maximo}<br>
                                      Mínimo: ${minimo}`
    } else {
        // Mostrar un mensaje si no se ingresaron números
        alert("Ingresa al menos un número")
    }
}