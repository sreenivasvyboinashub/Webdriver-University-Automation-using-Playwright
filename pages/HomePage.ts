import {Page, expect} from '@playwright/test'
import { BasePage } from './BasePage';
import { HomePageLocators } from '../locators/homepagelocators';


export class HomePage extends BasePage {
    

    constructor(page: Page){
        super(page)
    }
    async verifyAllAutomationChallengesNames(){

         const challengeHeaders: string[] = await this.page.locator(HomePageLocators.allchallengesheaders).allTextContents();
         console.log('The challenge headers are:', challengeHeaders)
        return challengeHeaders;

    }
    async clickOnChallenge(challengeName: string){        
        const challenges: string[]   =  await this.verifyAllAutomationChallengesNames() 
        const challengeIndex = challenges.indexOf(challengeName)
        const newTabPromise = this.page.context().waitForEvent('page')
        await this.page.locator(HomePageLocators.allchallengesheaders).nth(challengeIndex).click();
        const newTab = await newTabPromise;
        return newTab;      
    
    }




}