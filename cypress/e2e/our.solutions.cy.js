import HomePage from "../page_objects/home.page";
import OurSolutionsPage from "../page_objects/our.solutions.page";
import SynapseConnectPage from "../page_objects/synapse.connect.page";
import SynapseRoomBoardPage from "../page_objects/synapse.room.board.page";

let verificationText;
let user;

describe('User can access our solutions menu item', () => {
     before(() => {
      cy.fixture('userCredentials.json').then((data)=>{
        user = data
      })
      cy.fixture('verification.json').then((data) => {
         verificationText = data
     });
     });

  beforeEach(() => {
    cy.visit('/');
  });

  it('User is able to access Synapse Connect', () => {
    HomePage.ourSolutionsTab.click()
    OurSolutionsPage.synapseConnectTab.click({force:true})
    SynapseConnectPage.synapseConnectPageTitle.should('be.visible')
    SynapseConnectPage.synapseConnectTitle.should('be.visible', verificationText.ourSolutions.synapseConnectTitle)
    SynapseConnectPage.prescribersButton.click()
    SynapseConnectPage.prescribers.should('have.text', verificationText.ourSolutions.prescribers)
    SynapseConnectPage.payorsButton.click()
    SynapseConnectPage.payors.should('have.text', verificationText.ourSolutions.payors)
    SynapseConnectPage.providersButton.click()
    SynapseConnectPage.providers.should('have.text', verificationText.ourSolutions.providers)
    SynapseConnectPage.patientsButton.click()
    SynapseConnectPage.patients.should('have.text', verificationText.ourSolutions.patients)
    SynapseConnectPage.patientServiceGuideButton.click()
    cy.url().should('include', verificationText.ourSolutions.patientServiceGuide)
  });


  it('User is able to access Synapse Equip',()=>{
    HomePage.ourSolutionsTab.click()
    OurSolutionsPage.synapseEquipTab.click({force:true})
  })

  it('User is able to access Synapse Room+Board', ()=>{
    OurSolutionsPage.synapseRoomBoardTab.click({force:true})
    SynapseRoomBoardPage.synapseRoomBoardLogo.should('be.visible', user.login.logo)
    SynapseRoomBoardPage.synapseRoomBoardPortalButton.click()
    SynapseRoomBoardPage.userNameInputField.type(user.login.userName)
    SynapseRoomBoardPage.passwordInputField.type(user.login.password)
    SynapseRoomBoardPage.submitButton.should('be.visible')
  })
})