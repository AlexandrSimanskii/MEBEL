let array = [74, 34,18, 68, 433, 87, 23];

const func = (arr) => {
  let min = arr.sort(function(a,b){
    return a-b
  })
  let  sum = min[1]+min[0]
return sum 
};


