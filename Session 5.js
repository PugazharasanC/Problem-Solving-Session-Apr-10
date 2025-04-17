//? Day 5: Searching Algorithms
//* Session Focus: Linear search, binary search, and advanced search techniques.
//? Session Practice Questions:
//! Implement a linear search to find an element in an array
function linearSearch(arr, target) {
  console.log(arr);
  console.log(target);
  let count = 0;
  for (let ind = 0; ind < arr.length; ind++) {
    count++;
    if (arr[ind] == target) return [count, ind];
  }
  return [count, -1];
}
// console.log(
//   linearSearch(
//     Array.from(
//       { length: 1000 },
//       (_, ind) => ind + 1 + Math.floor(Math.random() * 2)
//     ),
//     Math.floor(Math.random() * 1000) + 1
//   )
// );
//! Implement a search on a sorted array
function binarySearch(arr = [], target = 0) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == target) return mid;
    else if (arr[mid] < target) {
      low = mid + 1;
    } else if (arr[mid] > target) {
      high = mid - 1;
    }
  }

  return -1;
}
// console.log(
//   binarySearch(
//     [
//       1, 2, 4, 4, 5, 7, 8, 8, 10, 11, 12, 12, 13, 14, 16, 17, 17, 18, 20, 20,
//       22, 23, 23, 24, 25, 27, 27, 28, 30, 30, 31, 32, 34, 35, 36, 37, 38, 39,
//       39, 41, 41, 42, 43, 45, 46, 47, 47, 49, 49, 51, 51, 53, 53, 55, 56, 57,
//       57, 58, 60, 61, 62, 63, 64, 65, 66, 66, 68, 69, 70, 71, 71, 72, 74, 75,
//       76, 76, 78, 78, 80, 80, 82, 82, 83, 84, 86, 87, 88, 89, 90, 91, 91, 93,
//       93, 95, 95, 96, 97, 99, 99, 100, 101, 102, 103, 105, 106, 107, 107, 109,
//       110, 111, 111, 113, 114, 114, 115, 117, 117, 118, 119, 120, 121, 122, 124,
//       124, 125, 126, 128, 129, 129, 131, 132, 133, 134, 134, 135, 136, 138, 138,
//       140, 140, 141, 142, 143, 144, 145, 147, 147, 148, 149, 150, 152, 153, 154,
//       154, 156, 157, 158, 158, 159, 161, 162, 162, 164, 164, 165, 167, 168, 168,
//       170, 170, 171, 172, 173, 174, 176, 177, 177, 179, 180, 180, 182, 183, 184,
//       184, 185, 186, 187, 189, 189, 191, 191, 193, 193, 195, 196, 196, 198, 198,
//       200, 200, 201, 203, 203, 204, 206, 206, 208, 209, 209, 211, 212, 213, 214,
//       215, 215, 216, 218, 219, 219, 221, 221, 223, 224, 224, 225, 226, 227, 229,
//       230, 230, 232, 233, 233, 235, 235, 236, 237, 238, 240, 241, 242, 243, 244,
//       244, 246, 246, 247, 249, 250, 250, 251, 252, 253, 255, 256, 257, 257, 259,
//       260, 261, 262, 263, 264, 264, 265, 266, 268, 268, 270, 270, 271, 273, 274,
//       274, 276, 276, 277, 278, 280, 280, 282, 282, 283, 284, 285, 287, 287, 288,
//       289, 291, 291, 293, 293, 294, 296, 296, 297, 298, 299, 301, 301, 302, 303,
//       304, 306, 306, 307, 309, 310, 311, 311, 313, 314, 314, 316, 317, 317, 318,
//       320, 320, 321, 322, 323, 324, 325, 326, 327, 329, 329, 330, 331, 332, 334,
//       335, 335, 336, 337, 338, 340, 340, 341, 342, 343, 345, 346, 346, 347, 348,
//       349, 350, 351, 352, 354, 354, 355, 357, 357, 358, 360, 361, 362, 363, 364,
//       364, 365, 367, 368, 369, 370, 370, 372, 373, 374, 374, 376, 376, 378, 378,
//       380, 380, 382, 382, 383, 384, 386, 387, 388, 388, 390, 390, 391, 392, 394,
//       395, 395, 396, 398, 398, 400, 400, 401, 402, 403, 404, 406, 407, 407, 408,
//       409, 410, 411, 413, 414, 414, 415, 417, 417, 419, 420, 420, 421, 423, 423,
//       425, 426, 426, 428, 428, 430, 431, 432, 432, 433, 434, 435, 436, 438, 439,
//       440, 441, 441, 443, 444, 444, 445, 446, 448, 448, 450, 450, 452, 453, 454,
//       454, 456, 457, 458, 459, 460, 461, 461, 463, 463, 464, 466, 467, 467, 469,
//       469, 471, 472, 472, 474, 475, 475, 477, 478, 479, 480, 481, 482, 482, 484,
//       485, 485, 487, 487, 488, 490, 490, 491, 493, 493, 495, 496, 496, 498, 499,
//       499, 500, 502, 503, 503, 505, 506, 506, 508, 509, 509, 511, 511, 512, 514,
//       514, 515, 517, 518, 519, 519, 521, 521, 523, 524, 525, 526, 526, 528, 529,
//       530, 531, 531, 532, 534, 535, 535, 537, 537, 539, 539, 540, 541, 543, 543,
//       545, 545, 546, 548, 549, 550, 551, 551, 553, 553, 554, 556, 557, 557, 559,
//       560, 560, 562, 563, 564, 565, 565, 566, 567, 568, 569, 571, 572, 573, 574,
//       575, 575, 576, 578, 578, 579, 581, 582, 583, 584, 585, 585, 586, 588, 589,
//       589, 591, 592, 592, 594, 594, 596, 597, 597, 599, 600, 600, 601, 603, 604,
//       605, 606, 607, 608, 609, 609, 611, 612, 612, 613, 615, 615, 617, 618, 618,
//       619, 620, 621, 623, 624, 625, 625, 627, 627, 628, 630, 630, 632, 633, 633,
//       634, 636, 637, 638, 638, 640, 640, 642, 643, 644, 645, 645, 646, 648, 648,
//       649, 650, 652, 653, 654, 655, 655, 656, 657, 659, 659, 661, 661, 662, 664,
//       665, 665, 666, 668, 669, 669, 671, 672, 672, 674, 675, 675, 677, 678, 678,
//       679, 680, 681, 682, 683, 685, 685, 686, 688, 688, 689, 691, 691, 693, 694,
//       695, 695, 696, 698, 699, 699, 701, 702, 702, 703, 705, 705, 706, 708, 709,
//       710, 710, 712, 712, 714, 714, 716, 717, 717, 719, 719, 720, 721, 723, 724,
//       724, 725, 726, 728, 728, 730, 730, 731, 733, 734, 734, 736, 736, 738, 738,
//       739, 740, 742, 743, 744, 745, 746, 747, 747, 749, 750, 750, 752, 753, 754,
//       754, 756, 757, 757, 759, 759, 760, 761, 763, 764, 764, 765, 767, 767, 768,
//       770, 771, 772, 772, 774, 774, 775, 777, 778, 778, 780, 781, 782, 782, 783,
//       785, 786, 786, 788, 788, 789, 790, 792, 792, 794, 795, 796, 796, 798, 799,
//       800, 800, 802, 802, 804, 805, 805, 806, 807, 809, 809, 810, 811, 812, 813,
//       814, 815, 817, 817, 819, 820, 820, 822, 823, 824, 824, 826, 826, 827, 828,
//       830, 831, 831, 832, 833, 835, 835, 837, 838, 839, 840, 841, 841, 842, 844,
//       844, 846, 847, 847, 849, 849, 850, 851, 853, 853, 855, 856, 856, 858, 859,
//       860, 860, 861, 862, 863, 865, 866, 867, 867, 868, 869, 871, 872, 872, 873,
//       874, 876, 876, 878, 879, 879, 881, 881, 882, 883, 884, 885, 887, 888, 888,
//       889, 890, 891, 892, 893, 894, 896, 896, 898, 899, 899, 900, 901, 902, 904,
//       905, 905, 906, 907, 908, 909, 910, 911, 912, 914, 915, 916, 916, 917, 918,
//       920, 920, 922, 922, 924, 924, 925, 926, 927, 928, 929, 931, 932, 933, 934,
//       935, 936, 936, 938, 938, 940, 941, 941, 942, 943, 945, 945, 946, 947, 948,
//       950, 950, 952, 953, 953, 955, 956, 956, 958, 959, 960, 960, 962, 962, 963,
//       965, 965, 967, 968, 968, 970, 970, 971, 972, 973, 974, 975, 977, 977, 978,
//       979, 980, 982, 982, 984, 985, 985, 987, 988, 989, 990, 990, 991, 993, 993,
//       994, 996, 997, 998, 999, 1000, 1001,
//     ],
//     987
//   )
// );

