// // //Timout in playwright

// // Test Timeout
// 1.All Test timeout >> defineConfig{
//     timeout : 1*60*1000
// }
// 2.Test Level >> test.setTimeout(1*60*1000)
// // Assert Timeout
// // Action Timeout
// // All Test Execution Timeout

import {test, expect} from '@playwright/test';

test('Test Timemot testcase', async({page})=>{
//1.Test Timeout >> Test Level
test.setTimeout(1*60*1000)

    await test.step('Navigate to the URL', async()=>{
        await page.goto('https://github.com/login')
})
 //2.Assert Timout
//   1. Global Level Assertion
//  defineConfig{expect : {timeout : 10000}}

//   2.Test Level Assert Timeout
await test.step('Verify that the Header is visible', async()=>{
    await expect(page.locator('//h1[text()="Sign in to GitHub"]')).toBeVisible({timeout:1000})
})
// 3.Action Timeout
//    1.Global Level
//    under Use{
// actionTimeout : 1000,
// }
//     2.testcase Level Action Timeout
await test.step('Click on sign in button', async()=>{
    await page.getByRole('button', {name : 'Sign in'}).click({timeout:10000})
})

// All Execution Timeout
// Under defineConfig{globalTimeout : 60*60*1000}

})
