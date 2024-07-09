import HomePage from "../page_objects/home.page";
import LoginPage from "../page_objects/login.page";
import RegisterPage from "../page_objects/register.page";

let verificationText;
let user;

describe('User is able to access menu item', () => {
    before(() => {
      cy.fixture('userCredentials.json').then((data)=>{
        user = data
      })
      cy.fixture('verification.json').then((data) => {
        verificationText = data
      });
    })

  beforeEach(() => {
    cy.visit('/');
    HomePage.loginButton.click()
    LoginPage.loginPageTitle.should('be.visible')
    LoginPage.synapseConnectLogin.click()
    RegisterPage.createAccountLink.click()
  });

  it('User is able to create account as an Ordering Physician', () => {
    RegisterPage.registerAsOrderingPhysicianRadioButton.click()
    RegisterPage.nextSubmitButton.click()
    RegisterPage.lookUpNPINumberTitle.should('be.visible')
    RegisterPage.lookUpNPINumberButton.click()
    RegisterPage.npiNumberInputField.type('1073043956')
    RegisterPage.firstNameInputField.type('Khushbu')
    RegisterPage.lastNameInputField.type('Patel')
    RegisterPage.cityNameInputField.type('Moorestown')
    RegisterPage.stateNameInputField.type('NJ')
    RegisterPage.searchNPIButton.click()
    cy.get('.sorting_1').should('have.text','1073043956')
    cy.get('#npiSearchModalTableAction').click()
    cy.get('#mailingPhoneNumber').type('8562351214')
    //Did not apply submit button to avoid spamming with fake accounts.
    RegisterPage.nextSubmitButton
  });

  it('User is able to create account as a Referral Source', ()=>{
    RegisterPage.registerAsReferralSourceRadioButton.click()
    RegisterPage.nextSubmitButton.click()
    cy.get('h2').contains('Choose Your Username').should('be.visible')
    RegisterPage.firstNameInputField.type('Khushbu')
    RegisterPage.lastNameInputField.type('Patel')
    cy.get('#userName').type('kpatel09')
    cy.get('[type="email"]').eq(0).type('khushbupatel09@synapsehealth.com')
    cy.get('#confirmEmail').type('khushbupatel09@synapsehealth.com')
    cy.get('#password').type('Password123!')
    cy.get('#confirmPassword').type('Password123!')
    cy.get('#mobileNumberWithMask').type(8569991000)
    RegisterPage.nextSubmitButton
  })

  it ('User is able to create account as a Staff Member', ()=>{
    RegisterPage.registerAsStaffMemberRadioButton.click()
    RegisterPage.nextSubmitButton.click()
    cy.get('h2').contains('Facility Look-up').should('be.visible')
    cy.get('#openNPISearchModalButton').click()
    cy.get('#organizationName').type('Lutheran')
    RegisterPage.searchNPIButton.click()
    cy.get('#tableCheckboxId').click()
  })
})
