const delay = (ms) => (...params) => new Promise((resolve, reject) => {
  setTimeout(resolve.bind(null, ...params), ms);
});

const random = (max) => Math.floor(Math.random() * max) + 1;

export default (req, res, next) => {

  const wait = delay(random(2) * 1000);

  wait()
    .then(next);
}
