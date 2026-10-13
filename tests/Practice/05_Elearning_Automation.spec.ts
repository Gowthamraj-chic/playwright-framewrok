import { test, expect } from '@playwright/test';

test('Elearning Testcase', async ({ page }) => {


    await test.step('Navigate to the Elearning URL', async () => {
        await page.goto('https://applications.webomates.com/elearning/')
    })

    await test.step('Verify that the URL Contains text "webomates"', async () => {
        await expect(page).toHaveURL(/webomates/)
    })

    await test.step('Verify that the Page Header is equal to "E-Learning System"', async () => {
        await expect(page.getByText('E-Learning System')).toHaveText('E-Learning System')
    })

    await test.step('Verify that the Page title is equal to "Login Screen"', async () => {
        await expect(page.getByText('Login Screen').first()).toHaveText('Login Screen')
    })

    await test.step('Verify taht the Username textfield is empty', async () => {
        await expect(page.getByRole('textbox', { name: 'User ID' })).toHaveValue('')
    })

    await test.step('Enter into Username textfield as "vendor@gmail.com"', async () => {
        await page.getByPlaceholder('User ID').fill('vendor@gmail.com')
    })

    await test.step('Enter into password textfield as "vendor"', async () => {
        await page.getByRole('textbox', { name: 'Password' }).fill('vendor')
    })

    await test.step('Select Role Type as "Vendor"', async () => {
        await page.getByRole('combobox').selectOption({label : 'Vendor'})
    })

    await test.step('Verify that the Not Registered link is enabled', async () => {
        await expect(page.getByText('Not registered')).toBeEnabled
    })

    await test.step('Click on Login Button', async () => {
        await page.getByRole('button', { name: 'Log In' }).click()
    })

    await test.step('Verify that the URL Contains text "profile"', async () => {
        await expect(page).toHaveURL(/profile/)
    })

    await test.step('Verify that the User Profile section is visible', async () => {
        await expect(page.getByText('User Profile')).toBeVisible
    })

    await page.close();
})