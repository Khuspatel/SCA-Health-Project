class register{
get createAccountLink(){return cy.get('[id="signupLink"]').contains('Create Account') }
get registerAsOrderingPhysicianRadioButton (){return cy.get('#matRadioButtonPhysician')}
get registerAsReferralSourceRadioButton (){return cy.get('#matRadioButtonReferralSource')}
get registerAsStaffMemberRadioButton(){return cy.get('#matRadioButtonStaffMember')}
get nextSubmitButton(){return cy.get('#chooseWayToGetCode')}
get lookUpNPINumberTitle(){return cy.get('h2').contains('Lookup Your NPI Number')}
get lookUpNPINumberButton (){return cy.get('#openNPISearchModalButton')}
get npiNumberInputField (){return cy.get('#npiNumber')}
get firstNameInputField(){return cy.get('#firstName')}
get lastNameInputField (){return cy.get('#lastName')}
get cityNameInputField (){return cy.get('#city')}
get stateNameInputField(){return cy.get('#state') }
get searchNPIButton(){return cy.get('#searchNPIAction')}
}

export default new register()