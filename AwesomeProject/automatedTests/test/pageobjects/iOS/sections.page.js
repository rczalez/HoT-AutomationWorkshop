const { $ } = require('@wdio/globals')

/**
 * Page containing specific selectors and methods for a specific page
 */
class SectionsPage {
    /**
     * define selectors using getter methods
     */
    get sectionContainer () {
        return $('#sectionContainer');
    }

    //Cards
    get sectionItem1 () {
        return this.sectionContainer.$('#sectionItem1');
    }

    get sectionItem2 () {
        return $('#sectionItem2');
    }

    get sectionItem3 () {
        return $('#sectionItem3');
    }

    get sectionItem4 () {
        return $('#sectionItem4');
    }

    //Titles of cards

    get sectionTitleDescubre () {
        return $('#sectionTitleDescubre');
    }

    get sectionTitleComparte () {
        return $('#sectionTitleComparte');
    }

    get sectionTitleDiviertete () {
        return $('#sectionTitleDiviertete');
    }

    get sectionTitleExplora () {    
        return $('#sectionTitleExplora');
    }

}

module.exports = new SectionsPage();
