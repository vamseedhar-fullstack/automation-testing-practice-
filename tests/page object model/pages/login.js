class login {
    
    constructor(page){
        this.page = page;
        this.loginbtn = page.locator("#login2");
        this.username = page.locator("#loginusername");
        this.password = page.locator("#loginpassword");
        this.loginButton = page.locator("//button[normalize-space()='Log in']");
        this.logoutButton = page.locator("//a[@id='logout2']");
    }

    async gotpage(){
        await this.page.goto("https://www.demoblaze.com/index.html");
    }

    async loginToApp(username, password){
        await this.loginbtn.click();
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    async logoutfromapp() {
        await this.logoutButton.click();
    }

}

export default login;