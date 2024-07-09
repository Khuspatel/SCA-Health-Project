class ScheduleADemo {
    get calendar(){ return cy.get('.calendly-inline-widget iframe') }
}


export default new ScheduleADemo()