import { expect, Locator, Page } from '@playwright/test'

export class InvalidLoginPage {

    readonly page: Page;
    readonly SignInButton: Locator
    readonly errorMessage: Locator



    constructor(page: Page) {

        this.page = page
        this.SignInButton = page.getByRole('button', { name: 'Sign in' })
        this.errorMessage = page.getByRole('alert')


    }

    async ValdiateURL(title: RegExp, Message: string) {

        await expect.soft(this.page).toHaveURL('https://github.com/session')
        await expect.soft(this.page).toHaveURL(`${process.env.GitHUb_HomeURL}` + 'session')
        await expect.soft(this.page).toHaveURL(`${process.env.GitHUb_HomeURL}session`)
        await expect.soft(this.page).toHaveTitle(title)
        await expect.soft(this.errorMessage).toHaveText(Message)

    }

}