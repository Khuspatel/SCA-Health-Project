import HomePage from "../page_objects/home.page";
import ContactUsPage from "../page_objects/contact.us.page";
import { faker } from '@faker-js/faker';

let user;
const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const email = faker.internet.email();
const phoneNumber = faker.string.numeric(10)

describe('User can access Contact Us menu item', () => {
  before(() => {
    cy.fixture('userCredentials.json').then((data) => {
      user = data
    });
  })

  beforeEach(() => {
    cy.visit('/');
  });

  it('User is able use contact us form', () => {
    HomePage.contactUsTab.click();
    ContactUsPage.getInTouchTitle.should('be.visible')
    ContactUsPage.firstNameInputField.type(firstName)
    ContactUsPage.lastNameInputField.type(lastName)
    ContactUsPage.emailInputField.type(email)
    ContactUsPage.phoneNumberInputField.type(phoneNumber)
    ContactUsPage.companyNameInputField.type(user.contactUs.company)
    ContactUsPage.messageInputField.type(user.contactUs.message)
    //Did not apply submit button to avoid spamming your messages.
    ContactUsPage.submitButton.should('be.visible')
  });
})
