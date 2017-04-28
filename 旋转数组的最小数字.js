/**
 * Created by Ruanrc on 2017/4/28.
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
 输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。
 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。
 */
//排序后，取第一个值这种方法是最不好用的
function minNumberInRotateArray1(rotateArray) {
  if(rotateArray.length === 0){
    return 0;
  }
  return rotateArray.sort(function (prev,cur) {
    if(parseInt(prev) < parseInt(cur)){
      return -1;
    }else if(parseInt(prev) > parseInt(cur)){
      return 1;
    }
  })[0];
}
/*
* 查找的方法：二分查找
* */
function minNumberInRotateArray2(rotateArray) {
  if(rotateArray.length === 0){
    return 0;
  }
  var low = 0;
  var high = rotateArray.length -1;
  while(low < high){
    var mid = Math.floor(low + (high - low)/2);
    if(parseInt(rotateArray[mid]) > parseInt(rotateArray[high])){
      low = mid + 1;
    }else if(parseInt(rotateArray[mid]) == parseInt(rotateArray[high])){
      high-- ;
    }else{
      high = mid;
    }
  }
  return rotateArray[low];
}
console.log(minNumberInRotateArray2([6501,6828,6963,7036,7422,7674,8146,8468,8704,8717,9170,9359,9719,9895,9896,9913,9962,154,293,334,492,1323,1479,1539,1727,1870,1943,2383,2392,2996,3282,3812,3903,4465,4605,4665,4772,4828,5142,5437,5448,5668,5706,5725,6300,6335]));