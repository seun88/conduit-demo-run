

import {Locator, Page, expect} from '@playwright/test';


export class DashBoardPage{
    
    private  readonly employees: Locator;


    constructor(public page : Page){
        this.page = page;
        this.employees = page.locator("sideBar");
         }

    async click_EmpLink(){
    
        await this.page.getByRole('link', {name: 'Employees'}).click();
 }


}