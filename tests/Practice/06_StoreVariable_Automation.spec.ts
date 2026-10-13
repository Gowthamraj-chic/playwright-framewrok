import { test, expect } from '@playwright/test';

test('Store Variable Testcase', async ({ page }) => {



    await test.step('Navigate to the Practice URL', async () => {
        await page.goto('https://www.qapractice.com/practice-different-ui-elements?utm_source=chatgpt.com')
    })

    await test.step('Verify taht the Page Heading is equal to "UI Element Automation Practice"', async () => {
        await expect(page.getByText('UI Element Automation Practice')).toHaveText('UI Element Automation Practice')
    })

    await test.step('Verify that the Description contains text as "inputs, buttons, checkboxes, radios, dropdowns, sliders, tables, modals, and more"', async () => {
        await expect(page.getByRole('paragraph').first()).toContainText('inputs, buttons, checkboxes, radios, dropdowns, sliders, tables, modals, and more')
    })

    await test.step('Enter into Textfield as "Gowtham"', async () => {
        await page.getByTestId('ui-text-field').fill('Gowtham')
    })
    let userName: string;
    await test.step('Store the Textbox value in a varibale as userName', async () => {
        userName = await page.getByTestId('ui-text-field').inputValue()
        console.log(userName)

    })

    await test.step('Verify that the Output value is equals to ${userName}', async () => {
        await expect(page.locator('.output-box').first()).toHaveText(userName)
    })

    await test.step('Click on click me button 3 times', async () => {
        await page.getByRole('button', { name: 'Click Me' }).click()
        await page.getByRole('button', { name: 'Click Me' }).click()
        await page.getByRole('button', { name: 'Click Me' }).click()
    })
    await test.step('Verify that the Click Me output value is equal to Clicked 3 times', async () => {
        await expect(page.locator('//button[@id="ui-click-button"]//parent::div/..//following-sibling::div//div')).toHaveText('Clicked 3 times')
    })

    await test.step('Click on Checkbox Option 1 and Option 3', async () => {
        await page.getByTestId('ui-checkbox-option1').check()
        await page.getByTestId('ui-checkbox-option3').check()
    })

    await test.step('Verify that the Checkboxes Multiple checked Option 1 and Option 3', async () => {
        await expect(page.getByTestId('ui-checkbox-option1')).toBeChecked()
        await expect(page.getByTestId('ui-checkbox-option3')).toBeChecked()
    })

    await test.step('Verify that the Checked output contains text Option1 and Option 3', async () => {
        await expect(page.locator('//div[contains(text(), "Checked: ")]')).toContainText('option1, option3')
    })

    await test.step('Click on Radio 1 option under Radio Buttons', async () => {
        await page.getByTestId('ui-radio-Radio 1').click()
    })

    await test.step('Verify that the Radio 1 button is checked', async () => {
        await expect(page.getByTestId('ui-radio-Radio 1')).toBeChecked()
    })

    await test.step('Select Single Dropdown option as "Canada"', async () => {
        await page.getByRole('combobox', { name: 'Dropdown (Single Select):' }).selectOption('Canada')
    })

    let singleDropdown: string
    await test.step('Store the Single Dropdown value in a varibale as "${singleDropdown}"', async () => {
        singleDropdown = await page.getByRole('combobox', { name: 'Dropdown (Single Select):' }).inputValue()

        console.log(singleDropdown)
    })

    await test.step('Verify that the Single Dropdown output value is equal to "${singleDropdown}"', async () => {
        await expect(page.locator('//select[@data-testid="ui-single-dropdown"]//parent::div/..//following-sibling::div//div')).toHaveText(singleDropdown)
    })

    await test.step('Select Dropdown (Multi-Select) options are Option Option A and Option D', async () => {

       // await page.keyboard.down('Control')
        await page.getByTestId('ui-multi-dropdown').selectOption(['Option A', 'Option D'])
       // await page.keyboard.up('Control')
    })
    //await page.waitForTimeout(5000);
   // await page.close()
})