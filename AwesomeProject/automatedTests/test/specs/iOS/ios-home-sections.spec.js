const { expect } = require('@wdio/globals')
const SectionsPage = require('../../pageobjects/iOS/sections.page')

describe('App description cards', () => {
    it('Should verify and validate that the content sections Descubre, Comparte, Diviertete y Explora are visible ', async () => {

    await expect(SectionsPage.sectionContainer).toBeDisplayed()
    await expect(SectionsPage.sectionItem1).toBeDisplayed()
    await expect(SectionsPage.sectionItem2).toBeDisplayed()
    await expect(SectionsPage.sectionItem3).toBeDisplayed()
    await expect(SectionsPage.sectionItem4).toBeDisplayed()
    await expect(SectionsPage.sectionTitleDescubre).toHaveTextContaining('Descubre')
    await expect(SectionsPage.sectionTitleComparte).toHaveTextContaining('Comparte')
    await expect(SectionsPage.sectionTitleDiviertete).toHaveTextContaining('Diviertete')
    await expect(SectionsPage.sectionTitleExplora).toHaveTextContaining('Explora')
    await driver.pause(3000);
    
    })
})

