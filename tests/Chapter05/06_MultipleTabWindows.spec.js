import {test,expect} from '@playwright/test';

test('Handle New Tab', async({page, context})=>{


    await test.step('Navigate to the URL',async()=>{
        await page.goto('https://app.thetestingacademy.com/playwright/widgets/windows-tabs')
    })

    const newTabPromise=context.waitForEvent('page')

    await test.step('CLick on Button',async()=>{
        await page.getByRole('button', {name:'Open 3 new tabs'}).click()
    })

    const newTab=await newTabPromise

    await test.step('verify that the Close Popupbutton enabled',async()=>{
        await expect(newTab.getByTestId('close-btn')).toBeEnabled()
    })

    await expect(page.getByRole('button', {name:'Open 3 new tabs'})).toBeEnabled
})