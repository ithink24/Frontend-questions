if (!Promise.race) {
  Promise.race = function (promises) {
    return new Promise(function (resolve, reject) {
      promises.forEach((p) => {
        Promise.resolve(p).then(resolve).catch(reject);
      });
    });
  };
}

const p1 = new Promise((res) => setTimeout(() => res("Fast!"), 100));
const p2 = new Promise((res) => setTimeout(() => res("Slow"), 500));

Promise.race([p1, p2]).then(console.log);

// Takes multiple promises and returns a promise that:

// ✔ settles (fulfills or rejects) as soon as the FIRST promise settles
// — doesn’t wait for others
