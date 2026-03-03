import LoginPage from '../pages/login-page'

const loginPage = new LoginPage()

describe('User Login', () => {
  it('Login Successful', () => {
    cy.visit('http://localhost:3000')
    loginPage.loginButtonClick()
    loginPage.fillLoginFields('test@test.com', 'test123')
    loginPage.successLoginCheck()
  })
    it('Login Fail', () => {
      cy.visit('http://localhost:3000')
      loginPage.loginButtonClick()
      loginPage.fillLoginFields('testfail@test.com', 'test1')
      loginPage.failLoginCheck()
  })
})