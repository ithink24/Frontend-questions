if (!Promise.reject) {
  Promise.reject = function (reason) {
    return new Promise(function (_, reject) {
      reject(reason);
    });
  };
}

Promise.reject("Error!").then(null, console.log);

// This method creates a promise that immediately becomes rejected with the given reason.
