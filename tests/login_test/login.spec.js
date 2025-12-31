import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login_page';

test('Login with valid credentials', async ({ page }) => {
    const login = new LoginPage(page);
    await login.login('tomsmith', 'SuperSecretPassword!');
    await expect(page.getByText('You logged into a secure area!')).toBeVisible();
});