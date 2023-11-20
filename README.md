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
[RESPUESTA]
#### Algoritmos
[RESPUESTA]
#### Clases
[RESPUESTA]