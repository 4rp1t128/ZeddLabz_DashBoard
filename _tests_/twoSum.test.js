import twoSum from "../utils/twoSum.js"

test("finds correct indices", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test("returns undefined if no solution", () => {
    expect(twoSum([1, 2, 3], 7)).toBeUndefined();
});

test("handles empty array", () => {
    expect(twoSum([], 3)).toBeUndefined();
});
