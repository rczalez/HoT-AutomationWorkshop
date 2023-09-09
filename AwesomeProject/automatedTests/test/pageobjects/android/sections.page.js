const { $ } = require('@wdio/globals')

/**
 * Page containing specific selectors and methods for a specific page
 */
class SectionsPage {
    /**
     * define selectors using getter methods
     */
    get sectionContainer () {
        return $('//android.view.ViewGroup[@resource-id="sectionContainer"]');
    }

    //Cards
    get sectionItem1 () {
        return this.sectionContainer.$('//android.view.ViewGroup[@resource-id="sectionItem1"]');
    }

    get sectionItem2 () {
        return $('//android.view.ViewGroup[@resource-id="sectionItem2"]');
    }

    get sectionItem3 () {
        return $('//android.view.ViewGroup[@resource-id="sectionItem3"]');
    }

    get sectionItem4 () {
        return $('//android.view.ViewGroup[@resource-id="sectionItem4"]');
    }

    //Titles of cards

    get sectionTitleDescubre () {
        return $('//android.widget.TextView[@resource-id="sectionTitleDescubre"]');
    }

    get sectionTitleComparte () {
        return $('//android.widget.TextView[@resource-id="sectionTitleComparte"]');
    }

    get sectionTitleDiviertete () {
        return $('//android.widget.TextView[@resource-id="sectionTitleDiviertete"]');
    }

    get sectionTitleExplora () {    
        return $('//android.widget.TextView[@resource-id="sectionTitleExplora"]');
    }

}

module.exports = new SectionsPage();
