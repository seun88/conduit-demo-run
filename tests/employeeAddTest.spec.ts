import {Page, test} from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { LoginPage } from '../pages/loginPage';
import { DashBoardPage } from '../pages/dashboardPage';
import { EmployeeHubPage } from '../pages/employeeHubPage';
import data from '../test_data/qa/empDetails.json';
import { EmployeeePage, type EmployeeData } from '../pages/employeePage';


type TestData = [
  EmployeeData,
  
];


test('Add new employee', async({page})=>{

const [ e1] = data as unknown as TestData;
const employee1: EmployeeData = e1 as EmployeeData;
const homepage = new HomePage(page);
const loginpage = new LoginPage(page);
const dashboardpage = new DashBoardPage(page);
const employeehubpage = new EmployeeHubPage(page);
const employeepage = new EmployeeesPage(page);





await page.goto("https://sandbox-app.brighthr.com/lite");
await homepage.click_HomepageLogin();
await loginpage.LoginPage_ClickLogin();
await dashboardpage.click_EmpLink();
await employeehubpage.addEmployee();
await employeepage.inputDataDetails();
await employeepage.addEmployee(employee1);
await employeepage.navigateEmployees();
await employeepage.expectEmployeeVisible([employee1]);





})