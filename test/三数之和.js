/**
 * 
 * 双重循环 + 双指针
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
    var ans = [];
    var nums = nums.sort(function(a, b) { return a - b });
    var n = nums.length;
    // 枚举 a
    for (var first = 0; first < n; ++first) {
        // 需要和上一次枚举的数不相同
        if (first > 0 && nums[first] == nums[first - 1]) {
            continue;
        }
        // c 对应的指针初始指向数组的最右端
        var third = n - 1;
        var target = -nums[first];
        // 枚举 b
        for (var second = first + 1; second < n; ++second) {
            // 需要和上一次枚举的数不相同
            if (second > first + 1 && nums[second] == nums[second - 1]) {
                continue;
            }
            // 需要保证 b 的指针在 c 的指针的左侧
            while (second < third && nums[second] + nums[third] > target) {
                --third;
            }
            // 如果指针重合，随着 b 后续的增加
            // 就不会有满足 a+b+c=0 并且 b<c 的 c 了，可以退出循环
            if (second == third) {
                break;
            }
            if (nums[second] + nums[third] == target) {
                ans.push([nums[first],
                    nums[second], nums[third]
                ])
            }
        }
    }
    return ans;
};
var nums = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4];
var res = threeSum(nums);
console.log('nums.sort----->>  ' + nums.sort(function(a, b) { return a - b }));
console.log(res);