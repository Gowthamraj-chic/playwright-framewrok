import { test, expect } from '@playwright/test';

test('Handling Alert popup', async ({ page }) => {
    await test.step('Navigate to the URL', async () => {
        await page.goto('https://qa-pro-playground-dev.netlify.app/#alerts')
        await page.getByText('Alerts', { exact: true }).click()

        page.once('dialog', async(dialog) => {
            
            dialog.accept()
            console.log(`Alert Message : ${dialog.message()}`)
        })
        await page.getByRole('button', { name: 'Error Alert' }).click()
    })
})


test('Handling Confirmation popup', async ({ page }) => {
    await test.step('Navigate to the URL', async () => {
        await page.goto('https://qa-pro-playground-dev.netlify.app/#alerts')
        await page.getByText('Alerts', { exact: true }).click()

        page.once('dialog', async(dialog) => {
            
            dialog.dismiss()
            console.log(`Alert Message : ${dialog.message()}`)
        })
        await page.getByRole('button', { name: 'Error Alert' }).click()
    })
})

test('Handling Prompt popup', async ({ page }) => {
    await test.step('Navigate to the URL', async () => {
        await page.goto('https://qa-pro-playground-dev.netlify.app/#alerts')
        await page.getByText('Alerts', { exact: true }).click()

        page.once('dialog', async(dialog) => {

           console.log(`Alert Message : ${dialog.message()}`) 
           await dialog.accept('Testing')
            
        })
        await page.getByRole('button', { name: 'Error Alert' }).click()
    })
})