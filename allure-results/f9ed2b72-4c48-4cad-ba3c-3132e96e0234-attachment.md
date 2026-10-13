# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Chapter05\05_ManualBrowser.spec.ts >> Manual browser context
- Location: tests\Chapter05\05_ManualBrowser.spec.ts:3:5

# Error details

```
Error: browserType.launch: Unsupported firefox channel "chrome"
```

# Test source

```ts
  1  | import {test, expect, firefox} from '@playwright/test'
  2  | 
  3  | test('Manual browser context', async({})=>{
  4  | 
> 5  | const browser=await firefox.launch()
     |                             ^ Error: browserType.launch: Unsupported firefox channel "chrome"
  6  | const context=await browser.newContext()
  7  | const page=await context.newPage()
  8  | 
  9  | await test.step('Naviagte to the URL',async()=>{
  10 | 
  11 |     await page.goto("https://www.google.com")
  12 | })
  13 | 
  14 | })
```