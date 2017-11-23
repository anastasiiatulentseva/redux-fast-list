import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

const items = new Array(100);
function getItems(array) {
  return array.fill().map(function (x, el) {
    let checked = Math.random() >= 0.5;
    return {
      id: el,
      label: checked ? "I am checked!" : "I am unchecked!",
      checked: checked
    };
  });
}

class ItemApi {
  static getAllItems() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], getItems(items)));
      }, delay);
    });
  }
}

export default ItemApi;
