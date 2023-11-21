function greatestNumber(array) {
    for (let i of array) {
      let isIValTheGreatest = true;
      for (let j of array) {
        if (j > i) {
          isIValTheGreatest = false;
        }
      }
      if (isIValTheGreatest) {
        return i;
      }
    }
  }

function greatestNumberNew(array) {
    let maxNumber = array[0];
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] > maxNumber) {
        maxNumber = array[i];
      }
    }
  
    return maxNumber;
  }
  