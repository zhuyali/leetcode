/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const sortedNums = nums.sort(function(a, b) {
        return a - b;
    });
    const result = [];
    for (let i = 0; i < sortedNums.length; i++) {
        let currentValue = sortedNums[i];
        if (currentValue > 0) {
            return result;
        }
        if (i > 0 && currentValue === sortedNums[i - 1]) {
            continue;
        }
        for(let j = i + 1, k = sortedNums.length - 1; j < k;) {
            if (j > i + 1 && sortedNums[j] === sortedNums[j - 1]) {
                j++;
                continue;
            }
            if (k < sortedNums.length - 1 && sortedNums[k] === sortedNums[k + 1]) {
                k--;
                continue;
            }
            const sum = currentValue + sortedNums[j] + sortedNums[k];
            if (sum === 0) {
                result.push([currentValue, sortedNums[j], sortedNums[k]]);
                j++;
                k--;
            } else if (sum < 0) {
                j++;
            } else {
                k--;
            }
        }
    }
    return result;
};
