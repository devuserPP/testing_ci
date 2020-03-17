import {Selector} from 'testcafe';

fixture('testcafe demo')
    .page('https.//www.google.com')

Text('demo test google', async t => {
    await t
        .typeText('input[name="q"]', 'testcafe')
        .click('input[name="btnk]"')
        .expect(Selector('div.elip').innerText).contains('TestCafe')
});