import{Page} from "@playwright/test"
import {expect, test} from "@playwright/test";
export  class RegisterPage{








    constructor(public page: Page){

    }

    async enterFirstName(firstname: string){
         await this.page.locator("#input-firstname").fill(firstname);

    }

    async enterLastName(lastname: string){
         await this.page.locator("#input-lastname").fill(lastname);

    }

     async enterEmail(email: string){
         await this.page.locator("input[name='email']").fill(email);

    }

    async enterPhoneNumber(phonenumber: string){
         await this.page.locator("#input-telephone").fill(phonenumber);

    }


    async enterPassword(password: string){
        await this.page.locator("input[name='password']").fill(password);
    }

    async enterConfirmPassword(confirmpassword: string){
        await this.page.locator("#input-confirm").type(confirmpassword);
    }

    
    async clickTerms(){
         await this.page.click("input[id='input-agree']");
    }

    async clickContinueBtn(){
        await Promise.all([
            this.page.waitForNavigation({waitUntil:"networkidle"}),
            this.page.click("input[value='Continue']")
       ])

    }


    

}