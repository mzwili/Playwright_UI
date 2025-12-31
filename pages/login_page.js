exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page;
        this.usernameInput = page.getByLabel('Username');
        this.passwordInput = page.getByLabel('Password');
        this.loginButton = page.getByRole('button', { name: ' Login' });
    }

    async login(username, password) {
        await this.page.goto('https://the-internet.herokuapp.com/login');
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}