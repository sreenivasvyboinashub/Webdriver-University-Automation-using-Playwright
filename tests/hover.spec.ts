import {test, expect} from '@playwright/test'
import { BasePage } from '../pages/BasePage';
import { HomePage } from '../pages/HomePage';
import { ActionClass } from '../pages/actions';


test('hover test', async ({page}) => 
    {
        const basePage = new BasePage(page)
        await basePage.navigatetoWebDriverUniversity()

        const homePage = new HomePage(page)
        const actionsTab =  await homePage.clickOnChallenge("ACTIONS")
           
        const actions = new ActionClass(actionsTab)
       
        await actions.hover()


          


    }
);