//! Find the first and last occurrence of a target in a sorted array
function firstAndLastOccurrence(arr, target) {
  function findOccurence(arr, target, isFirst) {
    let low = 0;
    let high = arr.length - 1;
    let result = -1;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] == target) {
        result = mid;
        if (isFirst) high = mid - 1;
        else low = mid + 1;
      } else if (arr[mid] < target) low = mid + 1;
      else high = mid - 1;
    }
    return result;
  }

  let first = findOccurence(arr, target, true);
  let last = findOccurence(arr, target, false);
  return { first, last };
}
//! Count occurrences of a target using binary search
function numOfOccurrence(arr = [], target) {
  const { first, last } = firstAndLastOccurrence(arr, target);
  return first == -1 ? 0 : last - first + 1;
}
// console.log(
//   numOfOccurrence(
//     [1, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5, 6, 6, 6, 7, 8, 9, 9, 9, 10, 12, 12, 12],
//     11
//   )
// );
//! Search for a target in a rotated sorted array
//? [1, 2, 3, 4, 5] => [4, 5, 1, 2, 3]

function rotatedSearch(arr = [], target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] == target) return mid;
    if (arr[low] <= arr[mid]) {
      // left side is sorted
      if (arr[low] <= target && target <= arr[mid]) high = mid - 1;
      else low = mid + 1;
    } else if (arr[mid] <= arr[high]) {
      // right side is sorted
      if (arr[mid] <= target && target <= arr[high]) low = mid + 1;
      else high = mid - 1;
    }
  }
  return -1;
}
// console.log(
//   rotatedSearch([4, 5, 6, 7, 8, 9, -5, -4, -3, -2, -1, 0, 1, 2, 3], 2)
// );
//! Find the index where an element should be inserted in a sorted array
// [1,3,5,7,9]=> 4 => [1,3,4,5] => 2
function findInsertionIndex(arr = [], target = 0) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == target) return mid;
    else if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return low;
}

// const arr = [];
// for (let _ = 0; _ < 10; _++) {
//   let val = Math.floor(Math.random() * 100);
//   let ind = findInsertionIndex(arr, val);
//   arr.splice(ind, 0, val);
//   console.log(val, "will be inserted at index", ind, "->", ...arr);
// }

//! Find the peak element in a mountain array

function peakElement(arr = []) {
  let low = 0;
  let high = arr.length - 1;
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] < arr[mid + 1]) low = mid + 1;
    else high = mid;
  }
  return [low, high];
}

console.log(peakElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 3, 2, 1]));

// ? Post-Session Practice Questions:
// todo Find the floor and ceiling of a target in a sorted array
// todo Find the smallest missing element in a sorted array
// todo Implement a jump search on a sorted array
// todo Find the minimum element in a rotated sorted array
// todo Search in a 2D sorted matrix
// todo Find a pair with a given difference in a sorted array
// todo Implement an exponential search
// todo Find the square root of a number using binary search
// todo Find the closest element to a target in a sorted array
// todo Find fixed point in a sorted array (where arr[i] = i)
