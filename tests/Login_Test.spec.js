const {test,expect} = require('@playwright/test'); 
const testData = JSON.parse(JSON.stringify(require('../TestLogin.json'))); 

test.describe('Validate Login using different credintials', ()=>{
    async function navigateToPage(page){
        page.goto("https://animated-gingersnap-8cf7f2.netlify.app"); 

    }
    for( const data of testData)
    {
        test.describe(`Validate Login for ${data.scenario}`, ()=>{

            test(`Scenario: ${data.scenario}`, async({page})=>{
                // Navigate to the login page
                await navigateToPage(page);
                await page.locator('#username').fill(data.username);
                await page.locator('#password').fill(data.password);
                await page.locator("[type='submit']").click();

                // Verify the outcome based on the scenario
                if ( data.outcome == 'success'){
                    await expect(page.locator(".text-lg")).first().toBeVisible();
                }

                else if (data.outcome == "fail")
                {
                    const errorMessage =  page.locator(".text-red-500");
                    await expect(errorMessage).toBeVisible();
                    await expect(errorMessage).toHaveText('Invalid username or password');
                }

            })


        })
    }
})