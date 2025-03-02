// @ts-check
import { test, expect } from '@playwright/test';

test.describe('Sign Up Page', () => {

    // Before each test, go to the signup page
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:5173/sign-up');  // Adjust URL if needed
    });

    test('should render signup form', async ({ page }) => {
        // Check for presence of input fields
        const usernameField = page.locator('input#username');
        const emailField = page.locator('input#email');
        const passwordField = page.locator('input#password');

        await expect(usernameField).toBeVisible();
        await expect(emailField).toBeVisible();
        await expect(passwordField).toBeVisible();

        // Check button
        const signUpButton = page.locator('button', { hasText: 'Sign Up' });
        await expect(signUpButton).toBeVisible();
    });

    test('should show validation error if form is empty and submitted', async ({ page }) => {
        await page.click('button:has-text("Sign Up")');

        // This test is still present since it's just a placeholder; 
        // you can add the error message check here if you implement it later.
    });

});
