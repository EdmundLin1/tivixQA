import HomePage from './PageObjects/HomePage'
import SearchResultPage from './PageObjects/SearchResultPage'
import ConfirmationPage from './PageObjects/ConfirmationPage'
import FinalRentConfirmationPage from './PageObjects/FinalRentConfirmatioPage'

describe('Car Rent Test Suite', () => {
  
  let userData
  before(function() {
    cy.fixture('example').then(dat => userData = dat)
  })

  beforeEach(function() {
    cy.visit(Cypress.config().baseUrl)
  })

  it('Verifies the pickup and dropoff dates are necessary to proceed', function() {

    const hp = new HomePage()
    //verify the expected title here
    cy.title().should('eq', 'Car rent')

    //leave the defaults selected, empty pick up and drop off date
    //click on search button
    hp.clickSearch()

    //page refreshes and assert the alert is still there
    hp.assertNoPickupOrDropoffDate()
  })

  it('Verifies the summary page matches up with selection', function() {
    
    const hp=new HomePage()

    //fill out the country
    hp.selectCountry(userData.country)
    //fill out the city
    hp.selectCity(userData.city)
    //fill out the model
    hp.inputModel(userData.car_model)
    //fill out the pickup date
    hp.inputPickupDate(userData.pickup_date)
    //fill out the dropoff date
    hp.inputDropoffDate(userData.dropoff_date)
    //click search
    hp.clickSearch()

    const srp = new SearchResultPage()
    //assert there are results with the model
    cy.contains(userData.car_model)
    //click on the rent button on the first Suzuki Swift
    srp.clickOnSeventhRentButton()

    //check the confirmation page
    //verify the location
    cy.contains(userData.country)
    cy.contains(userData.city)
    //verify the pickup and dropoff dates
    cy.contains(userData.pickup_date)
    cy.contains(userData.dropoff_date)
    //verify the car
    cy.contains(userData.car_model)

  })

  it('Verifies the final rent page needs required fields', function() {

    const hp=new HomePage()

    //fill out the country
    hp.selectCountry(userData.country)
    //fill out the city
    hp.selectCity(userData.city)
    //fill out the model
    hp.inputModel(userData.car_model)
    //fill out the pickup date
    hp.inputPickupDate(userData.pickup_date)
    //fill out the dropoff date
    hp.inputDropoffDate(userData.dropoff_date)
    //click search
    hp.clickSearch()

    const srp = new SearchResultPage()
    //assert there are results with the model
    cy.contains(userData.car_model)
    //click on the rent button on the first Suzuki Swift
    srp.clickOnSeventhRentButton()

    //click the rent button on confirmation page
    const cp = new ConfirmationPage()
    cp.clickRent()

    //on final confirmation page, click the rent button
    const frcp = new FinalRentConfirmationPage()
    frcp.clickRent()
    //assert that there are error messages
    cy.contains('Name is required')
    cy.contains('Last name is required')
    cy.contains('Email is required')
    cy.contains('Card number is required')
  })
})