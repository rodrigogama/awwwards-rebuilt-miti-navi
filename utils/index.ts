export const splitArrayInHalf = <T>(
  arr: Array<T> = [],
): [Array<T>, Array<T>] => {
  const half = Math.ceil(arr.length / 2);
  const firstHalf = arr.slice(0, half);
  const secondHalf = arr.slice(-half);

  return [firstHalf, secondHalf];
};

export const isInView = (element: HTMLElement, partialVisible: boolean) => {
  const { top, bottom } = element.getBoundingClientRect();

  // if the element is partially visible
  if (partialVisible) {
    return top < window.innerHeight && bottom >= 0;
  }

  // element is completely visible
  return top >= 0 && bottom <= window.innerHeight;
};

export const animateOnScroll = (elements: Array<HTMLElement>) => {
  elements.forEach(element => {
    if (isInView(element, false)) {
      element.classList.add('animated-in-view');
    }
  });
};
