// 选择排序 最小值不断右移 升序
function selectionSortAlgorithmAsc(arr) {
    for (let i = 0, min, tmp; i < arr.length; i++) {
        // 记录当前位置值
        min = arr[i]
        for (let j = i + 1; j < arr.length; j++) {
            if (min > arr[j]) {
                // 找更小的值换位置
                tmp = min;
                min = arr[j];
                arr[j] = tmp;

            }
        }
        // 交换最小值
        arr[i] = min;
    }
    return arr;
}

// 选择排序 最大值不断右移 降序
function selectionSortAlgorithmDesc(arr) {
    for (let i = 0, max, tmp; i < arr.length; i++) {
        // 记录当前位置值
        max = arr[i]
        for (let j = i + 1; j < arr.length; j++) {
            if (max < arr[j]) {
                // 找更小的值换位置
                tmp = max;
                max = arr[j];
                arr[j] = tmp;

            }
        }
        // 交换最大值
        arr[i] = max;
    }
    return arr;
}

console.log(selectionSortAlgorithmAsc([3, 1, 5, 34, 6, 8, 0, -1]));
console.log(selectionSortAlgorithmDesc([3, 1, 5, 34, 6, 8, 0, -1]));
