class LoginPage {
    selectorsList() {
        const selectors = {
            loginButton: 'li > .undefined',
            emailField: "[data-cy='email']",
            passwordField: "[data-cy='password']",
            signInButton: '.text-white',
            failMessage: '.text-red-500'
        }
        return selectors
    }

    loginButtonClick() {
        cy.get(this.selectorsList().loginButton).click()
    }

    fillLoginFields(username: string, password: string) {
        cy.get(this.selectorsList().emailField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().signInButton).click()
    }

    successLoginCheck() {
        cy.get(this.selectorsList().loginButton).contains('Logout')
    }

    failLoginCheck() {
        cy.get(this.selectorsList().failMessage).contains('Invalid email or password')
    }
}

export default LoginPage