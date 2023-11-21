function containsX(string) {
    foundX = false;
    for(let i = 0; i < string.length; i++) {
     if (string[i] === "X") {
       foundX = true;
       }
     }
     return foundX;
    }

function containsXmod(string) {
    for (let i = 0; i < string.length; i++) {
      if (string[i] === "X") {
        return true; // Se encontró una "X", devolver true de inmediato
      }
    }
    return false; // No se encontró ninguna "X" en toda la cadena
  }
  