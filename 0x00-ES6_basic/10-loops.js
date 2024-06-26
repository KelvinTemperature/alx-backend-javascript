export default function appendToEachArrayValue(array, appendString) {
    for (let [idx, item] of array) {
      
      array[idx] = appendString + item;
    }
  
    return array;
  }