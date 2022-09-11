function loadGrain(levels) {
  let left = levels[0];
  let end = levels[levels.length-1];
  let max = 0;
  let res = 0;
  //console.log('left   ==>  ', left);
  //console.log('end   ==>  ', end);
  let sum = 0;
  let allSum = 0;
  let index = 1;
  for (let i = 1; i < levels.length; i++) {
    if (levels[i] >= left || levels[i] >= end) {
      max = levels[i] < left ? levels[i] : left;
      //console.log('max   =>  ', max);      
      allSum = (i-index) * max;
      //console.log('allSum  ===>  ', allSum);      
      res += allSum - sum;
      //console.log('res  ==>  ',res);
      left = levels[i];
      sum = -levels[i];
      index = i+1;
      
    }
    sum = sum + levels[i]; 
    //console.log ("sum   ==>  ", sum)
  }
  
  return console.log('result ==> ', res);
  
}
//let arr = [2, 0, 9, 0, 0, 9,  1, 7]
//console.log(" res ==>   ",loadGrain(arr));
loadGrain([4, 1, 3]) // 2
loadGrain([2, 1, 5, 2, 7, 4, 10]) // 7
loadGrain([2, 0, 1, 5, 2, 7]) // 6
loadGrain([2, 4, 2]) // 0
loadGrain([7, 4]) // 0
loadGrain([]) // 0


