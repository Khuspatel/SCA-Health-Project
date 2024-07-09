class news{
get newsPageTitle(){return cy.get('h1').contains('Stay Up to Date with Synapse Health')}
}
export default new news()