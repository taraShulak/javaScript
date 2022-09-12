function loadGrain(levels) {
  if (levels.length < 3) return 0;
  let result = 0;
  let max = 0;
  let index = null; //index of max
  let minEnd = levels[0] < levels[levels.length-1] ? levels[0] : levels[levels.length-1];
  let maxEnd = levels[0] > levels[levels.length-1] ? levels[0] : levels[levels.length-1]; 
  let left = null;
  let right = null;
  let sum = 0;
  let counter = 0;
  let iteration = 0;
  
// -------find max with index-----------
  for (let i = 1; i < levels.length-1; i++) {
    iteration++;
    sum += levels[i]; 
    
    if (levels[i] > max) { 
      max = levels[i];
      index = i;
    }
    else {
      if ( levels[i] == max) {
         index = i;   
      }
    }        
  }
 
//----------------------------
  if (max <= minEnd ){
    return result = (levels.length - 2) *  minEnd - sum;
  }  

  sum = 0;

  if ( minEnd == levels[levels.length-1] && max <= maxEnd){  
    
      for ( let i = levels.length - 2; i >= 0 ; i--){
          iteration++;      
          if (i == 0) {
            result += minEnd * counter - sum;          
            break;
          } 
          
          if ( levels[i] <= minEnd) {
            sum += levels[i]; 
            counter++;            
          }
          else {                     
              result += minEnd * counter - sum;                                                    
              counter = 0;
              sum = 0;
              minEnd = levels[i];
            }  
          
        }
      return result ;
  } 
  if ( minEnd == levels[0] && max <= maxEnd){
        
       for (  let i = 1; i <= levels.length; i++){  
          iteration++;                        
          if (typeof( levels[i]) !== undefined && levels[i] <= minEnd ) {
          sum += levels[i]; 
          counter++;                   
          }
        else { 
          if (counter != 0) {          
            result += minEnd * counter - sum;           
            counter = 0;
            sum = 0;
            minEnd = levels[i];
          } else {
            minEnd = levels[i];
          }
        }
      }      
      return result ;
    }
  
  if (max > maxEnd) {
    left = levels[0];
    
    for ( let i = 1; i <= index; i++) {        
        iteration++;
        if ( levels[i] <= left && i < index) {
          sum += levels[i]; 
          counter++;    
        } else { 
              result += left * counter - sum;           
              counter = 0;
              sum = 0;
              left = levels[i];
          } 
    }
        
    sum = 0;
    counter = 0;
    right = levels[levels.length-1];

    for ( let i = levels.length - 2; i >= index ; i--){ 
      iteration++;    
      if ( levels[i] <= right) {
        sum += levels[i];
        counter++;
      }
      else { 
        if (counter != 0){
          result += right * counter - sum;           
          counter = 0;
          sum = 0;
          right = levels[i];
        } else {
            right = levels[i];
         }
      }
    }
    console.log('length  ', levels.length);
    
    console.log('iteration  ' , iteration);
    return result;
  }
}
loadGrain([4, 1, 1, 3]) // 2
loadGrain([2, 1, 5, 2, 7, 4, 10]) // 7
loadGrain([2, 0, 1, 5, 2, 7]) // 6
loadGrain([2, 4, 2]) // 0
loadGrain([7, 4]) // 0
loadGrain([]) // 0


let arr1 = [1, 2, 1, 2, 1];
let arr2 = [1, 2, 1, 3, 55, 2, 3, 3, 5, 1];
let arr3 = [3, 4, 1, 1, 6, 1, 2, 19, 10, 12, 1, 1, 1, 3, 7];
let arr4 = [31, 17,  1, 49, 20, 12, 24, 32,  7, 22,  4, 33, 20, 27, 24, 14,  9,  8];

console.log(loadGrain(arr3));



