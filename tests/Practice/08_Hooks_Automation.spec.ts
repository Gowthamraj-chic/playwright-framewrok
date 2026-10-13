import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
    console.log('Running Before All testcase')
})

test.beforeEach(async ({page}) => {
    await page.goto('https://github.com/')
    console.log('Running Before Each testcase')
})

test.afterEach(async () => {
    console.log('Running After Each Testcase')
})

test.afterAll(async () => {
    console.log('Running After All Testcase')
})

test('Hook Testcase 1', async ({ page }) => {

    console.log('Running 1st Testcase')
    await test.step('Navigate to the Github URL', async () => {
    //    await page.goto('https://github.com/');
    })


    await test.step('Click on Sign in Button', async () => {
        await page.getByRole('link', { name: 'Sign in' }).click();
    })

    await test.step('Click on username textfield', async () => {
        await page.getByRole('textbox', { name: 'Username or email address' }).click();
    })

    await test.step('Enter into Username testfield as Webomates', async () => {
        await page.getByRole('textbox', { name: 'Username or email address' }).fill('Webomates');
    })

    await test.step('Click on Password testfield', async () => {
        await page.getByRole('textbox', { name: 'Password' }).click();
    })

    await test.step("Enter into password textfield as Testing@1012", async () => {
        await page.getByRole('textbox', { name: 'Password' }).fill('Testing@1012');
    })

    await test.step('Click on Sign In button', async () => {
        await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    })

    await test.step('Verify the the Error Message contains text as Incorrect username or password.', async () => {
        await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
    })

})

test('Hook Testcase 2', async ({ page }) => {
    console.log('Running 2nd testcase')
    await test.step('Navigate to the Github URL', async () => {
     //   await page.goto('https://github.com/');
    })


    await test.step('Click on Sign in Button', async () => {
        await page.getByRole('link', { name: 'Sign in' }).click();
    })

    await test.step('Click on username textfield', async () => {
        await page.getByRole('textbox', { name: 'Username or email address' }).click();
    })

    await test.step('Enter into Username testfield as Webomates', async () => {
        await page.getByRole('textbox', { name: 'Username or email address' }).fill('Webomates');
    })

    await test.step('Click on Password testfield', async () => {
        await page.getByRole('textbox', { name: 'Password' }).click();
    })

    await test.step("Enter into password textfield as Testing@1012", async () => {
        await page.getByRole('textbox', { name: 'Password' }).fill('Testing@1012');
    })

    await test.step('Click on Sign In button', async () => {
        await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    })

    await test.step('Verify the the Error Message contains text as Incorrect username or password.', async () => {
        await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
    })

    await page.close();

})