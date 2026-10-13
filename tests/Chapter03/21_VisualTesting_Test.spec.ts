import { test, expect } from '@playwright/test';


test.beforeEach(async ({ page }) => {

    await page.goto('https://github.com/login')
})
//First time it will fail and create new folder under testcase name in leftside, then second time will pass by comparing that screenshot
test('Visual testing for Page', async ({ page }) => {
    await test.step('Navigate to the URL', async () => {

        await expect(page).toHaveScreenshot('GitHubLogin.png')
    })
})

test('Visual testing make Fail', async ({ page }) => {
    await test.step('Navigate to the URL', async () => {

        await expect(page).toHaveScreenshot('GitHubLoginText.png')

        await page.locator('#login_field').fill('Testing')

        await expect(page).toHaveScreenshot('GitHubLoginText.png')
    })


})

test('Visual Testing for Element', async ({ page }) => {



    const element = page.locator('//div[@data-test-selector="login-standard-view"]')

    await expect(element).toHaveScreenshot('GitHubLoginForm.png')
})