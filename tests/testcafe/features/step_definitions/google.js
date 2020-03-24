const {Given, When, Then} = require('cucumber');
const { Selector } = require('../support/selector');
// const Selector = require('testcafe').Selector;

Given('I am open Google\'s search page', async function() {
    await testController.navigateTo('https://google.com');
});

When('I am typing my search request {string} on Google', async function(text) {        
    await testController.typeText('input[name="q"]', text);
});


Then('I press the {string} key on Google', async function(text) {
    await testController.pressKey(text);
    await this.addScreenshotToReport();
});

Then('I should see that the first Google\'s result is {string}', async function(text) {
    var firstLink = Selector('#rso').find('a')    
    await testController.expect(firstLink.innerText).contains(text);
});



