import { test, expect } from '@playwright/test';

test.describe('SmokeTest', () => {

    test('testacse 1', async ({ page }) => {
        console.log("Executing Testcase 1")
        await page.goto('https://jqueryui.com/datepicker/')

        const iframe = page.frameLocator('.demo-frame')
        await test.step('Hardcode Date', async () => {
            await iframe.locator('#datepicker').fill('12/15/2026')
        })

    })
})


test.describe('RegressionTesting', () => {



    test('testcase 2', async ({ page }) => {
        console.log("Executing Testcase 2")

        await page.goto('https://jqueryui.com/datepicker/')
        const iframe = page.frameLocator('.demo-frame')

        await test.step('Select Dynamic Date like Today', async () => {
            await iframe.locator('#datepicker').click()
            await iframe.locator('.ui-datepicker-today').click()
        })
    })

    test('testcase 3', async ({ page }) => {
        console.log("Executing Testcase 3")

        await page.goto('https://jqueryui.com/datepicker/')
        const iframe = page.frameLocator('.demo-frame')
        await test.step('Select Future or Past Date', async () => {
            await iframe.locator('#datepicker').click()
            await iframe.getByTitle('Prev').click()
            await iframe.locator('text="8"').click()
        })

    })
})

