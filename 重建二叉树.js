/**
 * Created by Ruanrc on 2017/4/28.
 */
//输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。
// 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
// 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。
function TreeNode(x){
  this.val = x;
  this.left = null;
  this.right = null;
}
function reConstructBinaryTree(pre, vin)
{
  if(pre.length == 0 || vin.length ==0){
    return null;
  }
  var binaryTree = new TreeNode(pre[0]);
  var pre_left = [],pre_right = [],vin_left = [],vin_right = [];
  var index = vin.indexOf(pre[0]);
  pre_left = pre.slice(1,index+1);
  pre_right = pre.slice(index+1);
  vin_left = vin.slice(0,index);
  vin_right = vin.slice(index+1);
  binaryTree.left = reConstructBinaryTree(pre_left,vin_left);
  binaryTree.right  = reConstructBinaryTree(pre_right,vin_right);
  return binaryTree;
}
var tree = reConstructBinaryTree([1,2,4,7,3,5,6,8],[4,7,2,1,5,3,8,6]);
function log(tree) {
  var rel = [];
  rel.push(tree);
  while(rel.length !== 0){
    var node = rel.shift();
    console.log(node.val);
    if(node.left){
      rel.push(node.left);
    }
    if(node.right){
      rel.push(node.right);
    }
  }
}
log(tree);