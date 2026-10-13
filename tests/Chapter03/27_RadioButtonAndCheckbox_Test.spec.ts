import { test, expect } from '@playwright/test';

test('Checkbox and Radio Buttons', async ({ page }) => {
    await test.step('Navigate to the URL', async () => {
        await page.goto('https://jqueryui.com/checkboxradio/')
    })

    const iframe = await page.frameLocator('[class="demo-frame"]')

    await expect(iframe.locator('[for="radio-1"]')).not.toBeChecked()
    await iframe.locator('[for="radio-1"]').check()
    await expect(iframe.locator('[for="radio-1"]')).toBeChecked()

    await expect(iframe.locator('[name="checkbox-1"]')).not.toBeChecked();
      await iframe.locator('[name="checkbox-1"]').check()
      await expect(iframe.locator('[name="checkbox-1"]')).toBeChecked();

})