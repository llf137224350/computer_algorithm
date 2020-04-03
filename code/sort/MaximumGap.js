
// 最大间距
// 给定一个无序的数组，找出数组在排序之后，相邻元素之间最大的差值。

// 如果数组元素个数小于 2，则返回 0。

// 示例 1:

// 输入: [3,6,9,1]
// 输出: 3
// 解释: 排序后的数组是 [1,3,6,9], 其中相邻元素 (3,6) 和 (6,9) 之间都存在最大差值 3。
// 示例 2:

// 输入: [10]
// 输出: 0
// 解释: 数组元素个数小于 2，因此返回 0。
// 说明:

// 你可以假设数组中所有元素都是非负整数，且数值在 32 位有符号整数范围内。
// 请尝试在线性时间复杂度和空间复杂度的条件下解决此问题。

// 先对数组进行从大到小排序 选择排序法
function selectionSort(arr) {
    for (let i = 0, max, tmp; i < arr.length; i++) {
        max = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > max) {
                tmp = arr[j];
                arr[j] = max;
                max = tmp;
            }
        }
        arr[i] = max;
    }
    return arr;
}
// 解法一
function maximumGap(arr) {
    if (arr.length < 2) {
        return 0;
    }
    // 进行排序 
    // arr.sort((a, b) => a - b);
    arr = selectionSort(arr);
    // 遍历计算前后两个数之间的差值
    let max = 0;
    let tmp;
    for (let i = 0; i < arr.length - 1; i++) {
        tmp = arr[i] - arr[i + 1];
        // tmp = arr[i + 1] - arr[i];
        if (tmp > max) {
            max = tmp;
        }
    }
    return max;
}
// 解法二
function maximumGap2(arr) {
    if (arr.length < 2) {
        return 0;
    }
    let max = 0, tmp;
    // 冒泡排序解法
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[i]) {
                arr[i] = arr[i] + arr[j];
                arr[j] = arr[i] - arr[j];
                arr[i] = arr[i] - arr[j];
            }
        }
        if (i < arr.length - 1) {
            tmp = arr[i + 1] - arr[i];
            if (max < tmp) {
                max = tmp;
            }
        }
    }
    return Math.max(max, arr[1] - arr[0]);
}
let arr = [-7, 3, 6, 9, 18];
console.log(maximumGap(arr));
console.log(maximumGap2(arr));

