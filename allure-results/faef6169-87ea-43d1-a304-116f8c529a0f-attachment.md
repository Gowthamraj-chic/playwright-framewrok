# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Chapter05\03_POMLogin.spec.ts >> POM Testcase
- Location: tests\Chapter05\03_POMLogin.spec.ts:5:5

# Error details

```
Error: expect(locator).toBeEnabled() failed

Locator: getByRole('button', { name: 'Sign in' })
Expected: enabled
Error: strict mode violation: getByRole('button', { name: 'Sign in' }) resolved to 2 elements:
    1) <input type="submit" name="commit" value="Sign in" development="false" disable-emu-sso="false" data-signin-label="Sign in" data-disable-with="Signing in…" class="btn btn-primary btn-block js-sign-in-button" data-sso-label="Sign in with your identity provider"/> aka getByRole('button', { name: 'Sign in', exact: true })
    2) <button type="button" data-view-component="true" data-action="click:webauthn-subtle#prompt" class="Button--link Button--medium Button">…</button> aka getByRole('button', { name: 'Sign in with a passkey' })

Call log:
  - Expect "toBeEnabled" with timeout 5000ms
  - waiting for getByRole('button', { name: 'Sign in' })

```

# Page snapshot

```yaml
- generic [ref=f1e2]:
  - generic [ref=f1e3]:
    - link "Skip to content" [ref=f1e4] [cursor=pointer]:
      - /url: "#start-of-content"
    - banner [ref=f1e6]
  - main [ref=f1e9]:
    - generic [ref=f1e10]:
      - heading "Sign in to GitHub" [level=1] [ref=f1e20]
      - generic [ref=f1e21]:
        - generic [ref=f1e22]:
          - generic [ref=f1e23]:
            - generic [ref=f1e24]: Username or email address
            - textbox "Username or email address" [ref=f1e25]: Testing
          - generic [ref=f1e26]:
            - generic [ref=f1e27]: Password
            - textbox "Password" [active] [ref=f1e28]: WrongPassword
            - link "Forgot password?" [ref=f1e29] [cursor=pointer]:
              - /url: /password_reset
          - button "Sign in" [ref=f1e31] [cursor=pointer]
        - generic [ref=f1e32]:
          - generic [ref=f1e33]: or
          - button "Continue with Google" [ref=f1e36] [cursor=pointer]
          - button "Continue with Apple" [ref=f1e40] [cursor=pointer]
      - generic [ref=f1e43]:
        - paragraph [ref=f1e45]:
          - text: New to GitHub?
          - link "Create an account" [ref=f1e46] [cursor=pointer]:
            - /url: /signup?source=login
        - paragraph [ref=f1e48]:
          - button "Sign in with a passkey" [ref=f1e49] [cursor=pointer]
  - contentinfo [ref=f1e52]:
    - list [ref=f1e53]:
      - listitem [ref=f1e54]:
        - link "Terms" [ref=f1e55] [cursor=pointer]:
          - /url: https://docs.github.com/site-policy/github-terms/github-terms-of-service
      - listitem [ref=f1e56]:
        - link "Privacy" [ref=f1e57] [cursor=pointer]:
          - /url: https://docs.github.com/site-policy/privacy-policies/github-privacy-statement
      - listitem [ref=f1e58]:
        - link "Docs" [ref=f1e59] [cursor=pointer]:
          - /url: https://docs.github.com
      - listitem [ref=f1e60]:
        - link "Contact GitHub Support" [ref=f1e61] [cursor=pointer]:
          - /url: https://support.github.com
      - listitem [ref=f1e62]:
        - button "Manage cookies" [ref=f1e64] [cursor=pointer]
      - listitem [ref=f1e65]:
        - button "Do not share my personal information" [ref=f1e67] [cursor=pointer]
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
  25 |         await this.page.goto(`${process.env.GitHUb_HomeURL}`)
  26 |         await this.SignInButton.click()
  27 |     }
  28 | 
  29 |     async FillInvalidDetails(invalidUser: string, invalidPassword: string) {
  30 |         await this.UsernameTextbox.fill(invalidUser)
  31 |         await this.PasswordTextbox.fill(invalidPassword)
> 32 |         await expect(this.LoginSignInButton).toBeEnabled();
     |                                              ^ Error: expect(locator).toBeEnabled() failed
  33 |         await this.page.keyboard.press('Enter');
  34 |     }
  35 | 
  36 | 
  37 | 
  38 | }
```