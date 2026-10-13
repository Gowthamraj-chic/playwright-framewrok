import { test, expect } from '@playwright/test';

test('For of Loop Handling', async ({ page }) => {
    await test.step('Navigate to the URL', async () => {
        await page.goto('https://github.com/BakkappaN/PlaywrightTypeScriptTutorialFullCourse')
    })
    //Instead of locator we have to use "$$" which will return arrays
    const Tabs = await page.$$('[class="d-inline-flex"] > a')
    //For of loop
    for (const GitHubTabs of Tabs) {
        await test.step(`Playwright 1st for loop : ${GitHubTabs}`, async () => {

            const text = await GitHubTabs.innerText()
            console.log(`Console Output = ${text}`)
        })
    }
})

test('For Loop Handling', async ({ page }) => {

    await test.step('Navigate to the URL', async () => {
        await page.goto('https://github.com/BakkappaN/PlaywrightTypeScriptTutorialFullCourse')
    })

    const Tabs = await page.$$('[class="d-inline-flex"] > a')
    //For Loop
    for (let index = 0; index < Tabs.length; index++) {
        //const Text2=await Tabs[index].innerText() -- we can use this as well.
        const element = Tabs[index];
        const Text2 = await element.innerText()
        console.log(`Console out for For Loop = ${Text2}`)

    }
})

test('For nth Loop', async ({ page }) => {
    await test.step('Navigate to the URL', async () => {
        await page.goto('https://github.com/BakkappaN/PlaywrightTypeScriptTutorialFullCourse')
    })

    const NewTabs = await page.locator('[class="d-inline-flex"] > a')
    const count = await NewTabs.count()
    for (let index = 0; index < count; index++) {
        const Text3 = await NewTabs.nth(index).innerText()
        console.log(`Console output for Nth Loop = ${Text3}`)

    }
})