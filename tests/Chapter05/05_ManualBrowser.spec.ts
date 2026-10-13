import {test, expect, webkit} from '@playwright/test'

test('Manual browser context', async({})=>{

const browser=await webkit.launch()
const context=await browser.newContext()
const page=await context.newPage()

await test.step('Naviagte to the URL',async()=>{

    await page.goto("https://www.google.com")
    await page.locator('#id').setInputFiles('C:/Users/Gowtham/Downloads/Playwright notes (2).pdf')
    await expect(page.getByText('Submit')).toBeEnabled({timeout:300})

})

await page.keyboard.press('Enter')

const title=await page.title()
console.log(title)
  await expect(title).toBe('Google')
})