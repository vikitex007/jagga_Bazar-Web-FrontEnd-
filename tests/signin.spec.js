// @ts-check
import { test, expect } from '@playwright/test';

test.describe('Sign In Page', () => {

    // Before each test, navigate to the Sign In page
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:5173/sign-in');  // Adjust if necessary
    });

    test('should render Sign In form', async ({ page }) => {
        const emailField = page.locator('input#email');
        const passwordField = page.locator('input#password');
        const signInButton = page.locator('button', { hasText: 'Sign In' });

        await expect(emailField).toBeVisible();
        await expect(passwordField).toBeVisible();
        await expect(signInButton).toBeVisible();
    });

    test('should show error if form submitted with empty fields', async ({ page }) => {
        await page.click('button:has-text("Sign In")');

        // Depending on your form validation, you might show error messages
        // If you have error messages appearing somewhere, you can check them like:
        // Example (update this to match your component if needed):
        const errorMessage = page.locator('p.text-red-500');
        await expect(errorMessage).toBeVisible();
    });

    // test('should show error on invalid credentials', async ({ page }) => {
    //     await page.fill('#email', 'invaliduser@example.com');
    //     await page.fill('#password', 'wrongpassword');

    //     // Mock API response - replace with your actual backend setup if necessary
    //     await page.route('/api/auth/signin', async (route) => {
    //         await route.fulfill({
    //             status: 401,
    //             contentType: 'application/json',
    //             body: JSON.stringify({ success: false, message: 'Invalid credentials' }),
    //         });
    //     });

    //     await page.click('button:has-text("Sign In")');

    //     const errorMessage = page.locator('p.text-red-500');
    //     await expect(errorMessage).toBeVisible();
    //     await expect(errorMessage).toHaveText('Invalid credentials');
    // });

    // test('should navigate to home page on successful sign in', async ({ page }) => {
    //     await page.fill('#email', 'validuser@example.com');
    //     await page.fill('#password', 'correctpassword');

    //     // Mock API response - replace with actual backend setup if necessary
    //     await page.route('/api/auth/signin', async (route) => {
    //         await route.fulfill({
    //             status: 200,
    //             contentType: 'application/json',
    //             body: JSON.stringify({ success: true, token: 'mockToken' }),
    //         });
    //     });

    //     await page.click('button:has-text("Sign In")');

    //     await expect(page).toHaveURL('http://localhost:5173/');  // Adjust to your home page
    // });

    // test('should disable button and show loading state during submission', async ({ page }) => {
    //     await page.fill('#email', 'loadinguser@example.com');
    //     await page.fill('#password', 'somepassword');

    //     await page.route('/api/auth/signin', async (route) => {
    //         await new Promise(resolve => setTimeout(resolve, 2000));  // Simulate delay
    //         await route.fulfill({
    //             status: 200,
    //             contentType: 'application/json',
    //             body: JSON.stringify({ success: true }),
    //         });
    //     });

    //     const signInButton = page.locator('button');

    //     await page.click('button:has-text("Sign In")');

    //     await expect(signInButton).toHaveText('Loading...');
    //     await expect(signInButton).toBeDisabled();

    //     // After 2 seconds, expect navigation
    //     await expect(page).toHaveURL('http://localhost:5173/');
    // });

});
