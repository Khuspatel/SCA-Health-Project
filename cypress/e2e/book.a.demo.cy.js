import HomePage from "../page_objects/home.page";
import { faker } from '@faker-js/faker';

let user;
const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const email = faker.internet.email();
const phoneNumber = faker.string.numeric(10);
const address = faker.location.streetAddress({ useFullAddress: true })
const dmeNumber = faker.number.float({ min: 1, max: 8 })


describe('User can access our solutions menu item', () => {
  before(() => {
    cy.fixture('userCredentials.json').then((data) => {
      user = data
    })
  })

  beforeEach(() => {
    cy.visit('/');
  });

  it('User is Book a Demo', () => {
    const formDetails = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      guestCount: user.formDetails.guestCount,
      occupation: user.formDetails.occupation,
      organization: user.formDetails.organization,
      address: address,
      dmeNumber: dmeNumber,
      queryMessage: user.formDetails.queryMessage,
      phoneNumber: phoneNumber
    };
    HomePage.bookADemoButton.click()
    cy.iframeFormInteraction(formDetails);
  });
})
