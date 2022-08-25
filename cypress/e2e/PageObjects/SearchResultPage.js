

class SearchResultPage{
    clickOnSeventhRentButton(){
        cy.get(':nth-child(7) > :nth-child(7) > .btn').click()
        return this
    }
}

export default SearchResultPage