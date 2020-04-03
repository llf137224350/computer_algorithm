//  电话号码的字母组合
//  给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
//  给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
//  示例:
//  输入："23"
//  输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
//  说明:
//  尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。

//  来源：力扣（LeetCode）
//  链接：https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number
//  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 
// 递归进行组合
function constructor(arr) {
  // 取 0 - 1位置进行组合
  let tempArr = [] // 临时存储组合结果
  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr[1].length; j++) {
      tempArr.push(`${arr[0][i]}${arr[1][j]}`)
    }
  }
  // 将结果添加到数组开始位置
  arr.splice(0, 2, tempArr)
  // 如果数组长度 === 1 无法继续组合 则返回 否则递归进行组合
  return arr.length === 1 ? tempArr : constructor(arr)
}

export default (numbers) => {
  let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  // 将输入的数字拆分为数组
  let numberArr = (numbers).toString().split('')
  let inputConstructor = [] // 得到按键字母组成的数组 ["abc", "def"]
  numberArr.map((i) => {
    map[i] && inputConstructor.push(map[i])
  })
  // 对字母进行组合
  return constructor(inputConstructor)
}
