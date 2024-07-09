class login{
get loginPageTitle () {return cy.get('h1').contains('Plug in to Synapse Health')}
get synapseConnectLogin () {return cy.get('[class*="et_pb_button_1 "]').invoke('removeAttr', 'target')}
get synapseConnectUsernameInputField (){return cy.get('#dmeposUsername')}
get synpaseConnectPasswordInputField (){return cy.get('#dmeposPassword')}
get synpaseConnectSubmitButton (){return cy.get('#loginSubmitBtn')}
get synpaseFufillLogin (){return cy.get('[class*="et_pb_button_2 "]').invoke('removeAttr', 'target')}
get synpaseFulfillUsernameInputField(){return  cy.get('#fullfill-username')}
get synpaseFulfillPasswordInputField(){return cy.get('#fullfill-password')}
get synpaseFulfillSubmitButton(){return cy.get('[type="submit"]')}
get synpaseEquipLogin(){return cy.get('[class*="et_pb_button_0 "]').invoke('removeAttr', 'target')}
get synpaseEquipUsernameInputField(){return cy.get('[name="login"]')}
get synpaseEquipPasswordInputField(){return cy.get('[name="password"]') }
get synapseEquipSubmitButton(){return cy.get('[type="submit"]')}
get synpaseRoomBoardLogin (){return cy.get('[class*="et_pb_button_3 "]').invoke('removeAttr', 'target')}
}

export default new login()