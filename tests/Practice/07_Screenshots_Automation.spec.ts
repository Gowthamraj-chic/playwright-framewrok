import { test, expect } from '@playwright/test';

test('Screenshot Testcase', async ({ page }) => {

    await test.step('Navigate to the GitHub URL', async () => {
        await page.goto('https://github.com/')
    })

    await test.step('Take a Element Screenshot', async () => {
        await page.getByTestId('Hero-grid').screenshot({ path: './Screenshots/ElementScreenshot.png' })
    })

    await test.step('Take a Page Screenshot', async () => {
        await page.screenshot({ path: './Screenshots/PageScreenshot.png' });
    })

    await test.step('Take a Full Page Screenshot', async () => {
        await page.screenshot({ path: './Screenshots/FullPageScreenshot.png', fullPage: true })
    })

    await page.close();

})
