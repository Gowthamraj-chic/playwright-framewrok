import { test, expect } from '@playwright/test';

test('Auto Retry Testcase', { tag: ['@Smoke'] }, async ({ page }) => {

    await test.step('Navigate to the URL', async () => {
        await page.goto('https://github.com/login')
    })

    await test.step('Intentional Fail', async () => {
        await expect(page.getByRole('button', { name: 'Sign in' })).toHaveText('Sign')
    })

})

//playwright.config.ts >> under DefineConfig{    retries: process.env.CI ? 2 : 0} -- replace zero with number