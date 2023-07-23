function findRotatedIndex(arr, num) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === num) {
        return mid;
      }
  
      // If the left half is sorted
      if (arr[left] <= arr[mid]) {
        // Check if the number lies in the sorted left half
        if (num >= arr[left] && num < arr[mid]) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }
      // If the right half is sorted
      else {
        // Check if the number lies in the sorted right half
        if (num > arr[mid] && num <= arr[right]) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }
  
    return -1; // Number not found in the array
  }
  

module.exports = findRotatedIndex
    
//   // Test cases
//   console.log(findRotatedIndex([3, 4, 1, 2], 4)); // Output: 1
//   console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); // Output: 2
//   console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)); // Output: 6
//   console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)); // Output: -1
//   console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)); // Output: -1
  