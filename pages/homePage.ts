import {Page} from "@playwright/test"

export class HomePage{

    constructor(public page: Page){}

    async enterEmailAdd(emailadd: string){
        await this.page.locator("#input-email").fill(emailadd);
     }


}