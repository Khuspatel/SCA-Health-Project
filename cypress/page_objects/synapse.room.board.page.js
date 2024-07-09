class SynapseRoomBoard {
    get synapseRoomBoardLogo() { return cy.get('[alt="Synapse Room+Board"]') }
    get synapseRoomBoardPortalButton() { return cy.get('[class*="et_pb_button_0 et_pb_bg_layout_light"]').invoke('removeAttr', 'target') }
    get userNameInputField() { return cy.get('[placeholder="Username"]') }
    get passwordInputField() { return cy.get('[type="password"]') }
    get submitButton() { return cy.get('[class*="login-form__action _login _fw-500 _full-width mat-flat-button"]') }
}

export default new SynapseRoomBoard();