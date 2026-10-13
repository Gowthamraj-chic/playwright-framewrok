import { test, expect } from '@playwright/test';

test('Mouse actions Testcase', async ({ page }) => {
    await test.step('Navigate to the URL', async () => {
        await page.goto('https://github.com/login')
    })

    await test.step('Left Click action', async () => {
        await page.getByRole('button', { name: 'Sign in' }).click({ button: 'left' })
    })

    await test.step('Right clik action', async () => {
        await page.getByRole('button', { name: 'Sign in' }).first().click({ button: 'right' })
    })

    await test.step('Middle clik action', async () => {
        await page.getByRole('link', { name: 'Forgot password?' }).click({ button: 'middle' })
    })

    await test.step('Double Click action', async () => {
        await page.getByRole('button', { name: 'Sign in' }).first().dblclick();
    })
    await test.step('Hover action', async () => {
        await page.getByRole('link', { name: 'Create an account' }).hover()
    })


})