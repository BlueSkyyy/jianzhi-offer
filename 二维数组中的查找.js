/**
 * Created by Ruanrc on 2017/4/28.
 * 在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
 * 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 */
function find(target,array) {
  var rows = array.length;
  var columns = array[0].length;
  var i = 0;
  var j = array[0].length - 1;
  while ((i <= rows-1) && (j >= 0)){
    if(target == array[i][j]){
      return true;
    }else if(target < array[i][j]){
      j--;
    }else if(target > array[i][j]){
      i++;
    }
    return false;
  }
}
/*
* 解决思路：按照对角线划分比较
 */