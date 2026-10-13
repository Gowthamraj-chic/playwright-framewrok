import { test, expect } from '@playwright/test';

test.skip('Testcase 1', async ({ page }) => {
    await page.goto('https://jqueryui.com/datepicker/')

    const iframe = page.frameLocator('.demo-frame')
    await test.step('Hardcode Date', async () => {
        await iframe.locator('#datepicker').fill('12/15/2026')
    })


    await test.step('Select Dynamic Date like Today', async () => {
        await iframe.locator('#datepicker').click()
        await iframe.locator('.ui-datepicker-today').click()
    })
})

test.only('Testcase 2', async ({ page }) => {
    console.log("Executing Testcase 2")
    await page.goto('https://jqueryui.com/datepicker/')

    const iframe = page.frameLocator('.demo-frame')
    await test.step('Select Future or Past Date', async () => {
        await iframe.locator('#datepicker').click()
        await iframe.getByTitle('Prev').click()
        await iframe.locator('text="8"').click()
    })
})