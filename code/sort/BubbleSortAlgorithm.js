//  冒泡算法 最大值逐渐冒泡到右边 === 升序
function bubbleSortAlgorithmAsc(arr) {
    // 外层循环
    for (let i = arr.length - 1, tmp; i > 0; i--) {
        // 内层循环 比较一轮后会确定一个较大的值， 所以每次比对内循环变少
        for (let j = 0; j < i; j++) {
            tmp = arr[j];
            if (tmp > arr[j + 1]) {
                arr[j] = arr[j+1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}

//  冒泡算法 最小值逐渐冒泡到右边 === 降序
function bubbleSortAlgorithmDesc(arr) {
    // 外层循环
    for (let i = arr.length - 1, tmp; i > 0; i--) {
        // 内层循环 比较一轮后会确定一个较小的值， 所以每次比对内循环变少
        for (let j = 0; j < i; j++) {
            tmp = arr[j];
            if (tmp < arr[j + 1]) {
                arr[j] = arr[j+1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}

console.log(bubbleSortAlgorithmAsc([12,3,34,1,345,5,67,8]));
console.log(bubbleSortAlgorithmDesc([12,3,34,1,345,5,67,8]));
