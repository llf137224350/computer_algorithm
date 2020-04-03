/**
 反转字符串中的单词 III
 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
 示例 1:
 输入: "Let's take LeetCode contest"
 输出: "s'teL ekat edoCteeL tsetnoc" 
 注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。
 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/reverse-words-in-a-string-iii
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
// 自定义单词反转
function reverse (word) {
  let arr = word.split('')
  let start = 0 // 数组下标开始位置
  let end = arr.length - 1 // 数组下标结束位置
  let temp = '' // 用于临时存储
  while (start < end) {
    temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp
    start++
    end--
  }
  return arr.join('')
}

export default (str) => {
  let arr = str.split(' ') // 将字符串拆分为数组 得到单词组成的数组
  // 遍历数组
  let result = arr.map((word) => {
    // 方式一
    // return word.split('').reverse().join('')// 调用js函数实现 先将单词转为数组 =》 反转 =》 重新拼接
    // 方式二
    return reverse(word)// 自己写算法实现
  })
  return result.join(' ')
}
