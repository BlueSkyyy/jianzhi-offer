/**
 * Created by Ruanrc on 2017/4/28.
 * 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。
 */
var stack1 = [];
var stack2 = [];
function push(node) {
  stack1.push(node);
}
function pop(node) {
  if(stack2.empty()){
    while(!stack1.empty()){
      stack2.push(stack1.pop());
    }
  }
  return stack2.pop();
}