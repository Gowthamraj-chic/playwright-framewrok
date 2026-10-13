import { test, expect } from '@playwright/test';

test('GitHub', async ({ page }) => {

    await test.step('Navigate to the URL', async () => {
        await page.goto('https://github.com/')
    })

    await test.step('Click on Sign In Button', async () => {
        await page.getByRole('link', { name: 'Sign in' }).click()
    })

    await test.step('Verify that the URL Title Contains GitHub', async () => {
        await expect(page).toHaveTitle(/Sign in to GitHub/)
    })
    await test.step('Enter into username as Testing', async () => {
        await page.getByRole('textbox', { name: 'Username or email address' }).fill('Testing')
    })

    await test.step('Enter into password as Testing@123', async () => {
        await page.getByRole('textbox', { name: 'Password' }).fill('Testing@1012')
    })

    await test.step('Press Enter Key', async () => {
        await page.getByRole('textbox', { name: 'Password' }).press('Enter')
    })

    await test.step('Verify the incorrect error message', async () => {
        await expect(page.getByText('Incorrect username or')).toHaveText('Incorrect username or password.')
    })

    await page.close()
})