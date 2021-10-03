function landPerimeter(arr) {
  let perimeter = 0;
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
        if(arr[])
      if(arr[i+1][j] === undefined || arr[i+1][j] === 'O'){
          perimeter++;
      }
      if(arr[i-1][j] === undefined || arr[i+1][j] === 'O'){
          perimeter++;
      }
      if(arr[i][j+1] === undefined || arr[i+1][j] === 'O'){
          perimeter++;
      }
      if(arr[i][j-1] === undefined || arr[i+1][j] === 'O'){
          perimeter++;
      }
    }
  }
  return perimeter;
}