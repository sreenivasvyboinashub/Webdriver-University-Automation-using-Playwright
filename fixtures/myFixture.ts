import {test as base} from "@playwright/test"
import { BasePage } from "../pages/BasePage"

type newFixtures = {

    basePage : BasePage
}

export const test = base.extend<newFixtures>({

    basePage: async ({page}, use)=>{

        const bp = new BasePage(page)

        await use(bp)

        

    }


})



    

