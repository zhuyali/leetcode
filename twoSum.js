/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let another = target - num;
        let anotherIndex = nums.indexOf(another);
        if (anotherIndex !== -1) {
            if (anotherIndex === i) {
                anotherIndex = nums.lastIndexOf(another);
                if (anotherIndex === i) {
                    continue;
                }
            } else {
                return [i, anotherIndex]
            }
        }
    }
};
