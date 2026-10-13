import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {

    readonly page: Page
    readonly SignInButton: Locator
    readonly UsernameTextbox: Locator
    readonly PasswordTextbox: Locator
    readonly LoginSignInButton:Locator

    constructor(page: Page) {

        this.page = page

        //Element
        this.SignInButton = page.getByRole('link', { name: 'Sign in' }).first()
        this.UsernameTextbox = page.getByRole('textbox', { name: 'Username or email address' })
        this.PasswordTextbox = page.getByRole('textbox', { name: 'Password' })
        this.LoginSignInButton=page.getByRole('button', {name : 'Sign in'})
    }

    //Methods which contains actions

    async LoginPageNavigate() {
        await this.page.goto(`${process.env.GitHUb_HomeURL}`)
        await this.SignInButton.click()
    }

    async FillInvalidDetails(invalidUser: string, invalidPassword: string) {
        await this.UsernameTextbox.fill(invalidUser)
        await this.PasswordTextbox.fill(invalidPassword)
        await expect(this.LoginSignInButton.first()).toBeEnabled();
        await this.page.keyboard.press('Enter');
    }



}