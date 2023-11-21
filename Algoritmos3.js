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
  