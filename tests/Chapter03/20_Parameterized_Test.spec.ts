import { test, expect } from '@playwright/test';


//TYPE 1
const testData = ['User1', 'User2', 'User3']

for (const userName of testData) {
    test(`Parameterize Testcase 1 ${userName}`, { tag: '@SmokeTesting' }, async ({ page }) => {

        await test.step('Navigate to the URL', async () => {
            await page.goto('https://github.com/login')
        })

        await page.locator('#login_field').fill(userName);
        await page.locator('#password').fill('Testing@1012')
    })
}


//TYPE 2
const testData2 = [
    { userName2: 'Name1', password2: 'pass123' },
    { userName2: 'Name2', password2: 'pass456' }
]

for (const data of testData2) {



    test(`Parameterize Testcase 2 ${data.userName2} and ${data.password2}`, { tag: ['@Regression'] }, async ({ page }) => {

        await test.step('Navigate to the URL', async () => {
            await page.goto('https://github.com/login')
        })

        await page.locator('#login_field').fill(data.userName2);
        await page.locator('#password').fill(data.password2)
    })
}