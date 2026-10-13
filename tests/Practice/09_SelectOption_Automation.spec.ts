import { test, expect } from '@playwright/test';

test('SelectOption Testcase', async ({ page }) => {

    await test.step('Navigate to the Facebook URL', async () => {
        await page.goto('https://www.facebook.com/')
    })

    await test.step('Click on Create New Account', async () => {
        await page.getByRole('link', { name: 'Create new account' }).click();
    })

    await test.step('Select day 10 from the Day dropdown', async () => {
        await page.getByLabel('Select day').first().click()
        await page.getByText('3', { exact: true }).first().click()
    })

    await test.step('Select March Option form the Month Dropdown', async () => {
        await page.getByLabel('Select month').click()
        await page.getByText('March').click()
    })

    await test.step('Select 2000 from Year Dropdown', async () => {
        await page.getByLabel('Select year').click();
        await page.getByText('2000', { exact: true }).click()
    })


    await test.step('Verify that the Day Dropdown value is equal to 10', async () => {
        await expect(page.getByLabel('Select day')).toHaveText(/3/)
    })

    await test.step('Verify that the Month Dropdown value is equal to March', async () => {
        await expect(page.getByLabel('Select month')).toHaveText(/March/)
    })

    await test.step('Verify that the list of Month Dropdown option is equal to expected Options', async () => {
        await page.getByLabel('Select month').click()
        await expect(page.locator('div[aria-label="Select month"] > div [role="option"]')).toHaveText(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
        ])
    })

    await test.step('Verify that the Year Dropdown value is equal to 2000', async () => {
        await expect(page.getByLabel('Select year')).toContainText('2000')
        //await expect(page.getByLabel('Select year')).toHaveText(/2000/) -- we can use both
    })
})