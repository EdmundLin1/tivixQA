import SearchResultPage from './SearchResultPage'

class HomePage{
    clickSearch(){
        const searchResultPage = new SearchResultPage()
        const button = cy.get('button.btn-primary')
        button.click()
        return searchResultPage
    }

    selectCountry(value){
        cy.get('select#country').select(value)
        return this
    }

    selectCity(value){
        cy.get('select#city').select(value)
        return this
    }

    inputModel(value){
        cy.get('input#model').type(value)
        return this
    }

    inputPickupDate(value){
        cy.get('input#pickup').type(value)
        return this
    }

    inputDropoffDate(value){
        cy.get('input#dropoff').type(value)
        return this
    }

    assertNoPickupOrDropoffDate(){
        cy.get('h3.alert').should('have.text', 'Please fill pickup and drop off dates')
        return this
    }
}

export default HomePage