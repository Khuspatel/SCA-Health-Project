class ContactUs {
    get getInTouchTitle() { return cy.get('h1').contains('Get in touch!') }
    get firstNameInputField() { return cy.get('[placeholder="First Name*"]') }
    get lastNameInputField() { return cy.get('[placeholder="Last Name*"]') }
    get emailInputField() { return cy.get('[placeholder="Email*"]') }
    get phoneNumberInputField() { return cy.get('[placeholder="Phone number*"]') }
    get companyNameInputField() { return cy.get('[placeholder="Company"]') }
    get messageInputField() { return cy.get('[placeholder="Your message*"]') }
    get submitButton() { return cy.get('[type="submit"]') }
}

export default new ContactUs();