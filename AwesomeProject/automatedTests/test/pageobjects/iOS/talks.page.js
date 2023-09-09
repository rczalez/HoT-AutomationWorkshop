const { $ } = require('@wdio/globals')

/**
 * Page containing specific selectors and methods for a specific page
 */
class TalksPage {
    /**
     * define selectors using getter methods
     */

    get sectionTalksTitle () {
        return $('#sectionTalksTitle');
    }
    
    get learnMoreContainer () {
        return $('#learnMoreContainer');
    }

    get learnMoreLinkItemTitle1 () {
        return $('#learnMoreLinkItemTitle1');
    }

    get learnMoreLinkItemTitle2 () {    
        return $('#learnMoreLinkItemTitle2');
    }

    get learnMoreLinkItemTitle3 () {
        return $('#learnMoreLinkItemTitle3');
    }

    get learnMoreLinkItemTitle4 () {
        return $('#learnMoreLinkItemTitle4');
    }

    get learnMoreLinkItemTitle5 () {
        return $('#learnMoreLinkItemTitle5');
    }

    get learnMoreLinkItemTitle6 () {
        return $('#learnMoreLinkItemTitle6');
    }

    get learnMoreLinkItemTitle7 () {
        return $('#learnMoreLinkItemTitle7');
    }

    get learnMoreLinkItemTitle8 () {
        return $('#learnMoreLinkItemTitle8');
    }

   

}

module.exports = new TalksPage();
