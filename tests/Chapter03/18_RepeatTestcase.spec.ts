import { test, expect } from '@playwright/test';

test('Date Picker Testcase', async ({ page }) => {
    await page.goto('https://jqueryui.com/datepicker/')

    const iframe = page.frameLocator('.demo-frame')
    await test.step('Hardcode Date', async () => {
        await iframe.locator('#datepicker').fill('12/15/2026')
    })
    await page.close()
})

//npx playwright test 18_RepeatTestcase.spec.ts --repeat-each=2