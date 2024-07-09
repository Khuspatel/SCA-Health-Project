import HomePage from "../page_objects/home.page";
import LoginPage from "../page_objects/login.page";
import SynapseRoomBoardPage from "../page_objects/synapse.room.board.page";

let user;

describe('User is able to access menu item', () => {
    before(() => {
      cy.fixture('userCredentials.json').then((data)=>{
        user = data
      })
    })

  beforeEach(() => {
    cy.visit('/');
    HomePage.loginButton.click()
    LoginPage.loginPageTitle.should('be.visible')
  });

  it('User is able to login using Synapse Connect', () => {
    LoginPage.synapseConnectLogin.click()
    LoginPage.synapseConnectUsernameInputField.type(user.login.userName)
    LoginPage.synpaseConnectPasswordInputField.type(user.login.password)
    LoginPage.synpaseConnectSubmitButton.should('be.visible')
  });

  it('User is able to login using Synapse Fulfill', () => {
    LoginPage.synpaseFufillLogin.click()
   LoginPage.synpaseFulfillUsernameInputField.type(user.login.userName)
    LoginPage.synpaseFulfillPasswordInputField.type(user.login.password)
   LoginPage.synpaseFulfillSubmitButton.should('be.visible')
  });

  it('User is able to login using Synapse Equip', ()=>{
    LoginPage.synpaseEquipLogin.click()
    LoginPage.synpaseEquipUsernameInputField.type(user.login.userName)
    LoginPage.synpaseEquipPasswordInputField.type(user.login.password)
    LoginPage.synapseEquipSubmitButton.should('be.visible')
  })

  it('User is able to login using Synapse Room+Board', ()=>{
    LoginPage.synpaseRoomBoardLogin.click()
    SynapseRoomBoardPage.userNameInputField.type(user.login.userName)
    SynapseRoomBoardPage.passwordInputField.type(user.login.password)
    SynapseRoomBoardPage.submitButton.should('be.visible')
  })
})