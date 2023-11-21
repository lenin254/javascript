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