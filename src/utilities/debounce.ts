function debounce(fn, delay = 100) {
  let timer;
  return function (): void {
    let context = this;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, arguments);
    }, delay);
  };
}

export default debounce;
