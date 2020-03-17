/**
 * Sample automated test scenario for Nightwatch.js
 *
 * > it navigates to google.com and searches for nightwatch,
 *   verifying if the term 'The Night Watch' exists in the search results
 */

module.exports = {
  '@disabled': false,

  'demo test google' : function (client) {
    client
      .url('http://google.com')
      .waitForElementPresent('body', 1000);
  },

};