if (!Promise.resolve) {
  Promise.resolve = function (value) {
    return new Promise(function (resolve) {
      resolve(value);
    });
  };
}

Promise.resolve(5).then(console.log);

// This method creates a promise that immediately becomes fulfilled with the given value.
