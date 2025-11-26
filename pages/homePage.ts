

import{Locator, Page} from '@playwright/test'

export class HomePage{

    
    private readonly logIn:Locator;

    
    
    constructor(public page: Page){

        this.page = page;
        this.logIn = page.locator("Log in");
    }
    
    async click_HomepageLogin(){

        await this.page.getByRole('link', {name: "Log in"}).click();

    }




}