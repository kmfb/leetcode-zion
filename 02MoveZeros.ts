// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// 示例:

// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]
// 说明:
// 1. [0,1,0,3,12]
// 2. [1,0,0,3,12]
// 3. [1,3,0,0,12]
// 4. [1,3,12,0,0]

// 必须在原数组上操作，不能拷贝额外的数组。
// 尽量减少操作次数。

const moveZerosStupid = (arr: Array<number>) => {
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    if (current == 0) {
      arr.splice(i, 1);
      arr.push(current);
    }
  }
};

const moveZerosOptimal = (nums: Array<number>) => {
  // define two points or changable index
  // forloop the input nums,
  // 1. if current loop value is not zero,swap the locations on left and right
  // 2. since already swapped, the left index should be updated.

  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    const current = nums[right];

    if (current !== 0) {
      const temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left++;
    }
  }
};
