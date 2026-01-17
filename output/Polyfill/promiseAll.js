if (!Promise.all) {
  Promise.all = function (promises) {
    return new Promise(function (resolve, reject) {
      let results = [];
      let count = 0;

      promises.forEach((p, i) => {
        Promise.resolve(p)
          .then((val) => {
            results[i] = val;
            count++;

            if (count === promises.length) {
              resolve(results);
            }
          })
          .catch(reject);
      });
    });
  };
}

const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);

Promise.all([p1, p2]).then(console.log);

// Takes multiple promises and returns a single promise that:

// ✔ fulfills when ALL promises succeed
// ✖ rejects immediately if ANY promise fails
