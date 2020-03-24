const { Selector } = require('testcafe');

function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}

exports.Selector = select