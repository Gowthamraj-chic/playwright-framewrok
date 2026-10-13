import { test, expect } from '@playwright/test';

test('Date Picker Testcase', async ({ page }) => {
    await page.goto('https://jqueryui.com/datepicker/')

    const iframe = page.frameLocator('.demo-frame')
    await test.step('Hardcode Date', async () => {
        await iframe.locator('#datepicker').fill('12/15/2026')
    })


    await test.step('Select Dynamic Date like Today', async () => {
        await iframe.locator('#datepicker').click()
        await iframe.locator('.ui-datepicker-today').click()
    })


    await test.step('Select Future or Past Date', async () => {
        await iframe.locator('#datepicker').click()
        await iframe.getByTitle('Prev').click()
        await iframe.locator('text="8"').click()
    })
})