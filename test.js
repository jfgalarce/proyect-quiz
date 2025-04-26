function calcular(array, target){
  const save = {};
  for(let i = 0; i < array.length; i++){
    const complemento = target - array[i];
    if(save[complemento] !== undefined){
      return [save[complemento], i];
    }
    save[array[i]] = i;

  }
}

console.log (calcular([2, 7, 11, 15], 13)); // [0, 1]