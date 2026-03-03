class LoggedUserPage{
    selectorsList(){
        const selectors = {
            newHeroButton: "[href='/heroes/new']",
            nameField: "[data-cy='nameInput']",
            priceField: "[data-cy='priceInput']",
            fansField: "[data-cy='fansInput']",
            savesField: "[data-cy='savesInput']",
            powersField: "[data-cy='powersSelect']",
            submitButton: "button"
        }
        return selectors
    }

    createNewHero(name: string, price: string, fans: string, saves: string, power: any) {
        cy.get(this.selectorsList().newHeroButton).click()
        cy.get(this.selectorsList().nameField).type(name)
        cy.get(this.selectorsList().priceField).type(price)
        cy.get(this.selectorsList().fansField).type(fans)
        cy.get(this.selectorsList().savesField).type(saves)
        cy.get(this.selectorsList().powersField).select(power)
        cy.get(this.selectorsList().submitButton).eq(2).click()
    }

}

export default LoggedUserPage