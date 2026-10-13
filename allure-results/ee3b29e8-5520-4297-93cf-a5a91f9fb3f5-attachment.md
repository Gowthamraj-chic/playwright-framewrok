# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Chapter05\06_MultipleTabWindows.spec.js >> Handle New Tab
- Location: tests\Chapter05\06_MultipleTabWindows.spec.js:3:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /tab=3/
Received string:  "https://app.thetestingacademy.com/playwright/widgets/tab-popup?tab=1"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × locator resolved to <html lang="en">…</html>
       - unexpected value "https://app.thetestingacademy.com/playwright/widgets/tab-popup?tab=1"

```

```yaml
- text: Popup target
- heading "Hello from the popup tab" [level=1]
- paragraph:
  - text: You reached this page via
  - code: window.open()
  - text: or
  - code: target="_blank"
  - text: . The opener is at
  - code: https://app.thetestingacademy.com/playwright/widgets/windows-tabs
  - text: .
- paragraph:
  - text: Title here is
  - code: document.title
  - text: =
  - strong: Popup target — The Testing Academy
  - text: .
- button "Close this popup"
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | 
  3  | test('Handle New Tab', async({page, context})=>{
  4  | 
  5  | 
  6  |     await test.step('Navigate to the URL',async()=>{
  7  |         await page.goto('https://app.thetestingacademy.com/playwright/widgets/windows-tabs')
  8  |     })
  9  | 
  10 |     const newTabPromise=context.waitForEvent('page')
  11 | 
  12 |     await test.step('CLick on Button',async()=>{
  13 |         await page.getByRole('button', {name:'Open 3 new tabs'}).click()
  14 |     })
  15 | 
  16 |     const newTab=await newTabPromise
  17 | 
  18 |     await test.step('verify that the Close Popupbutton enabled',async()=>{
  19 |         await expect(newTab.getByTestId('close-btn')).toBeEnabled()
> 20 |         await expect(newTab).toHaveURL(/tab=3/)
     |                              ^ Error: expect(page).toHaveURL(expected) failed
  21 |     })
  22 | 
  23 |     await expect(page.getByRole('button', {name:'Open 3 new tabs'})).toBeEnabled
  24 | })
```