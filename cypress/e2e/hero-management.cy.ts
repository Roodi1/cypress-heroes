import LoginPage from "../pages/login-page"
import LoggedUserPage from "../pages/logged-user-page"

const loginPage = new LoginPage()
const loggedUserPage = new LoggedUserPage()

describe('Hero Management', () => {
  it('Create New Hero', () => {
    cy.visit('http://localhost:3000')
    loginPage.loginButtonClick()
    loginPage.fillLoginFields('admin@test.com', 'test123')
    loginPage.successLoginCheck()
    loggedUserPage.createNewHero('teste', '15', '0', '0', 4)  
  })
})