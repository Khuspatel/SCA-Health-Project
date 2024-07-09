class WhoWeWorkWith {
    get prescribersButton() { return cy.get('[title="Prescribers"]') }
    get payorsButton() { return cy.get('h4[class="et_pb_module_header"]').eq(0) }
    get providersButton() { return cy.get('h4[class="et_pb_module_header"]').eq(1) }
    get patientsButton() { return cy.get('h4[class="et_pb_module_header"]').eq(2) }
    get patientServiceGuideButton() { return cy.get('a[class="et_pb_button et_pb_button_0 et_pb_bg_layout_light"]').invoke('removeAttr', 'target') }
    get prescribers() { return cy.get('h1[class="et_pb_module_header"]') }
    get providers() { return cy.get('h1[class="et_pb_module_header"]') }
    get payors() { return cy.get('h1[class="et_pb_module_header"]') }
    get patients() { return cy.get('h1[class="et_pb_module_header"]') }
}

export default new WhoWeWorkWith();