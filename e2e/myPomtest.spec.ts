import {expect, test} from "@playwright/test";
import {RegisterPage} from "../pages/registerPage";
import LoginPage from "../pages/loginPage";







const baseURL= 'https://ecommerce-playground.lambdatest.io/index.php?route=account/register'
const email = "johndoe1@mailinator.com";
const password = "Changingpassword@12345";
const telephone = "+447341556555";




test("Register test_01", async ({page})=>{
    const registerpage = new RegisterPage(page);
    await page.goto(baseURL);
    await registerpage.enterFirstName("johns");
    await registerpage.enterLastName("does");
    await registerpage.enterEmail(email);
    await registerpage.enterPhoneNumber(telephone);
    await registerpage.enterPassword(password)
    await registerpage.enterConfirmPassword(password);
    await registerpage.clickTerms();
    await registerpage.clickContinueBtn();




})