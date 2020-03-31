// 给定一副牌，每张牌上都写着一个整数。

// 此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：

// 每组都有 X 张牌。
// 组内所有的牌上都写着相同的整数。
// 仅当你可选的 X >= 2 时返回 true。

//  

// 示例 1：

// 输入：[1,2,3,4,4,3,2,1]
// 输出：true
// 解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]
// 示例 2：

// 输入：[1,1,1,2,2,2,3,3]
// 输出：false
// 解释：没有满足要求的分组。
// 示例 3：

// 输入：[1]
// 输出：false
// 解释：没有满足要求的分组。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
// function hasGroupsSizeX(arr) {

//     if (arr.length <= 1) {
//         return false;
//     }
//     arr = arr.sort();
//     let min = Number.MAX_SAFE_INTEGER;
//     let tempArr = [];
//     arr.map((val) => {
//         // 如果临时数据为空
//         if (tempArr.length === 0) {
//             tempArr.push([]);
//             tempArr[0].push(val);
//         } else {
//             let isExist = false;
//             //遍历临时数组
//             for (let i = 0; i < tempArr.length; i++) {
//                 // 已经有了
//                 if (tempArr[i].indexOf(val) !== -1) {
//                     tempArr[i].push(val);
//                     isExist = true;
//                     break;
//                 }
//             }
//             if (!isExist) {
//                 if (tempArr[tempArr.length - 1].length < min) {
//                     min = tempArr[tempArr.length - 1].length;
//                 }
//                 tempArr.push([]);
//                 tempArr[tempArr.length - 1].push(val);
//             }
//         }

//     })
//     if (tempArr.length === 1) {
//         return true;
//     } else {
//         let isOk = true;
//         for (let i = 0; i < tempArr.length; i++) {
//             if (tempArr[i].length % min !== 0) {
//                 isOk = false;
//             }
//         }
//         return isOk;
//     }

// }
function hasGroupsSizeX(arr) {
    if (arr.length < 2) {
        return false;
    }
    // 对数组排序
    arr.sort();
    let len;
    let tmp;
    let dest = [];
    let result = true;
    let min = Number.MAX_SAFE_INTEGER;
    // 遍历数据
    for (let i = 0, len = arr.length, tmp = []; i < len; i++) {
        tmp.push(arr[i]);
        // 找剩下的和当前是否一致
        for (let j = i + 1;j < len - 1;j++) {
            // 相同 继续添加到之前数组
            if (arr[j] === arr[i]) {
                tmp.push(arr[j])
            } else {
                // 不相同 则判断是否为最小值
                if (min > tmp.length) {
                    min = tmp.length;
                }
                // 将当前的结果放置到dest数组
                dest.push([].concat(tmp));
                tmp.length = 0;
                // 将当前值放到临时数组中
                tmp.push(arr[j]);
                i = j;
                break;
            }
        }
    }
    dest.every((arr)=> {
        if (arr.length % min !== 0) {
            result = false;
            return false;
        }
    })
    return result;
}
console.log(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1]));
console.log(hasGroupsSizeX([1, 1]));
console.log(hasGroupsSizeX([1]));
console.log(hasGroupsSizeX([1, 1, 2, 2, 2, 2]));
