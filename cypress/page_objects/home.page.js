class HomePage {
   get whoWeWorkWithTab() { return cy.get('[id="menu-item-2122"]').eq(0) }
   get aboutUsTab() { return cy.get('#menu-item-805').eq(0) }
   get bookADemoButton(){ return cy.get('[class*="et_pb_button et_pb_button_2_tb_header custom_btn_header btn_book_demo "]')}
   get contactUsTab (){return cy.get('#menu-item-555')}
   get ourSolutionsTab () {return cy.get('#menu-main-menu')}
   get newsTab(){return cy.get('#menu-item-3538')}
   get loginButton (){return cy.get('[class*="et_pb_button et_pb_button_1_tb_header"]').contains('Log In')}
}

export default new HomePage();