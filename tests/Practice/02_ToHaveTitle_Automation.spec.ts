import { test, expect } from '@playwright/test';

test('Search Keyword', async ({ page }) => {

    await test.step('Navigate to the URL', async () => {
        await page.goto('https://github.com/')
    })

    await test.step('Click on Sign in Button', async () => {
        await page.getByRole('link', { name: 'Sign in' }).click()
    })

    await test.step('Validate that the URL Contains GitHub', async () => {
        await expect(page).toHaveTitle('Sign in to GitHub · GitHub')
    })

    await page.close();
})