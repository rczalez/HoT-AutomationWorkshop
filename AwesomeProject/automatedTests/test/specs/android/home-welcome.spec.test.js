const { expect } = require('@wdio/globals')
const WelcomePage = require('../../pageobjects/android/welcome.page')

describe('Welcome UI elements', () => {
    it('Should verify that background image and welcome text are visible', async () => {
      
       await expect(WelcomePage.appWelcomeText).toBeDisplayed()
       await expect(WelcomePage.appBackgroundImage).toBeDisplayed()
       await driver.pause(3000)
       
    })
})

