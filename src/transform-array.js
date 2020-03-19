module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error;
  }
  let newArr = [];
  for(var i=0; i<arr.length; i++){
    if(arr[i]=='--discard-next' && i!==arr.length-1){
      i++;
    }
    else if(arr[i]=='--discard-prev' && i!==0){
      newArr.pop();
    }
    else if(arr[i]=='--double-next' && i!==arr.length-1){
      newArr.push(arr[i+1]);
    }
    else if(arr[i]=='--double-prev' && i!==0 ){
      newArr.push(arr[i-1]);
    }
    else if(arr[i]!=='--double-prev' && arr[i]!=='--discard-prev' && arr[i]!=='--double-next' && arr[i]!=='--discard-next') {
      newArr.push(arr[i]);
    }
  }
     return newArr;
 }