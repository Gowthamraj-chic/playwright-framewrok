import { test, expect } from '@playwright/test';

test('Codegen Testcase', async ({ page }) => {

    await test.step('Navigate to the OrangeHRM login page', async () => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    })

    await test.step('Verify that the OrangeHRM Logo is visible', async () => {
        await expect(page.getByRole('img', { name: 'company-branding' })).toBeVisible();
    })

    await test.step('Verify that the Page Title Conations Text as Login', async () => {
        await expect(page.getByRole('heading')).toContainText('Login');
    })

    await test.step('Enter into Username as Admin', async () => {
        await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    })


    await test.step('Enter into password as admin123', async () => {
        await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    })

    await test.step('Verify that the Forgot your password link is enabled', async () => {
        await expect(page.getByText('Forgot your password?')).toBeEnabled();
    })

    await test.step('Click on Login button', async () => {
        await page.getByRole('button', { name: 'Login' }).click();
    })

    await test.step('Verify that the Dashboard is visible', async () => {
        await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    })

    await page.close();
});