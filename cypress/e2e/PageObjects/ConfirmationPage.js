class ConfirmationPage{
    clickRent(){
        cy.get('.btn-primary').click()
        return this
    }
}

export default ConfirmationPage