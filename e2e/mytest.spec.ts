import {test,expect} from "@playwright/test"


//fixture - global variable :page, browser

test("VerifyPageTitle",async({page})=>{

await page.goto("http://www.automationpractice.pl/index.php");
let title:string =await page.title();
console.log("Title")
await expect(page).toHaveTitle("My Shop");


})


