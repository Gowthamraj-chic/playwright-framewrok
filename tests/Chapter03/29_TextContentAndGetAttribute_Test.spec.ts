import { test, expect } from '@playwright/test';

test('Get Text and Attribute', async ({ page }) => {
    await test.step('Navigate to the URL', async () => {
        await page.goto('https://github.com/BakkappaN/PlaywrightTypeScriptTutorialFullCourse')
    })

    const Tabs = await page.locator('[class="d-inline-flex"] > a').first()
    const text = await Tabs.textContent()
    const final = text?.trim()
    console.log(`Console Output = ${final}`)

    // const Avalue = await page.locator('[class="d-inline-flex"] > a').first().getAttribute('title') .. we can use this as well
    const Avalue = await page.locator('[class="d-inline-flex"] > a').first()
    const value = await Avalue.getAttribute('href')
    console.log(value)
})