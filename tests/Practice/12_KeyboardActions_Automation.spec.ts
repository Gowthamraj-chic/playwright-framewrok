import { test, expect } from '@playwright/test';

test('Keyboard Actions Testcase', async ({ page }) => {
    await test.step('Navigate to the GitHub URL', async () => {
        await page.goto('https://github.com/login')
    })

    await test.step('Enter "Testing" into Username textbox', async () => {
        await page.getByRole('textbox', { name: 'Username or email address' }).click()
        await page.keyboard.down('ShiftLeft')
        //fill() directly sets the value of the input. It doesn't press individual keyboard keys.
        //  await page.getByRole('textbox', { name: 'Username or email address' }).fill('Testing')
        await page.keyboard.press('KeyT');
        await page.keyboard.press('KeyE');
        await page.keyboard.up('ShiftLeft')
        await page.keyboard.press('KeyS');
        await page.keyboard.press('KeyT')
        await page.screenshot({path:'./Screenshots/KeyPress.png'})
     
    })

    await test.step('Press Tab Key', async () => {
        await page.keyboard.press('Tab')
    })

    await test.step('Enter "Testing@1012" into password textbox', async () => {
        await page.getByRole('textbox', { name: 'Password' }).fill('Test@1012')
    })

    //user backtick "` `" symbol to print stored varibable value
    const userName = await page.getByRole('textbox', { name: 'Username or email address' }).inputValue()
    console.log(`User name value from ${userName}`)
    expect(userName).toBe('TEst');

    await test.step('Press Enter Key', async () => {
        await page.keyboard.press('Enter')
    })

    await test.step('Verify that the Error message is displayed', async () => {
        await expect(page.getByRole('alert')).toBeVisible()
    })
    await test.step('Select the texbox and Clear the text', async () => {
        await page.getByRole('textbox', { name: 'Username or email address' }).click()
        await page.getByRole('textbox', { name: 'Username or email address' }).press('Control+A')
        await page.keyboard.press('Delete')
        await page.keyboard.press('Tab')
        await page.keyboard.press('Control+A')
        await page.keyboard.press('Delete')
    })

})