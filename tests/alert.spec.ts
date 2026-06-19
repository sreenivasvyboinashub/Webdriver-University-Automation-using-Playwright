import { test, expect } from '@playwright/test';

test("alerts", async ({ page }) => {

    await page.goto("https://webdriveruniversity.com/Popup-Alerts/index.html");
    await page.waitForLoadState('domcontentloaded');

    const alertButton = page.locator('#button1');
    await expect(alertButton).toBeVisible();

    let dialogCaptured = false;

    const dialogDataPromise = new Promise<{ message: string; type: string }>((resolve) => {
        page.once('dialog', async (dialog) => {
            dialogCaptured = true;
            const message = dialog.message();
            const type = dialog.type();
            await dialog.accept();
            resolve({ message, type });
        });
    });

    await alertButton.click({ force: true });
    const dialogData = await dialogDataPromise;

    console.log("Dialog Type:", dialogData.type);
    console.log("Dialog Message:", dialogData.message);

    expect(dialogCaptured).toBeTruthy();
    expect(dialogData.type).toBe("alert");
    expect(dialogData.message).toBe("I am an alert box!");

});