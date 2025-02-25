type Fn = (acc: number, curr: number) => number;

function reduce(nums: number[], fn: Fn, init: number): number {
    let val = init;

    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }

    return val;
}

// Example usage:
const nums = [1, 2, 3, 4];
const sumFn = (acc: number, curr: number) => acc + curr;

console.log(reduce(nums, sumFn, 0)); // Output: 10
