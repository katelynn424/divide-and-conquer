function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      // If the array is already sorted (not rotated)
      if (arr[left] <= arr[right]) {
        return left;
      }
  
      const mid = Math.floor((left + right) / 2);
      const next = (mid + 1) % arr.length;
      const prev = (mid + arr.length - 1) % arr.length;
  
      // If the middle element is smaller than its neighbors, it is the smallest element
      if (arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
        return mid;
      }
      // If the left half is sorted, the smallest element lies in the right half
      else if (arr[left] <= arr[mid]) {
        left = mid + 1;
      }
      // If the right half is sorted, the smallest element lies in the left half
      else {
        right = mid - 1;
      }
    }
  
    return -1; // This should never happen if the array has distinct numbers and is sorted.
  }

module.exports = findRotationCount



  
  // // Test cases
  // console.log(findRotationCount([15, 18, 2, 3, 6, 12])); // Output: 2
  // console.log(findRotationCount([7, 9, 11, 12, 5]));    // Output: 4
  // console.log(findRotationCount([7, 9, 11, 12, 15]));   // Output: 0
  