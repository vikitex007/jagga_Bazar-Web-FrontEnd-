// // @ts-check
// import { test, expect } from '@playwright/test';

// test.describe('Create Listing Page', () => {

//     // Before each test, navigate to the Create Listing page
//     test.beforeEach(async ({ page }) => {
//         await page.goto('http://localhost:5173/create-listing');  // Adjust if your route is different
//     });

//     // Test 1: Check if the form renders correctly
//     test('should render create listing form', async ({ page }) => {
//         await expect(page.locator('input#name')).toBeVisible();
//         await expect(page.locator('textarea#description')).toBeVisible();
//         await expect(page.locator('input#address')).toBeVisible();
//         await expect(page.locator('input#bedrooms')).toBeVisible();
//         await expect(page.locator('input#bathrooms')).toBeVisible();
//         await expect(page.locator('button', { hasText: 'Create listing' })).toBeVisible();
//     });

//     // Test 2: Should show error if more than 6 images are selected
//     test('should show error if more than 6 images uploaded', async ({ page }) => {
//         const input = page.locator('input#images');
        
//         // Mock file uploads - Playwright can only handle file inputs like this
//         await input.setInputFiles([
//             { name: 'image1.png', mimeType: 'image/png', buffer: Buffer.from('dummy') },
//             { name: 'image2.png', mimeType: 'image/png', buffer: Buffer.from('dummy') },
//             { name: 'image3.png', mimeType: 'image/png', buffer: Buffer.from('dummy') },
//             { name: 'image4.png', mimeType: 'image/png', buffer: Buffer.from('dummy') },
//             { name: 'image5.png', mimeType: 'image/png', buffer: Buffer.from('dummy') },
//             { name: 'image6.png', mimeType: 'image/png', buffer: Buffer.from('dummy') },
//             { name: 'image7.png', mimeType: 'image/png', buffer: Buffer.from('dummy') },
//         ]);

//         // Click the upload button
//         await page.click('button:has-text("Upload")');

//         // Check for error message
//         const errorMessage = page.locator('p:text("You can only upload 6 images per listing")');
//         await expect(errorMessage).toBeVisible();
//     });

// });
