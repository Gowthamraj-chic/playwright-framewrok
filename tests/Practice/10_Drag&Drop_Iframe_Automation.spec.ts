import {test, expect, Locator} from '@playwright/test';

test('Drag&Drop in Ifram testcase', async({page})=>{

    await test.step('Navigate to the URL', async()=>{
        await page.goto('https://jqueryui.com/droppable/')
    })
    
    let dragElement! : Locator
    let dropElement! : Locator

    const iframe=page.frameLocator('.demo-frame')

    
    await test.step('Drag and Drop Element assign', async()=>{

        dragElement=iframe.locator('#draggable')
        dropElement=iframe.locator('#droppable')
    })

    await dragElement.dragTo(dropElement);

})