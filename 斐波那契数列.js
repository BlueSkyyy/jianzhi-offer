/**
 * Created by Ruanrc on 2017/4/28.
 * 现在要求输入一个整数n，请你输出斐波那契数列的第n项。
 n<=39
 */
function Fibonacci(n) {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  }
  var Fibona = [0, 1];
  for (var i = 2; i <= n; i++) {
    Fibona.push(Fibona[i - 1] + Fibona[i - 2]);
  }
  return Fibona.pop();
}
/*
* 解析：
* f(n) = f(n-1) + f(n-2)，第一眼看就是递归啊，简直完美的递归环境，递归肯定很爽，这样想着关键代码两三行就搞定了，注意这题的n是从0开始的：
 if(n<=1){
    return n;
  }
 else{
    return Fibonacci(n-1)+Fibonacci(n-2);
 }
 然而并没有什么用，测试用例里肯定准备着一个超大的n来让Stack Overflow，为什么会溢出？因为重复计算，而且重复的情况还很严重，举个小点的例子，n=4，看看程序怎么跑的：
 Fibonacci(4) = Fibonacci(3) + Fibonacci(2);
 = Fibonacci(2) + Fibonacci(1) + Fibonacci(1) + Fibonacci(0);
 = Fibonacci(1) + Fibonacci(0) + Fibonacci(1) + Fibonacci(1) + Fibonacci(0);
 由于我们的代码并没有记录Fibonacci(1)和Fibonacci(0)的结果，对于程序来说它每次递归都是未知的，因此光是n=4时f(1)就重复计算了3次之多。
 那么如何求解呢，动态规划似乎不错，关于动态规划三个条件：最优子结构、无后效性、子问题重叠这些就不谈了，因为理(wo)论(ye)性(bu)太(tai)强(dong)了。
 虽然看起来很蠢，空间浪费了sizeof(int)*(n-1)，但是对于那个超大n的测试用例应该是可以通过了，时间复杂度也达到了O(n)。
* */