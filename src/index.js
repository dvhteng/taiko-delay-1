var _eventHandler;
var _openBrowser;
var _client;
var _page;

let delaySeconds = process.env['TAIKO_DELAY_SECONDS'];
if (delaySeconds === null || delaySeconds === undefined) {
  delaySeconds = 0.0;
} else {
  delaySeconds = parseFloat(delaySeconds);
  if (Number.isNaN(delaySeconds)) {
    delaySeconds = 0.0;
  }
}

console.log(`delaySeconds = ${delaySeconds}`);

var clientHandler = async (taiko, eventHandler) => {
  _eventHandler = eventHandler;
  _openBrowser = taiko.openBrowser;
  console.log("overrode openBrowser");
  // _eventHandler.on('createdSession', async () => {
  //   _client = await taiko.client();
  //   _page = taikoSession.Page;
  //   Promise.all([_page.enable()]);
  // });
};

var delayedOpenBrowser = async (options = {}) => {

  if (delaySeconds > 0) {
    options['observe'] = true;
    options['observeTime'] = delaySeconds * 1000;
  }

  await _openBrowser(options);
  return {description: 'Browser opened with delay.'};
};


module.exports = {
  'init': clientHandler,
  'openBrowser': delayedOpenBrowser
};
