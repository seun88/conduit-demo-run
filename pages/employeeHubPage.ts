
import {Page, Locator, expect} from '@playwright/test';


export class EmployeeHubPage{

    constructor(public page : Page){
        this.page = page;
        
    }

    async addEmployee(){
        await expect (this.page.getByText("Employee hub")).toBeVisible();
        await this.page.getByRole('button', {name: "Add employee"}).click();

    }






}