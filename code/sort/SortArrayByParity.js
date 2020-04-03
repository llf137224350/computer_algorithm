//按奇偶排序数组 II
// 给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。

// 对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。

// 你可以返回任何满足上述条件的数组作为答案。

//  

// 示例：

// 输入：[4,2,5,7]
// 输出：[4,5,2,7]
// 解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。
//  

// 提示：

// 2 <= A.length <= 20000
// A.length % 2 == 0
// 0 <= A[i] <= 1000

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/sort-array-by-parity-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 解法一
function sortArrayByParity(arr = []) {
    let odd = [];// 奇数
    let even = [];// 偶数
    arr.forEach((item) => {
        if (item % 2 === 0) {
            even.push(item);
        } else {
            odd.push(item);
        }
    });
    arr.length = 0;
    // 对其排序
    odd.sort((a, b) => a - b);
    even.sort((a, b) => a - b);
    for (let i = 0; i < odd.length; i++) {
        arr.push(even[i]);
        arr.push(odd[i]);
    }
    return arr;
}
// 解法二
function sortArrayByParity2(arr = []) {
    // 对数组排序
    arr.sort((a, b) => a - b);
    let odd = 1;
    let even = 0;
    let r = [];
    // 遍历数组
    arr.forEach((item) => {
        if (item % 2 === 0) {
            r[even] = item;
            even += 2;
        } else {
            r[odd] = item;
            odd += 2;
        }
    })
    return r;
}

console.log(sortArrayByParity([4, 2, 5, 7]));
console.log(sortArrayByParity2([4, 2, 5, 7]));
