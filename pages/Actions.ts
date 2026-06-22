import { Page, expect } from '@playwright/test'
import { actionlocators } from '../locators/actionslocators';
import * as allure from "allure-js-commons";


export class ActionClass {

    protected page: Page
    constructor(page: Page) {
        this.page = page;
    }
    async dragAndDrop() {

        await this.page.locator(actionlocators.drag).dragTo(this.page.locator(actionlocators.drop))
        let droppedText = await this.page.locator(actionlocators.dropped).textContent()
        expect(droppedText).toBe('Dropped!')
    }
    // async clickAction( twoClicks:number, holdClick: number): Promise <void>{

    //     await this.page.getByRole('button', {name: 'Double Click Me!'}).dblclick()

    // }
    async clickAction(twoClicks: number, holdClick: number): Promise<void>;
    async clickAction(oneClick: string): Promise<void>;
    async clickAction(param1: string | number): Promise<void> {
        if (typeof param1 === 'string') {
            await this.page.locator('#click-box').first().hover()
            await this.page.mouse.down()
            await this.page.waitForTimeout(5000)
            const holdText = await this.page.getByText('Well done! keep holding that click now.....').textContent()
            expect(holdText).toBe("Well done! keep holding that click now.....")

        }
        else if (param1 === 2) {
            await this.page.getByRole('heading', { name: 'Double Click Me!' }).dblclick()
            // expect(this.page.getByRole('heading', {name: 'Double Click Me!'})).toHaveCSS()
            await this.page.screenshot({ path: 'screenshots/screenshot1.png' })

        }
    }
    async hover() {
        await this.page.getByRole('button', { name: "Hover Over Me First!" }).hover()
        await this.page.waitForTimeout(5000)
        //const listDisplayed =  await this.page.locator("//div[@class='col-lg-12 text-center'][2]")
        const menuButtons = await this.page.locator("//button[@class='dropbtn']")
        let menuCount = await menuButtons.count()

        for (let i = 0; i < menuCount; i++) {
            await menuButtons.nth(i).hover()
            let buttonText = await menuButtons.nth(i).textContent()
            console.log(buttonText)
            let lists = this.page.locator(`//button[text()="${buttonText}"]/following-sibling::div/a`)
            let listNames = await lists.allTextContents()
            let listCount = await lists.count()
            console.log(listNames)          
            
            for (let j = 0; j < listCount; j++) {
                console.log(await lists.nth(j).isVisible())
                //await lists.nth(j).click({ force: true })
                await lists.nth(j).click({button: "left"})
               // await this.page.mouse.down()
                await this.page.waitForTimeout(5000)

                this.page.once('dialog', async dialog => {
                console.log("ALERT FOUND")
                console.log(dialog.message())
                await this.page.waitForTimeout(5000)
                await dialog.accept()
                
            })

            }
        }
    }
}