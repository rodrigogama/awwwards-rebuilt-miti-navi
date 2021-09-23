export const splitArrayInHalf = <T>(
  arr: Array<T> = [],
): [Array<T>, Array<T>] => {
  const half = Math.ceil(arr.length / 2);
  const firstHalf = arr.slice(0, half);
  const secondHalf = arr.slice(-half);

  return [firstHalf, secondHalf];
};
