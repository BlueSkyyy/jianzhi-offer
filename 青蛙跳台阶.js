/**
 * Created by Ruanrc on 2017/4/28.
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
 */
/*
* 思路：常见的找规律题型
* f(n) = f(n-1)+f(n-2)
* f(1) = 1
* f(2) = 2
* */
//使用递归算法，会报错，因为没有在规定时间内完成
function jumpFloor(n) {
  if(n == 1){
    return 1;
  }else if(n == 2){
    return 2;
  }else{
    return jumpFloor(n-1)+jumpFloor(n-2);
  }
}
//使用迭代
function jumpFloor(n) {
  var jumpSum = 0; // 当前台阶的跳法总数
  if(n == 1){
    return 1;
  }else if(n == 2){
    return 2;
  }
  var jumpSumBackStep1 = 2; // 当前台阶后退一阶的台阶的跳法总数(初始值当前台阶是第3阶)
  var jumpSumBackStep2 = 1; // 当前台n阶后退二阶的台阶的跳法总数(初始值当前台阶是第3阶)
  for(var  i = 3; i <= n ; i++) {
    jumpSum= jumpSumBackStep1 + jumpSumBackStep2;
    jumpSumBackStep2 = jumpSumBackStep1;// 后退一阶在下一次迭代变为后退两阶
    jumpSumBackStep1 = jumpSum;         // 当前台阶在下一次迭代变为后退一阶
  }
  return jumpSum;
}