import { getClosest } from "../find-plates";

test.each([[30, [1, 5, 20, 40], 20]])(
  "getClosest",
  (value: number, values: number[], expected: number) => {
    expect(getClosest(value, values)).toBe(expected);
  }
);
