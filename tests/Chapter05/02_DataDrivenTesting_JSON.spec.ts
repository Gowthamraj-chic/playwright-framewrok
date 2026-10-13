import { test, expect } from '@playwright/test'

import testData from '../../test-data/qa/testdata.json'

type Credential = {
    Data1: {
        username: string,
        password: string
    },
    Data2: {
        username: string,
        password: string
    }
}

const typedData = testData as Credential

for (const ValidCredentials in typedData) {
    const details = typedData[ValidCredentials as keyof Credential]
    test(`Data Driven testing ${details.username} and ${details.password}`, async ({ page }) => {

        await test.step('Navigate to the URL', async () => {
            await page.goto('https://github.com/login')
        })

        await test.step('Enter valid  Username and Password Textfield', async () => {
            await page.getByRole('textbox', { name: 'Username or email address' }).fill(details.username)
            await page.getByRole('textbox', { name: 'Password' }).fill(details.password)
            await page.keyboard.press('Enter')
        })

        await test.step('Verify the Error Message', async () => {
            await expect(page.getByRole('alert')).toBeVisible()
        })
    })
}

