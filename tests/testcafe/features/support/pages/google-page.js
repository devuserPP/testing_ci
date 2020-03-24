const {Selector} = require('testcafe');

// Selectors

function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}

exports.google = {
    url: function() {
        return 'https://google.com/';
    },
    searchBox: function() {
        return select('input[name="q"]');
    },
    
};
