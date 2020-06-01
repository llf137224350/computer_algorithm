/*
 * @Author: い 狂奔的蜗牛
 * @Date: 2020-06-01 20:51:05
 * @Description: 最大矩形
 给定一个仅包含 0 和 1 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。

    示例:

    输入:
    [
    ["1","0","1","0","0"],
    ["1","0","1","1","1"],
    ["1","1","1","1","1"],
    ["1","0","0","1","0"]
    ]
    输出: 6

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/maximal-rectangle
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

function maximalRectangle(arr) {
    const result = [];
    const reg = /1{2,}/g;
    // 遍历二位数组中每一个一维数组
    arr = arr.map(item => {
        let str = item.join('');
        let res = reg.exec(str);
        const rs = [];
        while (res) {
            rs.push([res.index, res.index + res[0].length - 1]);
            res = reg.exec(str);
        }
        return rs
    });

    // 递归获取最大矩形
    const maxRect = (arr, result, n = 1) => {
        const top = arr.pop();
        const next = arr.pop();
        let tt;
        let nn;
        // 记录交叉的起始索引
        let start;
        // 记录交叉的结束索引
        let end;
        n++;
        let width = 1;
        let maxWidth = 1;
        // [ [ 2, 5 ], [ 0, 5 ] ]
        for (let i = 0; i < top.length; i++) {
            tt = top[i];
            for (let j = 0; j < next.length; j++) {
                nn = next[j];
                // 计算交集
                // 起始位置的最大值，结束位置的最小值
                width = Math.min(tt[1], nn[1]) - Math.max(tt[0], nn[0]);
                if (width >= maxWidth) {
                    maxWidth = width;
                    start = Math.max(tt[0], nn[0]);
                    end = Math.min(tt[1], nn[1]);
                }
            }
        }
        if (start === undefined && end === undefined) {
            if (n < 3) {
                return;
            } else {
                // 计算宽度
                width = top[0][1] - top[0][0] + 1;
                if (width > 1) {
                    result.push((n - 1) * width);
                }
            }
        } else {
            // 找到交叉点继续下一行
            if (arr.length > 0) {
                arr.push([
                    [start, end]
                ])
                maxRect(arr, result, n++)
            } else {
                // 从某一行一直计算到最后一行，这个时候start和end一直有值，所以不会进入到if层，这个时候n就是累计的行数（高），end-start+1就是宽
                result.push(n * (end - start + 1))
            }
        }
    }
    while (arr.length > 1) {
        maxRect([].concat(arr), result);
        arr.pop();
    }
    let max = 0;
    let item = result.pop();
    while (item) {
        max = item > max ? item : max;
        item = arr.pop();
    }
    return max;
}

const arr = [
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
];
console.log(maximalRectangle(arr));
