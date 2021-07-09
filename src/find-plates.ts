export const getClosest = (value: number, values: number[]) => {
  let closest;
  for (let v of values) {
    if (v <= value) {
      closest = Math.max(v, closest ?? 0);
    }
  }
  return closest;
}; 

export const findPlates = (
  restWeight: number,
  availablePlates: number[]
): number[] => { 
  const closest = getClosest(restWeight, availablePlates);
  if (closest) {
    return [closest, ...findPlates(restWeight - closest, availablePlates)];
  }
  return [] as number[];
};
