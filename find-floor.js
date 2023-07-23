function findFloor(arr, x) {
    let left = 0;
    let right = arr.length - 1;
    let floor = -1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === x) {
        return arr[mid]; // Found the exact value, which is the floor itself
      }
  
      // If the middle element is smaller than the target, update the floor and search in the right half
      if (arr[mid] < x) {
        floor = arr[mid];
        left = mid + 1;
      }
      // If the middle element is greater than the target, search in the left half
      else {
        right = mid - 1;
      }
    }
  
    return floor;
  }

module.exports = findFloor

  
//   // Test cases
//   console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 9));  // Output: 8
//   console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 20)); // Output: 19
//   console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 0));  // Output: -1
  