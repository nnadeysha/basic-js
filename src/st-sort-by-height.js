import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let newArr = arr;
  newArr = newArr.filter((element) => {
    if(element !=-1){
      return element;
    }
  }).sort((a,b) => {
    return a - b;
  });
  let indexV = 0;
  for(let i =0; i < arr.length; i++){
    if(arr[i] != -1){
      arr[i] = newArr[indexV];
      indexV++
    }
  }
return arr
}
