🎭 Playwright UI Testing Project

This project contains end-to-end (E2E) UI tests built with Playwright, following the Page Object Model (POM) to improve test readability, reusability, and maintainability.

📌 Tech Stack

Playwright – End-to-end testing framework

Node.js – JavaScript runtime

JavaScript

Cross-browser testing (Chromium, Firefox, WebKit)

📂 Project Structure
playwright_ui/
├── pages/                      # Page Object Models
│   └── login_page.js
│
├── tests/
│   └── login_test/             # Login-related test cases
│       └── login.spec.js
│
├── playwright.config.js        # Playwright configuration
├── package.json
├── package-lock.json
└── README.md

⚙️ Prerequisites

Ensure the following are installed:

Node.js (v18 or later recommended)

npm

Verify installation:

node -v
npm -v

📦 Installation

Install dependencies:

npm install


Install Playwright browsers and OS dependencies:

npx playwright install --with-deps

▶️ Running Tests

Run all tests:

npx playwright test


Run tests in headed mode:

npx playwright test --headed


Run login tests only:

npx playwright test tests/login_test


Run tests in a specific browser:

npx playwright test --project=chromium

📊 Test Reports

View the HTML report after test execution:

npx playwright show-report

🧱 Page Object Model (POM)

This project uses Page Object Model to separate test logic from page interactions.

📄 pages/login_page.js
export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = '#username';
    this.passwordInput = '#password';
    this.loginButton = '#login';
  }

  async navigate() {
    await this.page.goto('https://example.com/login');
  }

  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }
}

🧪 Example Test
📄 tests/login_test/login.spec.js
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login_page';

test('user can login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login('testuser', 'password123');

  await expect(page).toHaveURL(/dashboard/);
});

🚀 Best Practices Used

Page Object Model (POM)

Automatic waits (no hard-coded sleeps)

Isolated tests using browser contexts

Parallel test execution

Built-in Playwright assertions

HTML reporting

🛠️ Optional Scripts

You may add scripts to package.json:

"scripts": {
  "test": "playwright test",
  "test:ui": "playwright test --ui",
  "report": "playwright show-report"
}


Run with:

npm run test

👤 Author

Mzwili Mthiyane
Software Quality Assurance Engineer

🔗 GitHub: https://github.com/mzwili

🔗 LinkedIn: https://www.linkedin.com/in/mzwi-linked/

📄 License

This project is licensed under the ISC License.