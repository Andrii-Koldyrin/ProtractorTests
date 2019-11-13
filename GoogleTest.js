var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('Twinfield on google search', function() {
    this.timeout(30000);
    beforeEach(function() {
        browser.waitForAngularEnabled(false);
        browser.driver.get('https://www.google.com');
        var googleSearch = element(by.name('q'));
        googleSearch.sendKeys('twinfield');
        browser.pause();
        var searchButton = element.all(by.name('btnK')).first();
        searchButton.click()});
    it('Twinfield website\'s link is the first in search results', function() {
      var searchResultsLink = element.all(by.className('TbwUpd')).get(3);
      expect(searchResultsLink.getText()).to.eventually.contains('https://www.wolterskluwer.co.uk')
   });
    it('Each search result link contains \'Twinfield\'', function() {
    var link = element.all(by.cssContainingText('h3, .LC20lb', 'Twinfield'));
    link.click();
    expect(browser.getTitle()).eventually.contains('Twinfield');
     })
});