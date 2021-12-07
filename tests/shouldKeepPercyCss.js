test('Browserstack signup button with CSS injection', function (browser) {
  browser
    .url("https://www.browserstack.com")
    .percySnapshotForSelectedElements('BS singup with css 1', {elements:'#signupModalButton', percyCSS:'#signupModalButton {background-color: #a52a2a}'})
    .percySnapshotForSelectedElements('BS freetrial with css 2', {elements:'#free-trial-link-anchor', percyCSS:'#free-trial-link-anchor {background-color: #99cc00}'})
    .expect.title().to.match(/BrowserStack/i);
});