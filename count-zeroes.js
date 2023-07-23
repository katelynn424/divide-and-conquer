function countZeroes(arr) {
  
    let left = 0;
    let right = arr.length - 1;
  
    // Perform binary search to find the first occurrence of 0
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      // If the middle element is 1, move right
      if (arr[mid] === 1) {
        left = mid + 1;
      }
      // If the middle element is 0, move left to find the first occurrence of 0
      else {
        right = mid - 1;
      }
    }
  
    // The index of the first occurrence of 0 will be "left"
    // The number of zeroes in the array will be the length of the array minus the index of the first occurrence of 0
    return arr.length - left;
  }


module.exports = countZeroes

  
//   // Test cases
//   console.log(countZeroes([1, 1, 1, 1, 0, 0])); // Output: 2
//   console.log(countZeroes([1, 0, 0, 0, 0]));    // Output: 4
//   console.log(countZeroes([0, 0, 0]));          // Output: 3
//   console.log(countZeroes([1, 1, 1, 1]));       // Output: 0
  