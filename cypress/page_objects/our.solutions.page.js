class OurSolutions {
    get synapseConnectTab() { return cy.get('#menu-item-2105').contains('Synapse Connect') }
    get synapseEquipTab() { return cy.get('#menu-item-1474').contains('Synapse Equip') }
    get synapseRoomBoardTab() { return cy.get('#menu-item-2106').contains('Synapse Room+Board') }
}

export default new OurSolutions();