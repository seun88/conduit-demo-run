
import { parse } from 'csv-parse/sync';
import fs from 'fs';

export interface EmpData{
    firstName:string,
        lastName: string,
        emailAddress:string,
        phoneNumber:string,
        startYear:string,
        startMonth:string,
        startDate:string,
        jobTitle: string,
}

export function ReadEmpData(filepath: string): EmpData[] {

  const content = fs.readFileSync(filepath, 'utf-8');
 
  return parse(content, {
    columns: true,
    skip_empty_lines: true,
    trim: true
  });

}