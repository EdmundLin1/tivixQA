class FinalRentConfirmationPage{
    clickRent(){
        cy.get('button.btn-primary').click()
        return this
    }
}

export default FinalRentConfirmationPage