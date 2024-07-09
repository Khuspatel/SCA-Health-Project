class AboutUs {
    get title() { return cy.get('h1').contains('Get to Know Synapse Health') }
    get exploreValuesButton() { return cy.get('a[class*="et_pb_button_0 "]') }
    get exploreValuesPageTitle() { return cy.get('h1').contains('Our mission, vision and values.') }
    get meetOurLeadersTab() { return cy.get('#menu-item-2841').contains('Meet Our Leaders') }
    get meetOurLeadersTitle() { return cy.get('h1') }
}

export default new AboutUs();