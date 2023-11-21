# JAVASCRIPT
### Preguntas Conceptuales
- **En JavaScript, toda las operaciones de red son asincronos. ¿Porque es esto importantes?:**  
Que las operaciones sean asincronas es muy importante ya que no bloquean la ejecucion del codigo, permitiendo que otras tareas continuen.
- **En Javascript, queremos realizar acciones tras una operación/solicitud de red completa. ¿Qué paradigma de programación hace esto posible?:**  
La asincronía en JavaScript hace posible realizar acciones después de una operación/solicitud de red completa.
- **¿Javascript proporciona soporte limitado para la herencia a través de qué mecanismo?:**  
JavaScript proporciona soporte para la herencia a través del mecanismo de prototipos.
- **¿Qué es el DOM? ¿Qué librería nos ayuda a usar Javascript para manipular el DOM?:**  
El Document Object Model (Modelo de Objetos del Documento), es una interfaz de programación para documentos HTML y XML. Para manipular esto, JS usa JQuery.
### ¿Qué puede hacer Javascript ?
#### Booleano
Se realizo un booleano.js para probar las comparaciones cuestionadas, se obtuvo `True,false,flase,true,true`, luego tambien se hizo con la recomendacion y se obtuvo `false,false,false,false,false`
#### Arrays
Analizamos el comportamiento:
1. `[1, 2, 3] + [4, 5, 6]`
   - Resultado: `"1,2,34,5,6"`
   - Justificación: JS debido a que las matrices son como cadenas en este contexto, se realiza una concatenación de cadenas y no una suma numerica.

2. `!![]`
   - Resultado: `true`
   - Justificación: En JS cualquier objeto no nulo se considera verdadero en el contexto de booleano y justamente `[]` es un array vacio que con `!!` se transforma a un booleano.

3. `[] == true`
   - Resultado: `false`
   - Justificación: Aqui JS intenta convertir ambos lados de una comparacion al mismo tipo. El array se convierte a un valr primitivo y se evalua como `""`, que no es igual a `true`.

4. `[10, 1, 3].sort()`
   - Resultado: `[1, 10, 3]`
   - Justificación: Ese metood ordena los elementos de un array como cadena de texto, los numeros se ordenan como si fueran cadenas

5. `[] == 0`
   - Resultado: `true`
   - Justificación: cuando comparo un array vcio con un numero `0`, JS intenta convertir ambos lados al mismo tipo de comparacion. El array se evalua como `""`, que se convierte numericamente a `0`.

#### Clausuras
Aqui justmaente tenemos un ejemplo de como podemos acceder a la funcion interna con una funcion externa, el funcionamiento del codigo Clausuras.js es de la siguiente manera:
1. La función `f1` toma un parámetro `x` y define una variable local `baz` con un valor de `3`.
2. `f1` retorna una función interna que tiene acceso al alcance de `f1`, incluyendo la variable `x` y `baz`.
3. Se crea una variable `bar` que almacena el resultado de llamar a `f1(5)`. Esto significa que `bar` ahora es una función que tiene acceso a la variable `x` y `baz` de la llamada original a `f1`.
4. Se llama a `bar(11)`. En este punto, la función interna de `f1` se ejecuta con `x` igual a `5` y `y` igual a `11`. Se imprime en la consola la suma de `x + y + (baz++)`.

Vamos a calcular la salida:

- `x` es `5`.
- `y` es `11`.
- `baz` se incrementa después de la suma.

Entonces, la salida será:

```
5 + 11 + 3 = 19
```

La variable `baz` se incrementa en 1 después de su uso, por lo que su valor se convierte en `4` después de la llamada.
#### Algoritmos
**El primer algoritmo:** Podemos optimizar el codigo utilizando un solo bucle para realizar un seguimiento del mayor número encontrado hasta el momento, tiene complejidad `O(N)`:
```javascript
function greatestNumberNEW(array) {
  let numeroMaximo = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > numeroMaximo) {
      numeroMaximo = array[i];
    }
  }

  return numeroMaximo;
}
```
**El segundo algoritmo:** Tiene complejidad `O(N)` con el bucle for con complejidad lineal, Ademas para mejorar el codigo simplemente podemos hacer que cuando encuentra la primera `X` retorne.
```javascript
function containsXmod(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "X") {
      return true; // Se encontró una "X", devolver true de inmediato
    }
  }
  return false; // No se encontró ninguna "X" en toda la cadena
}
```
**Escribe una función que devuelva el primer carácter no duplicado de una cadena:**
```javascript
function primerNoDuplicado(cadena) {
    // Objeto para almacenar la frecuencia de cada carácter
    const frecuencia = {};
    // Iterar sobre la cadena para contar la frecuencia de cada carácter
    for (let i = 0; i < cadena.length; i++) {
      const caracter = cadena[i];
      frecuencia[caracter] = (frecuencia[caracter] || 0) + 1;
    }
    // Iterar sobre la cadena para encontrar el primer carácter no duplicado
    for (let i = 0; i < cadena.length; i++) {
      const caracter = cadena[i];
      if (frecuencia[caracter] === 1) {
        return caracter;
      }
    }
    // Si no hay caracteres no duplicados, devolver null o un valor predeterminado según sea necesario
    return null;
  }
  // Ejemplo que se encuentra en la actividad
  const resultado = primerNoDuplicado("minimum");
  console.log(resultado); // Salida esperada como en la actividad: "n"
```
#### Clases
El codigo se encuentra en Clases.js