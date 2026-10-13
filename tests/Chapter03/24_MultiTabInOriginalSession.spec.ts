import { test, expect } from '@playwright/test';

test('Multiple Tab Testcase', async ({ page }) => {

    await test.step('Navigate to the URL', async () => {
        await page.goto('https://github.com/login')
    })

    await test.step('Enter username and Password', async () => {
        await page.getByRole('textbox', { name: 'Username or email address' }).fill('Testing')
        await page.getByRole('textbox', { name: 'Password' }).fill('Login@1012')
        await page.keyboard.press('Enter')
    })

    await test.step('Verify that the alert message is visible', async () => {
        await expect(page.getByRole('alert')).toBeVisible({ timeout: 10000 })
    })
    //create 2nd Tab
    const newTab = await page.context().newPage()

    await test.step('Navigate to the URL', async () => {
        await newTab.goto('https://github.com/login')
    })

    await test.step('Enter username and Password', async () => {
        await newTab.getByRole('textbox', { name: 'Username or email address' }).fill('Testing')
        await newTab.getByRole('textbox', { name: 'Password' }).fill('Login@1012')
        await newTab.keyboard.press('Enter')
    })

    await test.step('Verify that the alert message is visible', async () => {
        await expect(newTab.getByRole('alert')).toBeVisible({ timeout: 10000 })
    })
    //Create 3rd Tab

    const newTab1 = await page.context().newPage()

    await test.step('Navigate to the URL', async () => {
        await newTab1.goto('https://github.com/login')
    })

    await test.step('Enter username and Password', async () => {
        await newTab1.getByRole('textbox', { name: 'Username or email address' }).fill('Testing')
        await newTab1.getByRole('textbox', { name: 'Password' }).fill('Login@1012')
        await newTab1.keyboard.press('Enter')
    })

    await test.step('Verify that the alert message is visible', async () => {
        await expect(newTab1.getByRole('alert')).toBeVisible({ timeout: 10000 })
    })
})