// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

// Constraints:

// 2 <= nums.length <= 10^4
// -10^9 <= nums[i] <= 10^9
// -10^9 <= target <= 10^9
// 只会存在一个有效答案

const twoSum = (nums: Array<number>, target: number) => {
  const indexMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (indexMap.has(complement)) {
      return [indexMap.get(complement), i];
    }

    indexMap.set(nums[i], i);
  }
};
