/**
 * Created by Ruanrc on 2017/4/29.
 */
// 思路一：借用两个额外数组
function reOrderArray(array)
{
  var test1 = [];
  var test2 = [];
  for(var i=0;i<array.length;i++){
  if(array[i]%2 == 0){
    test2.push(array[i]);
  }else{
    test1.push(array[i]);
  }}
  return test1.concat(test2);
}
// 思路二：
/**
 * 1.要想保证原有次序，则只能顺次移动或相邻交换。
 * 2.i从左向右遍历，找到第一个偶数。
 * 3.j从i+1开始向后找，直到找到第一个奇数。
 * 4.将[i,...,j-1]的元素整体后移一位，最后将找到的奇数放入i位置，然后i++。
 * 5.終止條件：j向後遍歷查找失敗。
 */
function reOrderArray2(array){
  if(array.length == 0){
    return [];
  }
  var i = 0,j;
  while(i < array.length){
    while(array[i]%2 !== 0){
      i++;
    }
    j = i+1;
    while(array[j]%2 == 0){
      j++;
    }
    if(j < array.length){
      var tmp = array[j];
      for(var k = j-1;k>=i;k--){
        array[k+1] = array[k];
      }
      array[i++] = tmp;
    }else{
      break;
    }
  }
  return array;
}
console.log(reOrderArray2([1,2,3,4,5,6,7]));