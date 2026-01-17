setInterval(() => {
  console.log("Runs every 2 seconds");
}, 2000);

const intervalId = setInterval(() => {}, 1000);
clearInterval(intervalId);
