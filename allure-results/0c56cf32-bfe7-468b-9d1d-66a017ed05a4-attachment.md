# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: hover.spec.ts >> hover test
- Location: tests\hover.spec.ts:7:5

# Error details

```
Error: locator.click: Error: strict mode violation: locator('//button[text()="Hover Over Me Third!"]/following-sibling::div/a') resolved to 2 elements:
    1) <a href="#" class="list-alert">Link 1</a> aka getByRole('link', { name: 'Link 1' })
    2) <a href="#" class="list-alert">Link 2</a> aka getByRole('link', { name: 'Link 2' })

Call log:
  - waiting for locator('//button[text()="Hover Over Me Third!"]/following-sibling::div/a')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - navigation [ref=e2]:
    - link "WebdriverUniversity.com" [ref=e5] [cursor=pointer]:
      - /url: index.html
  - generic [ref=e6]:
    - generic [ref=e7]: A New Approach to Learning
    - heading "Practise Test Automation on a Real Site" [level=1] [ref=e8]
    - paragraph [ref=e9]: A free practice playground for Selenium, Playwright, Cypress and modern AI-assisted automation. Used by thousands of testers worldwide.
  - generic [ref=e11]:
    - generic [ref=e13]: Mega Sale · Up to 89% Off
    - 'heading "🚀 Unlock Your Potential: Mega Sale – Up to 89% Off 🚀" [level=2] [ref=e14]'
    - paragraph [ref=e15]: ⏰ Limited-time offer — Grab your course before it expires!
    - paragraph [ref=e16]:
      - text: 👨‍🏫 99,000+ students
      - generic [ref=e17]: •
      - text: 12,000+ reviews
      - generic [ref=e18]: •
      - text: Learn from a Senior SDET
    - generic [ref=e19]:
      - link "01 Master Generative AI for Software Testing View Course →" [ref=e20] [cursor=pointer]:
        - /url: https://www.udemy.com/course/master-generative-ai-for-software-testing-manual-to-auto/?couponCode=F0DAC7BD64283F34C05B
        - generic [ref=e21]:
          - generic [ref=e22]: "01"
          - generic [ref=e23]: Master Generative AI for Software Testing
        - generic [ref=e24]: View Course →
      - link "02 API Testing with Postman View Course →" [ref=e25] [cursor=pointer]:
        - /url: https://www.udemy.com/course/the-api-master-class-testing-in-detail-using-postman/?couponCode=39ACC67427B61164D0CA
        - generic [ref=e26]:
          - generic [ref=e27]: "02"
          - generic [ref=e28]: API Testing with Postman
        - generic [ref=e29]: View Course →
      - link "03 Playwright with TypeScript View Course →" [ref=e30] [cursor=pointer]:
        - /url: https://www.udemy.com/course/playwright-with-cucumber-bdd-typescript-beginner-to-pro/?couponCode=A0BFB3482F9224AE2B18
        - generic [ref=e31]:
          - generic [ref=e32]: "03"
          - generic [ref=e33]: Playwright with TypeScript
        - generic [ref=e34]: View Course →
      - link "04 Playwright with Java View Course →" [ref=e35] [cursor=pointer]:
        - /url: https://www.udemy.com/course/playwright-cucumber-bdd-with-java-novice-to-pro/?couponCode=6E409F53DC28572FFB9A
        - generic [ref=e36]:
          - generic [ref=e37]: "04"
          - generic [ref=e38]: Playwright with Java
        - generic [ref=e39]: View Course →
      - link "05 Cypress with Cucumber BDD View Course →" [ref=e40] [cursor=pointer]:
        - /url: https://www.udemy.com/course/selenium-webdriver-4-new-features-in-detail/?couponCode=F5968C1C1294E6DBE5A2
        - generic [ref=e41]:
          - generic [ref=e42]: "05"
          - generic [ref=e43]: Cypress with Cucumber BDD
        - generic [ref=e44]: View Course →
      - link "06 Complete Cypress v13 Course View Course →" [ref=e45] [cursor=pointer]:
        - /url: https://www.udemy.com/course/cypress-io-master-class/?couponCode=8D5EA0E9E55EFB3646FD
        - generic [ref=e46]:
          - generic [ref=e47]: "06"
          - generic [ref=e48]: Complete Cypress v13 Course
        - generic [ref=e49]: View Course →
      - link "07 Complete WebdriverIO Course View Course →" [ref=e50] [cursor=pointer]:
        - /url: https://www.udemy.com/course/automation-testing-javascript-webdriverio-selenium-more/?couponCode=8CFBC45CABDCFF1BD51F
        - generic [ref=e51]:
          - generic [ref=e52]: "07"
          - generic [ref=e53]: Complete WebdriverIO Course
        - generic [ref=e54]: View Course →
      - link "08 Selenium WebDriver 4 View Course →" [ref=e55] [cursor=pointer]:
        - /url: https://www.udemy.com/course/selenium-webdriver-4-new-features-in-detail/?couponCode=F5968C1C1294E6DBE5A2
        - generic [ref=e56]:
          - generic [ref=e57]: "08"
          - generic [ref=e58]: Selenium WebDriver 4
        - generic [ref=e59]: View Course →
      - link "09 Selenium + Cucumber + Java View Course →" [ref=e60] [cursor=pointer]:
        - /url: https://www.udemy.com/course/cucumber-bdd-selenium-java-complete-automation-course/?couponCode=B118A7C4AA7320A0FB32
        - generic [ref=e61]:
          - generic [ref=e62]: "09"
          - generic [ref=e63]: Selenium + Cucumber + Java
        - generic [ref=e64]: View Course →
      - link "10 Mastering Locators View Course →" [ref=e65] [cursor=pointer]:
        - /url: https://www.udemy.com/course/mastering-locators/?couponCode=3CA3FA093419BF6382CD
        - generic [ref=e66]:
          - generic [ref=e67]: "10"
          - generic [ref=e68]: Mastering Locators
        - generic [ref=e69]: View Course →
  - generic [ref=e70]:
    - generic [ref=e71]:
      - heading "Test Automation Challenges" [level=2] [ref=e72]
      - paragraph [ref=e73]: Pick a challenge below. Each opens in a new tab so your tests can keep running.
    - generic [ref=e74]:
      - link "CONTACT US Contact Us Form Validate form input, mandatory fields and email format with BDD scenarios. →" [ref=e75] [cursor=pointer]:
        - /url: Contact-Us/contactus.html
        - generic [ref=e76]:
          - heading "CONTACT US" [level=1] [ref=e78]
          - generic [ref=e79]:
            - heading "Contact Us Form" [level=4] [ref=e80]
            - paragraph [ref=e81]: Validate form input, mandatory fields and email format with BDD scenarios.
          - generic [ref=e82]: →
      - link "LOGIN PORTAL Login Portal Drive scenario outlines through valid and invalid credential sets. →" [ref=e83] [cursor=pointer]:
        - /url: Login-Portal/index.html
        - generic [ref=e84]:
          - heading "LOGIN PORTAL" [level=1] [ref=e86]
          - generic [ref=e87]:
            - heading "Login Portal" [level=4] [ref=e88]
            - paragraph [ref=e89]: Drive scenario outlines through valid and invalid credential sets.
          - generic [ref=e90]: →
      - link "BUTTON CLICKS WebElement, JavaScript & Actions Click Practise every type of click — element click, JS click, and Actions move-and-click. →" [ref=e91] [cursor=pointer]:
        - /url: Click-Buttons/index.html
        - generic [ref=e92]:
          - heading "BUTTON CLICKS" [level=1] [ref=e94]
          - generic [ref=e95]:
            - heading "WebElement, JavaScript & Actions Click" [level=4] [ref=e96]
            - paragraph [ref=e97]: Practise every type of click — element click, JS click, and Actions move-and-click.
          - generic [ref=e98]: →
      - link "TO DO LIST Send Keys & List Manipulation Add and remove items, chain actions, assert dynamic list state. →" [ref=e99] [cursor=pointer]:
        - /url: To-Do-List/index.html
        - generic [ref=e100]:
          - heading "TO DO LIST" [level=1] [ref=e102]
          - generic [ref=e103]:
            - heading "Send Keys & List Manipulation" [level=4] [ref=e104]
            - paragraph [ref=e105]: Add and remove items, chain actions, assert dynamic list state.
          - generic [ref=e106]: →
      - link "PAGE OBJECT MODEL Build a Maintainable Framework Model real pages as classes — build a reusable, maintainable test architecture. →" [ref=e107] [cursor=pointer]:
        - /url: Page-Object-Model/index.html
        - generic [ref=e108]:
          - heading "PAGE OBJECT MODEL" [level=1] [ref=e110]
          - generic [ref=e111]:
            - heading "Build a Maintainable Framework" [level=4] [ref=e112]
            - paragraph [ref=e113]: Model real pages as classes — build a reusable, maintainable test architecture.
          - generic [ref=e114]: →
      - link "ACCORDION & TEXT EFFECTS Wait for Dynamic Text Toggle accordion panels, handle animated text reveals, and master explicit, fluent and implicit waits. →" [ref=e115] [cursor=pointer]:
        - /url: Accordion/index.html
        - generic [ref=e116]:
          - heading "ACCORDION & TEXT EFFECTS" [level=1] [ref=e118]
          - generic [ref=e119]:
            - heading "Wait for Dynamic Text" [level=4] [ref=e120]
            - paragraph [ref=e121]: Toggle accordion panels, handle animated text reveals, and master explicit, fluent and implicit waits.
          - generic [ref=e122]: →
      - link "DROPDOWNS, CHECKBOXES & RADIOS Form Controls of Every Kind Select dropdown options, toggle checkboxes, drive radio button groups. →" [ref=e123] [cursor=pointer]:
        - /url: Dropdown-Checkboxes-RadioButtons/index.html
        - generic [ref=e124]:
          - heading "DROPDOWNS, CHECKBOXES & RADIOS" [level=1] [ref=e126]
          - generic [ref=e127]:
            - heading "Form Controls of Every Kind" [level=4] [ref=e128]
            - paragraph [ref=e129]: Select dropdown options, toggle checkboxes, drive radio button groups.
          - generic [ref=e130]: →
      - link "AJAX LOADER Master WebDriver Waits Wait for an Ajax loader to vanish before interacting with the next element. →" [ref=e131] [cursor=pointer]:
        - /url: Ajax-Loader/index.html
        - generic [ref=e132]:
          - heading "AJAX LOADER" [level=1] [ref=e134]
          - generic [ref=e135]:
            - heading "Master WebDriver Waits" [level=4] [ref=e136]
            - paragraph [ref=e137]: Wait for an Ajax loader to vanish before interacting with the next element.
          - generic [ref=e138]: →
      - link "ACTIONS Drag, Drop, Hover, Double Click Use the Actions class to chain advanced user interactions. →" [active] [ref=e139] [cursor=pointer]:
        - /url: Actions/index.html
        - generic [ref=e140]:
          - heading "ACTIONS" [level=1] [ref=e142]
          - generic [ref=e143]:
            - heading "Drag, Drop, Hover, Double Click" [level=4] [ref=e144]
            - paragraph [ref=e145]: Use the Actions class to chain advanced user interactions.
          - generic [ref=e146]: →
      - link "SCROLLING AROUND Scroll Into View Scroll to coordinates or directly to elements buried below the fold. →" [ref=e147] [cursor=pointer]:
        - /url: Scrolling/index.html
        - generic [ref=e148]:
          - heading "SCROLLING AROUND" [level=1] [ref=e150]
          - generic [ref=e151]:
            - heading "Scroll Into View" [level=4] [ref=e152]
            - paragraph [ref=e153]: Scroll to coordinates or directly to elements buried below the fold.
          - generic [ref=e154]: →
      - link "POPUPS & ALERTS JavaScript Alerts & Modals Handle native JS alerts, confirms, prompts and Bootstrap-style modals. →" [ref=e155] [cursor=pointer]:
        - /url: Popup-Alerts/index.html
        - generic [ref=e156]:
          - heading "POPUPS & ALERTS" [level=1] [ref=e158]
          - generic [ref=e159]:
            - heading "JavaScript Alerts & Modals" [level=4] [ref=e160]
            - paragraph [ref=e161]: Handle native JS alerts, confirms, prompts and Bootstrap-style modals.
          - generic [ref=e162]: →
      - link "IFRAME Switch Between Frames Toggle between the main document and an embedded iframe — and back again. →" [ref=e163] [cursor=pointer]:
        - /url: IFrame/index.html
        - generic [ref=e164]:
          - heading "IFRAME" [level=1] [ref=e166]
          - generic [ref=e167]:
            - heading "Switch Between Frames" [level=4] [ref=e168]
            - paragraph [ref=e169]: Toggle between the main document and an embedded iframe — and back again.
          - generic [ref=e170]: →
      - link "HIDDEN ELEMENTS Display, Visibility & Opacity Detect hidden elements and assert their state across CSS hide patterns. →" [ref=e171] [cursor=pointer]:
        - /url: Hidden-Elements/index.html
        - generic [ref=e172]:
          - heading "HIDDEN ELEMENTS" [level=1] [ref=e174]
          - generic [ref=e175]:
            - heading "Display, Visibility & Opacity" [level=4] [ref=e176]
            - paragraph [ref=e177]: Detect hidden elements and assert their state across CSS hide patterns.
          - generic [ref=e178]: →
      - link "DATA TABLE Read & Extract Tabular Data Locate and extract row and column data from HTML tables — practise reading tabular content with any automation framework. →" [ref=e179] [cursor=pointer]:
        - /url: Data-Table/index.html
        - generic [ref=e180]:
          - heading "DATA TABLE" [level=1] [ref=e182]
          - generic [ref=e183]:
            - heading "Read & Extract Tabular Data" [level=4] [ref=e184]
            - paragraph [ref=e185]: Locate and extract row and column data from HTML tables — practise reading tabular content with any automation framework.
          - generic [ref=e186]: →
      - link "AUTOCOMPLETE TEXTFIELD Autocomplete & Type-ahead Type a value, wait for live suggestions to load, and select a matching option — a common challenge in real-world automation. →" [ref=e187] [cursor=pointer]:
        - /url: Autocomplete-TextField/autocomplete-textfield.html
        - generic [ref=e188]:
          - heading "AUTOCOMPLETE TEXTFIELD" [level=1] [ref=e190]
          - generic [ref=e191]:
            - heading "Autocomplete & Type-ahead" [level=4] [ref=e192]
            - paragraph [ref=e193]: Type a value, wait for live suggestions to load, and select a matching option — a common challenge in real-world automation.
          - generic [ref=e194]: →
      - link "FILE UPLOAD File Input & Upload Automation Automate file selection using sendKeys or a file-chooser API and trigger a browser upload — essential for end-to-end test suites. →" [ref=e195] [cursor=pointer]:
        - /url: File-Upload/index.html
        - generic [ref=e196]:
          - heading "FILE UPLOAD" [level=1] [ref=e198]
          - generic [ref=e199]:
            - heading "File Input & Upload Automation" [level=4] [ref=e200]
            - paragraph [ref=e201]: Automate file selection using sendKeys or a file-chooser API and trigger a browser upload — essential for end-to-end test suites.
          - generic [ref=e202]: →
      - link "DATEPICKER Date Picker Automation Navigate calendar widgets to pick a day, month and year — a frequent challenge in Selenium, Playwright and Cypress tests. →" [ref=e203] [cursor=pointer]:
        - /url: Datepicker/index.html
        - generic [ref=e204]:
          - heading "DATEPICKER" [level=1] [ref=e206]
          - generic [ref=e207]:
            - heading "Date Picker Automation" [level=4] [ref=e208]
            - paragraph [ref=e209]: Navigate calendar widgets to pick a day, month and year — a frequent challenge in Selenium, Playwright and Cypress tests.
          - generic [ref=e210]: →
      - link "AI TESTING PLAYGROUND NEW Claude Code & Playwright AI Testing Challenges Flaky loaders, dynamic selectors, race conditions — built for AI-assisted automation. →" [ref=e211] [cursor=pointer]:
        - /url: AI-Playground/index.html
        - generic [ref=e212]:
          - heading "AI TESTING PLAYGROUND NEW" [level=1] [ref=e214]:
            - text: AI TESTING PLAYGROUND
            - generic [ref=e215]: NEW
          - generic [ref=e216]:
            - heading "Claude Code & Playwright AI Testing Challenges" [level=4] [ref=e217]
            - paragraph [ref=e218]: Flaky loaders, dynamic selectors, race conditions — built for AI-assisted automation.
          - generic [ref=e219]: →
  - contentinfo [ref=e220]:
    - paragraph [ref=e221]:
      - text: © WebDriverUniversity.com
      - generic [ref=e222]: ·
      - link "Automationteststore" [ref=e223] [cursor=pointer]:
        - /url: https://automationteststore.com/
```

