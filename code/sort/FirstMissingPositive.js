/**
41. 缺失的第一个正数
给你一个未排序的整数数组，请你找出其中没有出现的最小的正整数。

 

示例 1:

输入: [1,2,0]
输出: 3
示例 2:

输入: [3,4,-1,1]
输出: 2
示例 3:

输入: [7,8,9,11,12]
输出: 1
 */
function firstMissingPositive(arr) {
    // 过滤小于1的数，因为不是正数
    arr = arr.filter(item => item > 0);

    // 判断过滤后数组是否为空
    if (arr.length) {
        // 对数组进行升序排序，以便从左到右进行遍历判断
        arr.sort((a, b) => a - b);
        // 判断数组第一个是否不唯一
        if (arr[0] !== 1) {
            return 1;
        } else {
            // 元素第一个为1 那么进行遍历
            for (let i = 0; i < arr.length - 1; i++) {
                if (arr[i + 1] - arr[i] > 1) {
                    return arr[i] + 1;
                }
            }
            // 遍历完成依然连续，则返回数组最有一个值加1
            return arr.pop() + 1;
        }
    } else {
        return 1;
    }
}
console.log(firstMissingPositive([1, 2, 0]));
console.log(firstMissingPositive([3, 4, -1, 1]));
console.log(firstMissingPositive([7, 8, 9, 11, 12]));
