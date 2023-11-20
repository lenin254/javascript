// Ejemplo 1: undefined == null
console.log(undefined == null);  // true

// Ejemplo 2: NaN == NaN
console.log(NaN == NaN);  // false
console.log(isNaN(NaN));  // true, puedes usar isNaN para verificar si un valor es NaN

// Ejemplo 3: null == false
console.log(null == false);  // false

// Ejemplo 4: 0 == false
console.log(0 == false);  // true

// Ejemplo 5: "" == false
console.log("" == false);  // true

// Recomendación: Uso de comparación estricta
console.log(undefined === null);  // false
console.log(NaN === NaN);  // false
console.log(null === false);  // false
console.log(0 === false);  // false
console.log("" === false);  // false
