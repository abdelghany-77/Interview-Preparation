// Problem Solving Interview Questions
const questions = [
  {
    id: 1,
    category: "Easy",
    question: "Two Sum",
    problemStatement:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
    approach:
      "Use a hash map to store the complement (target - current number) as we iterate through the array. For each number, check if its complement exists in the hash map. If it does, we've found our pair. If not, store the current number and its index in the hash map.",
    complexity:
      "Time Complexity: O(n) - We iterate through the array once. Space Complexity: O(n) - We store up to n elements in the hash map.",
    answer: `function twoSum(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  
  return [];
}

// Example usage:
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]`,
  },
  {
    id: 2,
    category: "Easy",
    question: "Reverse String",
    problemStatement:
      "Write a function that reverses a string. The input string is given as an array of characters. You must do this by modifying the input array in-place with O(1) extra memory.",
    approach:
      "Use two pointers approach: one at the beginning and one at the end of the array. Swap the characters at these positions and move the pointers towards the center until they meet.",
    complexity:
      "Time Complexity: O(n) - We iterate through half the array. Space Complexity: O(1) - We only use two pointer variables.",
    answer: `function reverseString(s) {
  let left = 0;
  let right = s.length - 1;
  
  while (left < right) {
    // Swap characters
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
  
  return s;
}

// Example usage:
const str1 = ['h', 'e', 'l', 'l', 'o'];
console.log(reverseString(str1)); // Output: ['o', 'l', 'l', 'e', 'h']`,
  },
  {
    id: 3,
    category: "Easy",
    question: "Palindrome Check",
    problemStatement:
      "Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.",
    approach:
      "Use two pointers from both ends of the string. Skip non-alphanumeric characters and compare characters in lowercase. If all comparisons match, the string is a palindrome.",
    complexity:
      "Time Complexity: O(n) - We iterate through the string once. Space Complexity: O(1) - We only use two pointer variables.",
    answer: `function isPalindrome(s) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  let left = 0;
  let right = cleaned.length - 1;
  
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }
  
  return true;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false`,
  },
  {
    id: 4,
    category: "Easy",
    question: "FizzBuzz",
    problemStatement:
      "Given an integer n, return a string array answer (1-indexed) where: answer[i] == 'FizzBuzz' if i is divisible by 3 and 5, answer[i] == 'Fizz' if i is divisible by 3, answer[i] == 'Buzz' if i is divisible by 5, answer[i] == i (as a string) if none of the above conditions are true.",
    approach:
      "Iterate from 1 to n and check divisibility conditions in order: first check for both 3 and 5 (FizzBuzz), then 3 (Fizz), then 5 (Buzz), otherwise add the number as string.",
    complexity:
      "Time Complexity: O(n) - We iterate from 1 to n. Space Complexity: O(n) - We store n strings in the result array.",
    answer: `function fizzBuzz(n) {
  const result = [];
  
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(i.toString());
    }
  }
  
  return result;
}

// Example usage:
console.log(fizzBuzz(15));
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]`,
  },
  {
    id: 5,
    category: "Easy",
    question: "Find Maximum in Array",
    problemStatement:
      "Given an array of integers, find and return the maximum value in the array.",
    approach:
      "Initialize a max variable with the first element. Iterate through the array and update max whenever we find a larger value.",
    complexity:
      "Time Complexity: O(n) - We iterate through the array once. Space Complexity: O(1) - We only use one variable to track the maximum.",
    answer: `function findMax(nums) {
  if (nums.length === 0) return null;
  
  let max = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  
  return max;
}

// Alternative: Using Math.max and spread operator
function findMaxAlt(nums) {
  return nums.length === 0 ? null : Math.max(...nums);
}

// Example usage:
console.log(findMax([3, 7, 2, 9, 1])); // Output: 9
console.log(findMax([-5, -2, -10, -1])); // Output: -1`,
  },
  {
    id: 6,
    category: "Easy",
    question: "Remove Duplicates from Sorted Array",
    problemStatement:
      "Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. Return the number of unique elements.",
    approach:
      "Use two pointers: one for iterating through the array and one for tracking the position of unique elements. When we find a different element, increment the unique pointer and copy the element there.",
    complexity:
      "Time Complexity: O(n) - We iterate through the array once. Space Complexity: O(1) - We modify the array in-place.",
    answer: `function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  
  let uniqueIndex = 0;
  
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[uniqueIndex]) {
      uniqueIndex++;
      nums[uniqueIndex] = nums[i];
    }
  }
  
  return uniqueIndex + 1;
}

// Example usage:
const nums = [1, 1, 2, 2, 3, 4, 4, 5];
const length = removeDuplicates(nums);
console.log(length); // Output: 5
console.log(nums.slice(0, length)); // Output: [1, 2, 3, 4, 5]`,
  },
  {
    id: 7,
    category: "Easy",
    question: "Valid Anagram",
    problemStatement:
      "Given two strings s and t, return true if t is an anagram of s, and false otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.",
    approach:
      "Create a frequency map of characters in the first string. Then iterate through the second string, decrementing counts. If all counts reach zero and both strings have the same length, they are anagrams.",
    complexity:
      "Time Complexity: O(n) - We iterate through both strings. Space Complexity: O(1) - Maximum 26 characters for lowercase English letters.",
    answer: `function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  
  const charCount = {};
  
  // Count characters in s
  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  
  // Decrement counts for characters in t
  for (let char of t) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }
  
  return true;
}

// Example usage:
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false`,
  },
  {
    id: 8,
    category: "Easy",
    question: "First Unique Character",
    problemStatement:
      "Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.",
    approach:
      "First pass: count the frequency of each character. Second pass: find the first character with a frequency of 1.",
    complexity:
      "Time Complexity: O(n) - We iterate through the string twice. Space Complexity: O(1) - Maximum 26 characters for lowercase English letters.",
    answer: `function firstUniqChar(s) {
  const charCount = {};
  
  // Count character frequencies
  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  
  // Find first character with count 1
  for (let i = 0; i < s.length; i++) {
    if (charCount[s[i]] === 1) {
      return i;
    }
  }
  
  return -1;
}

// Example usage:
console.log(firstUniqChar("leetcode")); // 0 (character 'l')
console.log(firstUniqChar("loveleetcode")); // 2 (character 'v')
console.log(firstUniqChar("aabb")); // -1`,
  },
  {
    id: 9,
    category: "Easy",
    question: "Contains Duplicate",
    problemStatement:
      "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
    approach:
      "Use a Set to track seen numbers. If we encounter a number that's already in the Set, we've found a duplicate.",
    complexity:
      "Time Complexity: O(n) - We iterate through the array once. Space Complexity: O(n) - We store up to n unique elements in the Set.",
    answer: `function containsDuplicate(nums) {
  const seen = new Set();
  
  for (let num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  
  return false;
}

// Alternative: Using Set size comparison
function containsDuplicateAlt(nums) {
  return new Set(nums).size !== nums.length;
}

// Example usage:
console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false`,
  },
  {
    id: 10,
    category: "Easy",
    question: "Missing Number",
    problemStatement:
      "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",
    approach:
      "Use the formula for sum of first n natural numbers: n*(n+1)/2. Subtract the sum of array elements from this expected sum to find the missing number.",
    complexity:
      "Time Complexity: O(n) - We iterate through the array once. Space Complexity: O(1) - We only use a few variables.",
    answer: `function missingNumber(nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((sum, num) => sum + num, 0);
  
  return expectedSum - actualSum;
}

// Alternative: Using XOR (bit manipulation)
function missingNumberXOR(nums) {
  let xor = nums.length;
  
  for (let i = 0; i < nums.length; i++) {
    xor ^= i ^ nums[i];
  }
  
  return xor;
}

// Example usage:
console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([0, 1])); // 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // 8`,
  },
  {
    id: 11,
    category: "Medium",
    question: "Binary Search",
    problemStatement:
      "Given a sorted array of integers nums and an integer target, write a function to search target in nums. If target exists, return its index. Otherwise, return -1.",
    approach:
      "Use the divide and conquer approach. Compare the target with the middle element. If they match, return the index. If target is smaller, search in the left half. If target is larger, search in the right half. Repeat until found or search space is exhausted.",
    complexity:
      "Time Complexity: O(log n) - We halve the search space in each iteration. Space Complexity: O(1) - We only use a few pointer variables.",
    answer: `function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
}

// Recursive approach
function binarySearchRecursive(nums, target, left = 0, right = nums.length - 1) {
  if (left > right) return -1;
  
  const mid = Math.floor((left + right) / 2);
  
  if (nums[mid] === target) {
    return mid;
  } else if (nums[mid] < target) {
    return binarySearchRecursive(nums, target, mid + 1, right);
  } else {
    return binarySearchRecursive(nums, target, left, mid - 1);
  }
}

// Example usage:
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 2)); // -1`,
  },
  {
    id: 12,
    category: "Medium",
    question: "Merge Two Sorted Arrays",
    problemStatement:
      "Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array. The number of elements in nums1 and nums2 are m and n respectively. Assume nums1 has enough space to hold additional elements from nums2.",
    approach:
      "Use three pointers: one for the last element in nums1 (m-1), one for the last element in nums2 (n-1), and one for the last position in the merged array (m+n-1). Compare elements from the end and place the larger one at the end of nums1. This avoids overwriting elements that haven't been processed yet.",
    complexity:
      "Time Complexity: O(m+n) - We iterate through both arrays once. Space Complexity: O(1) - We modify nums1 in-place.",
    answer: `function merge(nums1, m, nums2, n) {
  let i = m - 1; // Last element in nums1's initial elements
  let j = n - 1; // Last element in nums2
  let k = m + n - 1; // Last position in merged array
  
  // Merge from the end
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
  
  // Copy remaining elements from nums2 (if any)
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
  
  return nums1;
}

// Example usage:
const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6];
console.log(merge(nums1, 3, nums2, 3)); // [1, 2, 2, 3, 5, 6]`,
  },
  {
    id: 13,
    category: "Medium",
    question: "Valid Parentheses",
    problemStatement:
      "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if: Open brackets must be closed by the same type of brackets, and open brackets must be closed in the correct order.",
    approach:
      "Use a stack to track opening brackets. When we encounter a closing bracket, check if it matches the most recent opening bracket (top of stack). If all brackets are properly matched, the stack will be empty at the end.",
    complexity:
      "Time Complexity: O(n) - We iterate through the string once. Space Complexity: O(n) - Stack can hold up to n/2 opening brackets.",
    answer: `function isValid(s) {
  const stack = [];
  const pairs = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  
  for (let char of s) {
    // If it's a closing bracket
    if (char in pairs) {
      // Check if it matches the top of stack
      if (stack.length === 0 || stack.pop() !== pairs[char]) {
        return false;
      }
    } else {
      // It's an opening bracket, push to stack
      stack.push(char);
    }
  }
  
  // Valid if stack is empty
  return stack.length === 0;
}

// Example usage:
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true`,
  },
  {
    id: 14,
    category: "Medium",
    question: "Longest Substring Without Repeating Characters",
    problemStatement:
      "Given a string s, find the length of the longest substring without repeating characters.",
    approach:
      "Use the sliding window technique with two pointers. Maintain a set or map of characters in the current window. When we encounter a duplicate, shrink the window from the left until the duplicate is removed. Track the maximum window size.",
    complexity:
      "Time Complexity: O(n) - Each character is visited at most twice. Space Complexity: O(min(m, n)) where m is the charset size.",
    answer: `function lengthOfLongestSubstring(s) {
  const charSet = new Set();
  let left = 0;
  let maxLength = 0;
  
  for (let right = 0; right < s.length; right++) {
    // Shrink window until no duplicates
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    
    // Add current character
    charSet.add(s[right]);
    
    // Update max length
    maxLength = Math.max(maxLength, right - left + 1);
  }
  
  return maxLength;
}

// Alternative: Using Map to store character indices
function lengthOfLongestSubstringAlt(s) {
  const charIndex = new Map();
  let left = 0;
  let maxLength = 0;
  
  for (let right = 0; right < s.length; right++) {
    if (charIndex.has(s[right])) {
      left = Math.max(left, charIndex.get(s[right]) + 1);
    }
    
    charIndex.set(s[right], right);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  
  return maxLength;
}

// Example usage:
console.log(lengthOfLongestSubstring("abcabcbb")); // 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb")); // 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew")); // 3 ("wke")`,
  },
  {
    id: 15,
    category: "Medium",
    question: "Group Anagrams",
    problemStatement:
      "Given an array of strings strs, group the anagrams together. You can return the answer in any order. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase.",
    approach:
      "Create a hash map where the key is a sorted version of the string (or a character count signature) and the value is an array of all strings that match that pattern. All anagrams will have the same sorted string.",
    complexity:
      "Time Complexity: O(n * k log k) where n is the number of strings and k is the maximum length of a string. Space Complexity: O(n * k) to store all strings in the hash map.",
    answer: `function groupAnagrams(strs) {
  const map = new Map();
  
  for (let str of strs) {
    // Sort the string to create a key
    const sorted = str.split('').sort().join('');
    
    if (!map.has(sorted)) {
      map.set(sorted, []);
    }
    
    map.get(sorted).push(str);
  }
  
  return Array.from(map.values());
}

// Alternative: Using character count as key
function groupAnagramsAlt(strs) {
  const map = new Map();
  
  for (let str of strs) {
    const count = new Array(26).fill(0);
    
    for (let char of str) {
      count[char.charCodeAt(0) - 97]++;
    }
    
    const key = count.join('#');
    
    if (!map.has(key)) {
      map.set(key, []);
    }
    
    map.get(key).push(str);
  }
  
  return Array.from(map.values());
}

// Example usage:
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]`,
  },
  {
    id: 16,
    category: "Medium",
    question: "Product of Array Except Self",
    problemStatement:
      "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. You must write an algorithm that runs in O(n) time and without using the division operation.",
    approach:
      "Use two passes: first calculate prefix products (product of all elements before i), then calculate suffix products (product of all elements after i) while building the result. The result at each position is the product of its prefix and suffix.",
    complexity:
      "Time Complexity: O(n) - Two passes through the array. Space Complexity: O(1) - Output array doesn't count as extra space.",
    answer: `function productExceptSelf(nums) {
  const n = nums.length;
  const result = new Array(n);
  
  // Calculate prefix products
  result[0] = 1;
  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }
  
  // Calculate suffix products and multiply with prefix
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }
  
  return result;
}

// Example usage:
console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0, 0, 9, 0, 0]`,
  },
  {
    id: 17,
    category: "Medium",
    question: "3Sum",
    problemStatement:
      "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. The solution set must not contain duplicate triplets.",
    approach:
      "Sort the array first. For each element, use two pointers to find pairs that sum to the negative of that element. Skip duplicates to avoid duplicate triplets.",
    complexity:
      "Time Complexity: O(n²) - Sorting is O(n log n), and we have nested loops. Space Complexity: O(1) - Not counting the output array.",
    answer: `function threeSum(nums) {
  const result = [];
  nums.sort((a, b) => a - b);
  
  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicates for first number
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    
    let left = i + 1;
    let right = nums.length - 1;
    const target = -nums[i];
    
    while (left < right) {
      const sum = nums[left] + nums[right];
      
      if (sum === target) {
        result.push([nums[i], nums[left], nums[right]]);
        
        // Skip duplicates for second number
        while (left < right && nums[left] === nums[left + 1]) left++;
        // Skip duplicates for third number
        while (left < right && nums[right] === nums[right - 1]) right--;
        
        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  
  return result;
}

// Example usage:
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// Output: [[-1, -1, 2], [-1, 0, 1]]`,
  },
  {
    id: 18,
    category: "Medium",
    question: "Top K Frequent Elements",
    problemStatement:
      "Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.",
    approach:
      "Count the frequency of each element using a hash map. Then use bucket sort where the index represents the frequency. Collect elements from the highest frequency buckets until we have k elements.",
    complexity:
      "Time Complexity: O(n) - Counting frequencies and bucket sort are both O(n). Space Complexity: O(n) - For the frequency map and buckets.",
    answer: `function topKFrequent(nums, k) {
  // Count frequencies
  const freqMap = new Map();
  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }
  
  // Create buckets where index = frequency
  const buckets = Array(nums.length + 1).fill().map(() => []);
  
  for (let [num, freq] of freqMap) {
    buckets[freq].push(num);
  }
  
  // Collect k most frequent elements
  const result = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    if (buckets[i].length > 0) {
      result.push(...buckets[i]);
    }
  }
  
  return result.slice(0, k);
}

// Example usage:
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1, 2]
console.log(topKFrequent([1], 1)); // [1]`,
  },
  {
    id: 19,
    category: "Hard",
    question: "Merge K Sorted Lists",
    problemStatement:
      "You are given an array of k linked lists, each linked list is sorted in ascending order. Merge all the linked lists into one sorted linked list and return it.",
    approach:
      "Use a min heap (priority queue) to efficiently get the smallest element among all k lists. Add the first node from each list to the heap, then repeatedly extract the minimum, add it to the result, and add the next node from that list to the heap.",
    complexity:
      "Time Complexity: O(N log k) where N is the total number of nodes and k is the number of lists. Space Complexity: O(k) for the heap.",
    answer: `class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class MinHeap {
  constructor() {
    this.heap = [];
  }
  
  insert(node) {
    this.heap.push(node);
    this.bubbleUp(this.heap.length - 1);
  }
  
  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return min;
  }
  
  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index].val >= this.heap[parentIndex].val) break;
      [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
      index = parentIndex;
    }
  }
  
  bubbleDown(index) {
    while (true) {
      let smallest = index;
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      
      if (left < this.heap.length && this.heap[left].val < this.heap[smallest].val) {
        smallest = left;
      }
      if (right < this.heap.length && this.heap[right].val < this.heap[smallest].val) {
        smallest = right;
      }
      
      if (smallest === index) break;
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      index = smallest;
    }
  }
  
  size() {
    return this.heap.length;
  }
}

function mergeKLists(lists) {
  const minHeap = new MinHeap();
  
  // Add first node from each list
  for (let list of lists) {
    if (list) minHeap.insert(list);
  }
  
  const dummy = new ListNode(0);
  let current = dummy;
  
  while (minHeap.size() > 0) {
    const minNode = minHeap.extractMin();
    current.next = minNode;
    current = current.next;
    
    if (minNode.next) {
      minHeap.insert(minNode.next);
    }
  }
  
  return dummy.next;
}

// Example usage:
// Creating lists: [[1,4,5],[1,3,4],[2,6]]
const l1 = new ListNode(1, new ListNode(4, new ListNode(5)));
const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const l3 = new ListNode(2, new ListNode(6));
const merged = mergeKLists([l1, l2, l3]);
// Result: 1->1->2->3->4->4->5->6`,
  },
  {
    id: 20,
    category: "Hard",
    question: "Median of Two Sorted Arrays",
    problemStatement:
      "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).",
    approach:
      "Use binary search on the smaller array to partition both arrays such that all elements on the left are smaller than all elements on the right. The median is calculated from the maximum of left elements and minimum of right elements.",
    complexity:
      "Time Complexity: O(log(min(m,n))) - Binary search on the smaller array. Space Complexity: O(1) - Only using a few variables.",
    answer: `function findMedianSortedArrays(nums1, nums2) {
  // Ensure nums1 is the smaller array
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }
  
  const m = nums1.length;
  const n = nums2.length;
  let left = 0;
  let right = m;
  
  while (left <= right) {
    const partition1 = Math.floor((left + right) / 2);
    const partition2 = Math.floor((m + n + 1) / 2) - partition1;
    
    const maxLeft1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
    const minRight1 = partition1 === m ? Infinity : nums1[partition1];
    
    const maxLeft2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
    const minRight2 = partition2 === n ? Infinity : nums2[partition2];
    
    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      // Found correct partition
      if ((m + n) % 2 === 0) {
        return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
      } else {
        return Math.max(maxLeft1, maxLeft2);
      }
    } else if (maxLeft1 > minRight2) {
      right = partition1 - 1;
    } else {
      left = partition1 + 1;
    }
  }
  
  throw new Error("Arrays are not sorted");
}

// Example usage:
console.log(findMedianSortedArrays([1, 3], [2])); // 2.0
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5`,
  },
  {
    id: 21,
    category: "Hard",
    question: "Trapping Rain Water",
    problemStatement:
      "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    approach:
      "Use two pointers from both ends. Track the maximum height seen from both sides. The water level at any position is determined by the minimum of the maximum heights from both sides, minus the current height.",
    complexity:
      "Time Complexity: O(n) - Single pass through the array. Space Complexity: O(1) - Only using a few variables.",
    answer: `function trap(height) {
  if (height.length === 0) return 0;
  
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let water = 0;
  
  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        water += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        water += rightMax - height[right];
      }
      right--;
    }
  }
  
  return water;
}

// Example usage:
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // 6
console.log(trap([4,2,0,3,2,5])); // 9`,
  },
  {
    id: 22,
    category: "Hard",
    question: "Longest Valid Parentheses",
    problemStatement:
      "Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.",
    approach:
      "Use a stack to track indices of unmatched parentheses. Push -1 initially as a base. For '(', push index. For ')', pop the stack. If stack becomes empty, push current index. Otherwise, the length is current index minus the top of stack.",
    complexity:
      "Time Complexity: O(n) - Single pass through the string. Space Complexity: O(n) - Stack can hold up to n elements.",
    answer: `function longestValidParentheses(s) {
  const stack = [-1];
  let maxLength = 0;
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else {
      stack.pop();
      
      if (stack.length === 0) {
        stack.push(i);
      } else {
        maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
      }
    }
  }
  
  return maxLength;
}

// Alternative: Using dynamic programming
function longestValidParenthesesDP(s) {
  const dp = new Array(s.length).fill(0);
  let maxLength = 0;
  
  for (let i = 1; i < s.length; i++) {
    if (s[i] === ')') {
      if (s[i - 1] === '(') {
        dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
      } else if (i - dp[i - 1] > 0 && s[i - dp[i - 1] - 1] === '(') {
        dp[i] = dp[i - 1] + 2 + (i - dp[i - 1] >= 2 ? dp[i - dp[i - 1] - 2] : 0);
      }
      maxLength = Math.max(maxLength, dp[i]);
    }
  }
  
  return maxLength;
}

// Example usage:
console.log(longestValidParentheses("(()")); // 2
console.log(longestValidParentheses(")()())")); // 4
console.log(longestValidParentheses("")); // 0`,
  },
  {
    id: 23,
    category: "Hard",
    question: "Word Ladder",
    problemStatement:
      "Given two words, beginWord and endWord, and a dictionary wordList, return the length of the shortest transformation sequence from beginWord to endWord, such that: Only one letter can be changed at a time, and each transformed word must exist in the word list.",
    approach:
      "Use BFS (Breadth-First Search) to find the shortest path. For each word, try changing each character to find valid next words in the dictionary. Track visited words to avoid cycles.",
    complexity:
      "Time Complexity: O(M² × N) where M is word length and N is number of words. Space Complexity: O(M × N) for the queue and visited set.",
    answer: `function ladderLength(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  
  if (!wordSet.has(endWord)) return 0;
  
  const queue = [[beginWord, 1]];
  const visited = new Set([beginWord]);
  
  while (queue.length > 0) {
    const [currentWord, level] = queue.shift();
    
    if (currentWord === endWord) {
      return level;
    }
    
    // Try changing each character
    for (let i = 0; i < currentWord.length; i++) {
      for (let c = 97; c <= 122; c++) { // 'a' to 'z'
        const char = String.fromCharCode(c);
        const newWord = currentWord.slice(0, i) + char + currentWord.slice(i + 1);
        
        if (wordSet.has(newWord) && !visited.has(newWord)) {
          visited.add(newWord);
          queue.push([newWord, level + 1]);
        }
      }
    }
  }
  
  return 0;
}

// Example usage:
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"])); // 5
// Explanation: "hit" -> "hot" -> "dot" -> "dog" -> "cog"

console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log"])); // 0
// Explanation: endWord "cog" is not in wordList`,
  },
  {
    id: 24,
    category: "Hard",
    question: "Regular Expression Matching",
    problemStatement:
      "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where: '.' Matches any single character, '*' Matches zero or more of the preceding element. The matching should cover the entire input string (not partial).",
    approach:
      "Use dynamic programming. Create a 2D table where dp[i][j] represents whether the first i characters of s match the first j characters of p. Handle three cases: exact match or '.', '*' matching zero occurrences, and '*' matching one or more occurrences.",
    complexity:
      "Time Complexity: O(m × n) where m and n are the lengths of s and p. Space Complexity: O(m × n) for the DP table.",
    answer: `function isMatch(s, p) {
  const m = s.length;
  const n = p.length;
  
  // dp[i][j] = s[0..i-1] matches p[0..j-1]
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(false));
  
  // Empty string matches empty pattern
  dp[0][0] = true;
  
  // Handle patterns like a*, a*b*, a*b*c*
  for (let j = 2; j <= n; j++) {
    if (p[j - 1] === '*') {
      dp[0][j] = dp[0][j - 2];
    }
  }
  
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const sChar = s[i - 1];
      const pChar = p[j - 1];
      
      if (pChar === '*') {
        const prevPChar = p[j - 2];
        
        // Match zero occurrences
        dp[i][j] = dp[i][j - 2];
        
        // Match one or more occurrences
        if (prevPChar === '.' || prevPChar === sChar) {
          dp[i][j] = dp[i][j] || dp[i - 1][j];
        }
      } else if (pChar === '.' || pChar === sChar) {
        dp[i][j] = dp[i - 1][j - 1];
      }
    }
  }
  
  return dp[m][n];
}

// Example usage:
console.log(isMatch("aa", "a")); // false
console.log(isMatch("aa", "a*")); // true
console.log(isMatch("ab", ".*")); // true
console.log(isMatch("aab", "c*a*b")); // true`,
  },
  {
    id: 25,
    category: "Hard",
    question: "Minimum Window Substring",
    problemStatement:
      "Given two strings s and t, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string.",
    approach:
      "Use sliding window with two pointers. Expand the right pointer to include characters until we have a valid window. Then shrink from the left to find the minimum window. Use hash maps to track character counts.",
    complexity:
      "Time Complexity: O(m + n) where m and n are the lengths of s and t. Space Complexity: O(m + n) for the hash maps.",
    answer: `function minWindow(s, t) {
  if (s.length === 0 || t.length === 0) return "";
  
  // Count characters in t
  const tCount = {};
  for (let char of t) {
    tCount[char] = (tCount[char] || 0) + 1;
  }
  
  let required = Object.keys(tCount).length;
  let formed = 0;
  
  const windowCounts = {};
  let left = 0;
  let right = 0;
  
  // ans[0] = window length, ans[1] = left, ans[2] = right
  let ans = [Infinity, 0, 0];
  
  while (right < s.length) {
    const char = s[right];
    windowCounts[char] = (windowCounts[char] || 0) + 1;
    
    if (tCount[char] && windowCounts[char] === tCount[char]) {
      formed++;
    }
    
    // Try to shrink the window
    while (left <= right && formed === required) {
      const leftChar = s[left];
      
      // Update result if this window is smaller
      if (right - left + 1 < ans[0]) {
        ans = [right - left + 1, left, right];
      }
      
      windowCounts[leftChar]--;
      if (tCount[leftChar] && windowCounts[leftChar] < tCount[leftChar]) {
        formed--;
      }
      
      left++;
    }
    
    right++;
  }
  
  return ans[0] === Infinity ? "" : s.substring(ans[1], ans[2] + 1);
}

// Example usage:
console.log(minWindow("ADOBECODEBANC", "ABC")); // "BANC"
console.log(minWindow("a", "a")); // "a"
console.log(minWindow("a", "aa")); // ""`,
  },
];
