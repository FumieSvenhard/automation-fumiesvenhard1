import * as loginFunc from "./pageObject/index-pg"
import * as dashboardFunc from "./pageObject/dashboard-pg"
const targets = require('../targets/targets')


describe('frontend testsuite', function() {
    beforeEach(()=> {
       cy.visit(targets.baseUrl) //change base_Url till baseUrl
       loginFunc.IsLoginPage(cy)    // deleatte "S" at func
   })

   it('TC1 Login and logout with user information', function() {

      loginFunc.PerformLogin(cy, targets.username, targets.password)
      dashboardFunc.IsDashboardPage(cy)
      dashboardFunc.PerformLogout(cy)
      loginFunc.IsLoginPage(cy)

   })


    it('TC2 - Login with wrong user name', function() {

        loginFunc.PerformLogin(cy, targets.wrongUsername, targets.password)
        loginFunc.ShowErrorLoginText(cy)

    })

    it('TC3 - Login with wrong password', function() {

        loginFunc.PerformLogin(cy, targets.username, targets.wrongPassword)
        loginFunc.ShowErrorLoginText(cy)

    })

    it('TC4 - Login with wrong user information', function() {
        
        loginFunc.PerformLogin(cy, targets.wrongUsername, targets.wrongPassword)
        loginFunc.ShowErrorLoginText(cy)

    })

    it('TC5 - Function on the Bedroom page', function() {
        loginFunc.PerformLogin(cy, targets.username, targets.password)
        dashboardFunc.IsDashboardPage(cy)
        dashboardFunc.PerformClickBedroom(cy)
        dashboardFunc.PerformLogout(cy)
        loginFunc.IsLoginPage(cy)
    })



})
