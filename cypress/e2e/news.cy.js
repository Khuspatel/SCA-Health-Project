import HomePage from "../page_objects/home.page";
import newsPage from "../page_objects/news.page";

describe('User can access news page', () => {
  before(() => {
    cy.visit('/');
  });

  it('User is able to access synapse health news', () => {
    HomePage.newsTab.click()
    newsPage.newsPageTitle.should('be.visible')
  });
})
