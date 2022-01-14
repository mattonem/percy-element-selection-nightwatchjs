test('Browserstack signup button', function (browser) {
  browser.url('https://www.ipaddress.my/');
  browser
    .url("https://www.browserstack.com")
    .percySnapshotForSelectedElements('BS signup', {elements:'#signupModalButton'})
    .expect.title().to.match(/BrowserStack/i);
});
