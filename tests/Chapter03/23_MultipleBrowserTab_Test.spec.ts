import { test, expect } from '@playwright/test';

test('Multiple Browser and Tab Testcase', async ({ page, browser }) => {

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

// // Create New Tab in Original Session
//     const context=await browser.newContext()
//     const newTab=await page.context().newPage()

//         await test.step('Navigate to the URL', async () => {
//         await newTab.goto('https://github.com/login')
//     })

//     await test.step('Enter username and Password', async () => {
//         await newTab.getByRole('textbox', { name: 'Username or email address' }).fill('Testing')
//         await newTab.getByRole('textbox', { name: 'Password' }).fill('Login@1012')
//         await newTab.keyboard.press('Enter')
//     })

//     await test.step('Verify that the alert message is visible', async () => {
//         await expect(newTab.getByRole('alert')).toBeVisible({ timeout: 10000 })
//     })

// Create New Browser Session
    const context = await browser.newContext()
    const page2 = await context.newPage()



    await test.step('Navigate to the URL', async () => {
        await page2.goto('https://github.com/login')
    })

    await test.step('Enter username and Password', async () => {
        await page2.getByRole('textbox', { name: 'Username or email address' }).fill('Testing')
        await page2.getByRole('textbox', { name: 'Password' }).fill('Login@1012')
        await page2.keyboard.press('Enter')
    })

    await test.step('Verify that the alert message is visible', async () => {
        await expect(page2.getByRole('alert')).toBeVisible({ timeout: 10000 })
    })

//    Create New Tab
    const newTab = await context.newPage()

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
})

