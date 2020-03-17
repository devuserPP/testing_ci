import {Selector} from 'testcafe';

fixture('testcafe demo')
    .page('https://www.google.com')

test('demo test google', async t => {
    await t
        .typeText('input[name="q"]', 'testcafe')
        .click('input[name="btnK"]')
        .expect(Selector('#rso', t).innerText).contains('TestCafe')
});


