const {test,expect} = require('@playwright/test');
const Data = JSON.parse(JSON.stringify(require('../TestTabs.json')));
const credintials = JSON.parse(JSON.stringify(require('../Login_Credentials.json')));
const { username, password } = credintials[0];




test.describe('Validate UI elements', ()=>{
    async function login(page){
        // Navigate to the login page
        await page.goto("https://animated-gingersnap-8cf7f2.netlify.app");
        await page.locator('#username').fill(username);
        await page.locator('#password').fill(password);
        await page.locator("[type='submit']").click();
        const targetPage = page.locator('.text-xl');
        await expect(targetPage).toBeVisible();
        await expect(targetPage).toHaveText("Web Application");
        await page.waitForLoadState('networkidle');
    }

    for (const data of Data)
    {
        test.describe(`Validate Testcase ${data.id}`, () =>{

                test(`Validate ${data.story} story`, async ({page})=> {
                    // Login to the application
                    await login(page);

                    // Navigate to the specified UI tab
                    const targetTab = page.locator(`.text-left:has-text("${data.uiTab}")`);
                    await targetTab.click();
                    console.log("Tab: " + data.uiTab + " clicked");

                    // Verify the UI tab title
                    const expectedTitle = data.uiTab;
                    const targetTitle = await page.locator('.text-xl').textContent()
                    await expect(expectedTitle).toEqual(targetTitle);
                    console.log("Tab Title: " + targetTitle + " exists");

                    // Verify the UI column title
                    const targetColumn = page.locator(`.w-80:has-text("${data.column}")`);
                    await expect(targetColumn).toBeVisible();
                    console.log(`Column: ${data.column} exists`);
                    
                    // Verify the UI story title
                    const targetStory = targetColumn.locator(`.p-4:has(h3:has-text("${data.story}"))`);
                    await expect(targetStory).toBeVisible();
                    console.log("Target story: " + data.story + " exists");

                    // Verify the UI story tags
                    const storyTags = targetStory.locator('.text-xs');
                    const allTags = await storyTags.allTextContents();
                    const expectedTags = data.Tags;
                    console.log('comparing tags: ', allTags, expectedTags);
                    expect(allTags.sort()).toEqual(expectedTags.sort());  
                    console.log("Tags: " + allTags + " match expected tags");                   

                })

        })

    }

})