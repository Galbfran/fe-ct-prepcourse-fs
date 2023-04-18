/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let arregloResultado = []
   for (let clave in objeto){
      arregloResultado.push([clave , objeto[clave]] )
   }
   return arregloResultado
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let resultadoObjeto = {}
   let stringArray = string.split('')
   let stringArratOrdenado = stringArray.sort()
   let clave = []
   let valor = []

   let contador = 1
   for (let i = 0 ;i < stringArratOrdenado.length ; i++){
      
      if (stringArratOrdenado[i] == stringArratOrdenado[i+1] ){
         contador += 1
      }else {
         clave.push(stringArratOrdenado[i])
         valor.push(contador)
         contador = 1
      }
   }
   clave.forEach((elemento , indice) =>{
      resultadoObjeto[elemento] = valor[indice]
   })
   return resultadoObjeto
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let stringArray = string.split('')
   let mayusculas = []
   let minusculas = []
   let resultado = ""
   stringArray.forEach((elemento) => {
      if (elemento == elemento.toUpperCase()){
         mayusculas.push(elemento)
      } else {
         minusculas.push(elemento)
      }
   })
   resultado = mayusculas.join('') + minusculas.join('')
   return resultado
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let stringArray = frase.split(" ")
   let nuevoArray  = []
   
   stringArray.forEach((elemento) =>{
      nuevoArray.push(elemento.split('').reverse().join(''))
   })
   let resultado = nuevoArray.join(" ")
   return resultado
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let numeroString = numero.toString()  //paso numero a string
   // lo paso a array aplico reverse y lo vuelva pasar a texto
   let numeroAlReves = numeroString.split('').reverse().join('')
   if (numero == numeroAlReves){
      return "Es capicua"
   } else {
      return "No es capicua"
   }

}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let stringArray = string.split('');
   for (let i = 0; i < stringArray.length; i++) {
      if (stringArray[i] === 'a' || stringArray[i] === 'b' || stringArray[i] === 'c') {
         stringArray.splice(i, 1);
         i--; // para compensar el desplazamiento en el array
      }
   }
   let resultado = stringArray.join('');
   return resultado;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   arrayOfStrings.sort(function(a, b) {
      return a.length - b.length;
   });
   return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   resultado = []
   array1.forEach((elemento) => {
      array2.forEach((i) => {
         if (elemento == i){
            resultado.push(elemento)
         }
      })
   })
   return resultado
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
