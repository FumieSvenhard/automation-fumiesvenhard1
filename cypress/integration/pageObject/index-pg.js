const loginPageTitle = 'Hotel Accomodation - login page'
const loginFormLabel = 'Please, login!'
const loginTextField='#login'
const passwordTextField='#senha'
const loginFromButton = '#loginBtn'
const errorLoginTextId = '#messagePanel'
const errorLoginText = 'Login and Password Wrong'


function IsLoginPage(cy){
    cy.title().should('eq', loginPageTitle)
}


function PerformLogin(cy, username, password){
    cy.contains(loginFormLabel)
    cy.get(loginTextField).type(username)
    cy.get(passwordTextField).type(password)
    cy.get(loginFromButton).click()
}

function ShowErrorLoginText(cy){

    cy.get(errorLoginTextId).should('contain', errorLoginText)
}
module.exports = {
    PerformLogin,
    IsLoginPage
 }