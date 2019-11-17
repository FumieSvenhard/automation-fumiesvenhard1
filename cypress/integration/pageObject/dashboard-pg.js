const dashboardPageTitle = 'Dashboard'
const logoutToggleDropdown = '.dropdown-toggle'
const logoutDropdownBtn = '.dropdown-menu.dropdown-user'
const bedroomTextBtn = '#side-menu > :nth-child(3) > a'
const bedroomLogo = '.glyphicon.glyphicon-bed.fa-fw'
const listTextClass = 'h1[class="page-header"]'
const listText = 'List'


function IsDashboardPage(cy){
    cy.title().should('eq', dashboardPageTitle)
}

function PerformLogout(cy){
    cy.get(logoutToggleDropdown).click()
    cy.get(logoutDropdownBtn).click()
}

function PerformClickBedroom(cy){
    cy.log('Click on logo')
    cy.get(bedroomLogo).click()
    cy.get(listTextClass).should('contain', listText)
    cy.log('Click on text')
    cy.get(bedroomTextBtn).click()
    cy.get(listTextClass).should('contain', listText)
}


module.exports = {
    IsDashboardPage, 
    PerformLogout,
    PerformClickBedroom
    
}