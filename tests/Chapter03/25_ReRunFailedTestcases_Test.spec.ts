import { test, expect } from '@playwright/test';

test('Testcase1', async ({ page }) => {

    await test.step('Navigate to the URL', async () => {
        await page.goto('https://github.com/login')
    })
})

test('Testcase2', async ({ page }) => {

     expect(true).toBe(false)
 
})

test('Testcase3', async ({ page }) => {

  expect(true).toBe(false)
})

// npx playwright test --last-failed