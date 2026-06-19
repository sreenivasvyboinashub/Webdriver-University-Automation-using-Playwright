import {Page, expect} from '@playwright/test'
import { HomePage } from './HomePage'

export class ContactUs {
    page: Page
    constructor(page: Page){
        this.page = page
    }

   async enterDataFieldsInFields(firstName: string,
        lastName: string, emailAddress: string, comments: string){
            await this.page.getByPlaceholder('First Name').fill(firstName)
            await this.page.waitForTimeout(3000) 
            await this.page.getByPlaceholder('Last Name').fill(lastName)
            await this.page.waitForTimeout(3000) 
            await this.page.getByPlaceholder('Email Address').fill(emailAddress)
            await this.page.waitForTimeout(3000) 
            await this.page.getByPlaceholder('Comments').fill(comments)  
              
    }
}