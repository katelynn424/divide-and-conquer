function findFirstOccurrence(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        result = mid;
        right = mid - 1;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return result;
  }
  
function findLastOccurrence(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        result = mid;
        left = mid + 1;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return result;
  }
  
function sortedFrequency(arr, target) {
    const firstOccurrence = findFirstOccurrence(arr, target);
    const lastOccurrence = findLastOccurrence(arr, target);
  
    if (firstOccurrence === -1 || lastOccurrence === -1) {
      return -1; // Target not found in the array
    }
  
    return lastOccurrence - firstOccurrence + 1;
  }
  

module.exports = sortedFrequency


// // test cases
// sortedFrequency([1,1,2,2,2,2,3],2) // 4
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1
