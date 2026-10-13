import {test, expect} from '@playwright/test'

import testData from '../../test-data/qa/Credentials.json'

type TypedData={
    username: string,
    password: string
}[]

const Credential=testData as TypedData

for (const key in Credential) {
    
   const ValidCredentials = Credential[key as unknown as number]

     test(`Data Driven testing ${ValidCredentials.username} and ${ValidCredentials.password}`, async ({ page }) => {

        await test.step('Navigate to the URL', async () => {
            await page.goto('https://github.com/login')
        })

        await test.step('Enter valid  Username and Password Textfield', async () => {
            await page.getByRole('textbox', { name: 'Username or email address' }).fill(ValidCredentials.username)
            await page.getByRole('textbox', { name: 'Password' }).fill(ValidCredentials.password)
            await page.keyboard.press('Enter')
        })

        await test.step('Verify the Error Message', async () => {
            await expect(page.getByRole('alert')).toBeVisible()
        })
    })
}