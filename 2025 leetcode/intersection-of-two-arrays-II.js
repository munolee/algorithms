/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    return nums1.filter(num => {
        const index = nums2.indexOf(num);
        if (index !== -1) {
            nums2.splice(index, 1);
            return true;
        }
        return false;
    });
};

const fn = intersect(nums1 = [4,9,5], nums2 = [9,4,9,8,4]);
console.log(fn);