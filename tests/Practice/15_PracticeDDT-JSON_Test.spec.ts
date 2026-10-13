import {test, expect} from '@playwright/test';


import testData from '../../test-data/qa/testdata.json'


type Datatype ={
    Data1: {
        username: string,
        password: string
    },
    Data2: {
        username: string,
        password: string
    }
}

const combined=testData as Datatype

for(const Key in combined){
    const Credential=combined[Key as keyof Datatype]
    test(`Data Driven testing ${Credential.username} and ${Credential.password}`, async ({ page }) => {

        await test.step('Navigate to the URL', async () => {
            await page.goto('https://github.com/login')
        })

        await test.step('Enter valid  Username and Password Textfield', async () => {
            await page.getByRole('textbox', { name: 'Username or email address' }).fill(Credential.username)
            await page.getByRole('textbox', { name: 'Password' }).fill(Credential.password)
            await page.keyboard.press('Enter')
        })

        await test.step('Verify the Error Message', async () => {
            await expect(page.getByRole('alert')).toBeVisible()
        })
    })
}