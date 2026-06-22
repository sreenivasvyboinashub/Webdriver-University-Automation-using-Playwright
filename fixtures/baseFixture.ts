// Import Playwright's built-in test and rename it as base
import { test as base } from '@playwright/test';

// Import HomePage page object
import { HomePage } from '../pages/HomePage';

// Define custom fixture types
type MyFixtures = {

    // Create a fixture named homePage
    // Its type will be HomePage
    homePage: HomePage;
};

// Extend Playwright test with custom fixtures
export const test = base.extend<MyFixtures>({

    // Define homePage fixture
    homePage: async ({ page }, use) => {

        // Create HomePage object
        const hp = new HomePage(page);

        // Pass HomePage object to test
        await use(hp);

        // Cleanup can be added here if needed
    }
});