/**
 * Created by Ruanrc on 2017/4/28.
 */
function ListNode(x){
  this.val = x;
  this.next = null;
}
function printListFromTailToHead(head) {
  var rel = [];
  if(!head){
    return null;
  }
  while (head){
    rel.unshift(head.val);
    head = head.next;
  }
  return rel;
}