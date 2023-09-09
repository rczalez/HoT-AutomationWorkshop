const { expect } = require('@wdio/globals')
const TalksPage = require('../../pageobjects/android/talks.page')

describe('App talks list section', () => {
    it('Should verify and validate that the content for the Charlas section is visible', async () => {
        
        await driver.pause(3000);
        await $('android=new UiScrollable(new UiSelector().scrollable(true).instance(0)).scrollIntoView(new UiSelector().resourceId("learnMoreLinkItemTitle8").instance(0))');
        await driver.pause(3000);
        await expect(TalksPage.sectionTalksTitle).toHaveTextContaining('Charlas')
        await expect(TalksPage.sectionTalksTitle).toBeDisplayed();
        await expect(TalksPage.learnMoreContainer).toBeDisplayed();
        await expect(TalksPage.learnMoreLinkItemTitle1).toBeDisplayed();
        await expect(TalksPage.learnMoreLinkItemTitle2).toBeDisplayed();
        await expect(TalksPage.learnMoreLinkItemTitle3).toBeDisplayed();
        await expect(TalksPage.learnMoreLinkItemTitle4).toBeDisplayed();
        await expect(TalksPage.learnMoreLinkItemTitle5).toBeDisplayed();
        await expect(TalksPage.learnMoreLinkItemTitle6).toBeDisplayed();
        await expect(TalksPage.learnMoreLinkItemTitle7).toBeDisplayed();
        await expect(TalksPage.learnMoreLinkItemTitle8).toBeDisplayed();
        await expect(TalksPage.learnMoreLinkItemTitle1).toHaveTextContaining('Using a martial art to do tests')
        await expect(TalksPage.learnMoreLinkItemTitle2).toHaveTextContaining('Soy Tester: El reto después de las IAs')
        await expect(TalksPage.learnMoreLinkItemTitle3).toHaveTextContaining('Security Testing')
        await expect(TalksPage.learnMoreLinkItemTitle4).toHaveTextContaining('Tests E2E avanzado con Playwright')
        await expect(TalksPage.learnMoreLinkItemTitle5).toHaveTextContaining('Automatiza tus primeras pruebas con node.js y testcafe')
        await expect(TalksPage.learnMoreLinkItemTitle6).toHaveTextContaining('Riesgos en proyectos Ágiles') 
        await expect(TalksPage.learnMoreLinkItemTitle7).toHaveTextContaining('El líder de pruebas en crisis')
        await expect(TalksPage.learnMoreLinkItemTitle8).toHaveTextContaining('Pruebas de carga tamaño Chihuahua')
        await driver.pause(3000);

    })
})

