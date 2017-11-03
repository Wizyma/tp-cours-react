import phantom from 'phantom';

/**
 * Open the page aat the specified url
 * @param  {String} url
 * @return {[type]}     [description]
 */

export default (url, parse) => {

  let phInstance;
  let sitepage;

  const shutdown = () => {
    if (sitepage) sitepage.close();
    if (phInstance) {
      phInstance.exit();
      phInstance = null;
    }
  };

  return phantom
    .create()
    .then(pha => {
      phInstance = pha;
      return pha.createPage();
    })
    .then(page => {
      sitepage = page;
    })
    .then(() => sitepage.open(url))
    .then(() => sitepage.evaluate(() => {
      return document.body && document.body.innerHTML ? document.body.innerHTML : "";
    }))
    .then(parse)
    .then(r => {
      shutdown();
      return Promise.resolve(r);
    })
    .catch(e => {
      console.error('Unable to open url', e);
      shutdown();
      return Promise.reject(e);
    });

    process.on('SIGINT', () => {

      if (phInstance) {
        console.log('Shutting down PH');
        shutdown();
      }

      process.exit(0);
    });
};
