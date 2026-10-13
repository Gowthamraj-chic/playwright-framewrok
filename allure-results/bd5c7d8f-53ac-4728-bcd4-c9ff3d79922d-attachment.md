# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Chapter05\03_POMLogin.spec.ts >> POM Testcase
- Location: tests\Chapter05\03_POMLogin.spec.ts:5:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('link', { name: 'Sign in' }).first()

```

# Test source

```ts
  1  | import { expect, Locator, Page } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  | 
  5  |     readonly page: Page
  6  |     readonly SignInButton: Locator
  7  |     readonly UsernameTextbox: Locator
  8  |     readonly PasswordTextbox: Locator
  9  |     readonly LoginSignInButton:Locator
  10 | 
  11 |     constructor(page: Page) {
  12 | 
  13 |         this.page = page
  14 | 
  15 |         //Element
  16 |         this.SignInButton = page.getByRole('link', { name: 'Sign in' }).first()
  17 |         this.UsernameTextbox = page.getByRole('textbox', { name: 'Username or email address' })
  18 |         this.PasswordTextbox = page.getByRole('textbox', { name: 'Password' })
  19 |         this.LoginSignInButton=page.getByRole('button', {name : 'Sign in'})
  20 |     }
  21 | 
  22 |     //Methods which contains actions
  23 | 
  24 |     async LoginPageNavigate() {
  25 |         await this.page.goto(`${process.env.GitHUb_URL}`)
> 26 |         await this.SignInButton.click()
     |                                 ^ Error: locator.click: Target page, context or browser has been closed
  27 |     }
  28 | 
  29 |     async FillInvalidDetails(invalidUser: string, invalidPassword: string) {
  30 |         await this.UsernameTextbox.fill(invalidUser)
  31 |         await this.PasswordTextbox.fill(invalidPassword)
  32 |         await expect(this.LoginSignInButton).toBeEnabled();
  33 |         await this.page.keyboard.press('Enter');
  34 |     }
  35 | 
  36 | 
  37 | 
  38 | }
```