import { findPlates, getClosest } from "../find-plates";

test.each([
  [30, [1, 5, 20, 40], 20],
  [20, [1, 5, 20, 40], 20],
  [10, [1, 5, 20, 40], 5],
])("getClosest", (value: number, values: number[], expected: number) => {
  expect(getClosest(value, values)).toBe(expected);
});

test.each([
  [30, [1, 5, 20, 40], [20, 5, 5]],
  [20, [1, 5, 20, 40], [20]],
  [10, [1, 5, 20, 40], [5, 5]],
  [12.5, [1, 5, 20, 40], [5, 5]],
])("findPlates", (value: number, values: number[], expected: number[]) => {
  expect(findPlates(value, values)).toEqual(expect.arrayContaining(expected));
});
