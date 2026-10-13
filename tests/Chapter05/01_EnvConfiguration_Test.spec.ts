import { test, expect } from '@playwright/test';

test('Read .env configuration file', async ({ page }) => {
    await test.step('Navigate to the URL', async () => {
        await page.goto(`${process.env.GitHUb_URL}`)
    })

    await expect(page.getByRole('heading', { name: 'Sign in to GitHub' })).toBeVisible({ timeout: 1000 })
})