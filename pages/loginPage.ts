import {Page} from "@playwright/test"
export default class LoginPage {

     constructor(public page: Page){}

     async enterEmailAdd(emailadd: string){
        await this.page.locator("#input-email").fill(emailadd);
     }

     async enterEpassword(epassword : string){
        await this.page.locator("#input-password").fill(epassword);
     }

     async clickLoginBtn(){
        await this.page.click("input[value='Login']");
     }

    





}