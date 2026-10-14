import {test, expect} from '@playwright/test'


test('Test title', async({page})=>{

    await test.step('Navigate to teh URL', async()=>{
        await page.goto('https://app.thetestingacademy.com/playwright/widgets/windows-tabs')

        const newWindowPromise=page.waitForEvent('popup')

        await page.getByRole('button', {name: 'Open popup window'}).click()

        const newWindow=await newWindowPromise;

        await newWindow.waitForLoadState('domcontentloaded')

       await expect(newWindow.getByTestId('close-btn')).toBeEnabled({timeout:1000})

    })
})