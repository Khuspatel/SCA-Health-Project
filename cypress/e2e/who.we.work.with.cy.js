import HomePage from "../page_objects/home.page";
import WhoWeWorkWithPage from "../page_objects/who.we.work.with.page";

let verificationText;

describe('User can access Who we work with page', () => {
  before(() => {
    cy.fixture('verification.json').then((data) => {
      verificationText = data
    });
  })

  beforeEach(() => {
    cy.visit('/');
  });

  it('User is able to access Who We Work With page', () => {
    HomePage.whoWeWorkWithTab.click();
    WhoWeWorkWithPage.prescribersButton.click()
    WhoWeWorkWithPage.prescribers.should('have.text', verificationText.whoWeWorkWith.prescribers)
    WhoWeWorkWithPage.payorsButton.click({ force: true })
    WhoWeWorkWithPage.payors.should('have.text', verificationText.whoWeWorkWith.payors)
    WhoWeWorkWithPage.providersButton.click()
    WhoWeWorkWithPage.providers.should('have.text', verificationText.whoWeWorkWith.providers)
    WhoWeWorkWithPage.patientsButton.click()
    WhoWeWorkWithPage.patients.should('have.text', verificationText.whoWeWorkWith.patients)
    WhoWeWorkWithPage.patientServiceGuideButton.click()
    cy.url().should('include', verificationText.whoWeWorkWith.patientServiceGuide)
  });
})