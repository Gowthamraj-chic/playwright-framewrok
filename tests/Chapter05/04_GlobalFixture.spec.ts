//import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/Pages/LoginPage';
import { InvalidLoginPage } from '../../src/Pages/InvalidLoginPage'
import {test} from '../../src/fixtures/testFixtures'

test('POM Testcase', async ({ page }) => {
    console.log("Test Execution POM")

    const NavigateToLogin = new LoginPage(page)
    const InvalidLogin = new InvalidLoginPage(page)


    await test.step('Navigate to the Login Page', async () => {
        await NavigateToLogin.LoginPageNavigate()
        await NavigateToLogin.FillInvalidDetails("Testing", "WrongPassword");
    })


    await test.step('Invalid Login', async () => {
        await InvalidLogin.ValdiateURL(/Sign in to GitHub/, "Incorrect username or password.")
    })

})
