// 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

// 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。

// 示例 1：

// 输入：nums = [100,4,200,1,3,2]
// 输出：4
// 解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
// 示例 2：

// 输入：nums = [0,3,7,2,5,8,4,6,0,1]
// 输出：9

// 提示：

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
const LongestConsecutiveSequence = (nums: Array<number>) => {
  // 1. set a longestStreaks as 0.
  // 2. we need to hashed the array, so can let lookup time complexity as O(1).
  // 3. loop the hashed data, find every single num whether has a consecutive nums.
  // 4. if have streaks, get the streaks by whileloop, and check whether it bigger than longestStreaks, if are bigger, reset the longestSteaks
  // 5. return the streaks

  let longestStreaks = 0;
  const hashedNums = new Set(nums);

  for (const num of hashedNums) {
    if (!hashedNums.has(num - 1)) {
      let currentStreaks = 1;
      let currentNum = num;
      while (hashedNums.has(currentNum + 1)) {
        currentStreaks++;
        currentNum++;
      }
      if (currentStreaks > longestStreaks) {
        longestStreaks = currentStreaks;
      }
    }
  }
  return longestStreaks;
};
