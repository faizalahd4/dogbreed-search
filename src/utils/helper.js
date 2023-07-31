/**
 * Helper utils
 * 
 * @author - Faizal
 * @date - 31st July, 2023 
 */
export const truncateInfo = (value, length) => value?.length > length ? value.substring(0, length).concat('...') : value;

// Debouce method
export const debounce = (func, delay) => {
    let timerId;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
}