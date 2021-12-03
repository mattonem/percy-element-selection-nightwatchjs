
test('Browserstack Live product card', function (browser) {
  browser
    .url("https://www.browserstack.com")
    .percySnapshotForSelectedElements('BS product card', {elements:'#post-26 > div:nth-child(1) > div:nth-child(1) > div > div > article > div > div > div > div.relative > div > div.col-sm-7.no-pad.m-w-100.t-w-100.product-cards-wrapper--row1 > div:nth-child(2) > div:nth-child(1) > div'})
    .expect.title().to.match(/BrowserStack/i);
});