# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Chapter05\08_APITesting.spec.ts >> GET API TESTING
- Location: tests\Chapter05\08_APITesting.spec.ts:5:5

# Error details

```
SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test'
  2  | // import { request } from 'node:http'
  3  | 
  4  | 
  5  | test('GET API TESTING', async({request})=>{
  6  | 
  7  |     const response=await request.get('https://automationexercise.com/api/productsList')
  8  | 
  9  |     expect(response.status()).toBe(200)
  10 | 
> 11 |     const body=await response.json()
     |                ^ SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
  12 | 
  13 |     expect(body.id).toBe(1)
  14 |     expect(body.name).toBe('Blue Top')
  15 | })
```