# Test source

```ts
  1  | import { Page, expect } from '@playwright/test'
  2  | import { actionlocators } from '../locators/actionslocators';
  3  | import * as allure from "allure-js-commons";
  4  | 
  5  | 
  6  | export class ActionClass {
  7  | 
  8  |     protected page: Page
  9  |     constructor(page: Page) {
  10 |         this.page = page;
  11 |     }
  12 |     async dragAndDrop() {
  13 | 
  14 |         await this.page.locator(actionlocators.drag).dragTo(this.page.locator(actionlocators.drop))
  15 |         let droppedText = await this.page.locator(actionlocators.dropped).textContent()
  16 |         expect(droppedText).toBe('Dropped!')
  17 |     }
  18 |     // async clickAction( twoClicks:number, holdClick: number): Promise <void>{
  19 | 
  20 |     //     await this.page.getByRole('button', {name: 'Double Click Me!'}).dblclick()
  21 | 
  22 |     // }
  23 |     async clickAction(twoClicks: number, holdClick: number): Promise<void>;
  24 |     async clickAction(oneClick: string): Promise<void>;
  25 |     async clickAction(param1: string | number): Promise<void> {
  26 |         if (typeof param1 === 'string') {
  27 |             await this.page.locator('#click-box').first().hover()
  28 |             await this.page.mouse.down()
  29 |             await this.page.waitForTimeout(5000)
  30 |             const holdText = await this.page.getByText('Well done! keep holding that click now.....').textContent()
  31 |             expect(holdText).toBe("Well done! keep holding that click now.....")
  32 | 
  33 |         }
  34 |         else if (param1 === 2) {
  35 |             await this.page.getByRole('heading', { name: 'Double Click Me!' }).dblclick()
  36 |             // expect(this.page.getByRole('heading', {name: 'Double Click Me!'})).toHaveCSS()
  37 |             await this.page.screenshot({ path: 'screenshots/screenshot1.png' })
  38 | 
  39 |         }
  40 |     }
  41 |     async hover() {
  42 |         await this.page.getByRole('button', { name: "Hover Over Me First!" }).hover()
  43 |         await this.page.waitForTimeout(5000)
  44 |         //const listDisplayed =  await this.page.locator("//div[@class='col-lg-12 text-center'][2]")
  45 |         const menuButtons = await this.page.locator("//button[@class='dropbtn']")
  46 |         let menuCount = await menuButtons.count()
  47 |         
  48 |         for (let i = 0; i < menuCount; i++) {
  49 |             await menuButtons.nth(i).hover()
  50 |             let buttonText = await menuButtons.nth(i).textContent()
  51 |             console.log(buttonText)
  52 |             let lists =  this.page.locator(`//button[text()="${buttonText}"]/following-sibling::div/a`)
  53 |             let listNames = lists.allTextContents()
  54 |             console.log(listNames)
> 55 |             await lists.click()       
     |                         ^ Error: locator.click: Error: strict mode violation: locator('//button[text()="Hover Over Me Third!"]/following-sibling::div/a') resolved to 2 elements:
  56 |             await this.page.waitForTimeout(5000)
  57 |         }
  58 |     }
  59 | }
```