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
  console.log("overrode openBrowser with delay enabled method.");
};

var delayedOpenBrowser = async (options = {}) => {

  if (delaySeconds > 0) {
    options['observe'] = true;
    options['observeTime'] = delaySeconds * 1000;
  }

  await _openBrowser(options);
  return {description: `Browser opened with per-step delay of ${delaySeconds} seconds.`};
};


module.exports = {
  'init': clientHandler,
  'openBrowser': delayedOpenBrowser
};
