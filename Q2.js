function findMissingNumber(nums) {
    const n = nums.length;

    const expectedSum = (n * (n + 1)) / 2;

    const actualSum = nums.reduce((sum, num) => sum + num, 0);

    const missingNumber = expectedSum - actualSum;

    return missingNumber;
}

const nums1 = [3, 0, 1];
const result1 = findMissingNumber(nums1);
console.log(`Example 1: Missing Number is ${result1}`);

const nums2 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
const result2 = findMissingNumber(nums2);
console.log(`Example 2: Missing Number is ${result2}`);

const nums3 = [0, 1, 2, 4, 5, 6];
const result3 = findMissingNumber(nums3);
console.log(`Example 3: Missing Number is ${result3}`);