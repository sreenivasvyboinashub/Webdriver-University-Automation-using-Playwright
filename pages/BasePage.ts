import {Page, expect} from '@playwright/test'
import {BasePageLocators} from '../locators/BasePageLoctors';
export class BasePage {
   protected page: Page
    constructor(page: Page){
        this.page = page
    }

   async navigatetoWebDriverUniversity(){
          await  this.page.goto(BasePageLocators.url)
    }

    async verifyTitle(title: string){
        await expect(this.page).toHaveTitle(title)
    }

    async verifyURL(url: string) {
    await expect(this.page).toHaveURL(url)
}

}