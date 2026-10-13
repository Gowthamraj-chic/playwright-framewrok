import { test, expect } from '@playwright/test';
test('Hard Assertions Testcase', async ({ page }) => {
    await test.step('Navigate to the GitHub URL', async () => {
        await page.goto('https://github.com/')
    })


    await test.step('Hard Assertions', async () => {
        await expect(page.getByLabel('Homepage').first()).toBeVisible();
        await expect(page.getByRole('link',{name : 'Sign in'}).first()).toBeEnabled();
        await expect(page.getByText('Sign in')).toHaveCount(3);
        await page.getByRole('link',{name : 'Sign in'}).first().click();
        await expect(page).toHaveURL('https://github.com/login')
        await expect(page).toHaveTitle(/Sign in to GitHub/);
        await expect.soft(page.getByRole('heading')).toHaveText(/Sign in/)
        await expect(page.locator('#login_field')).toBeEmpty()
        await expect(page.locator('#login_field')).toBeEditable()
    })

    await page.close();
})