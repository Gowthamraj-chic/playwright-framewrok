import {test as base}  from '@playwright/test'


export const test=base.extend<{saveLogs:void;}>({
    saveLogs:[async({}, use) =>{


    console.log("Global Fixture Before Running")

    await use();

    console.log("Global Fixture After Now")
    },
{auto:true}]
});
