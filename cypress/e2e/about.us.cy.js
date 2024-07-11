import AboutUsPage from "../page_objects/about.us.page"
import HomePage from "../page_objects/home.page";
//verification variable

let verificationText;

describe('User is able to access menu item', () => {
  before(() => {
    cy.fixture('verification.json').then((data) => {
      verificationText = data
    });
  })

  beforeEach(() => {
    cy.visit('/');
  });

  it('User is able to access About Us page', () => {
    HomePage.aboutUsTab.click()
    AboutUsPage.title.should('be.visible')
    AboutUsPage.exploreValuesButton.click()
    AboutUsPage.exploreValuesPageTitle.should('have.text', verificationText.aboutUs.exploreValuesPageTitle)
    HomePage.aboutUsTab.click()
    AboutUsPage.meetOurLeadersTab.click({ force: true })
    AboutUsPage.meetOurLeadersTitle.should('be.visible', verificationText.aboutUs.meetOurLeadersTitle)
  })
})

