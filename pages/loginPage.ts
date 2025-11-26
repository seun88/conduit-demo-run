import { Page, Locator } from "@playwright/test";




export class LoginPage{

    private readonly userName:Locator;
    private readonly password:Locator;
    private readonly loginBtn:Locator;
   
    constructor(public page:Page){

        this.userName = page.locator("#username");
        this.password = page.locator("#password");
        this.loginBtn = page.locator("#login");
    }


    async LoginPage_ClickLogin(){

     try{

        await this.page.getByRole('textbox', {name:"Email address"}).click();
        await this.page.getByRole('textbox', {name:"Email address"}).fill("qaAutomationTechTask@grr.la");
        await this.page.getByRole('textbox',{name: "password"}).click();
        await this.page.getByRole('textbox', {name: "password"}).fill("A1234567890-");
        await this.page.getByRole('button', {name: "Login"}).click();

     }catch(error){

        console.error('Invalid credentials', error);
     }



    }




}