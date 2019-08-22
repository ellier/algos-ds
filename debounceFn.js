const debounce = (func, wait, immediate) => {
  // id to clear the callback in setTimeout from the queue
	let timeout;
	return () => {
    let context = this,
    args = arguments;
		let later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		let callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
