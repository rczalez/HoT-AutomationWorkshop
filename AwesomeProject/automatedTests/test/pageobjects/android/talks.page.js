const { $ } = require('@wdio/globals')

/**
 * Page containing specific selectors and methods for a specific page
 */
class TalksPage {
    /**
     * define selectors using getter methods
     */

    // get scrollDown () {
    //     return 
    // }        

    get sectionTalksTitle () {
        return $('//android.widget.TextView[@resource-id="sectionTalksTitle"]');
    }
    
    get learnMoreContainer () {
        return $('//android.view.ViewGroup[@resource-id="learnMoreContainer"]');
    }

    get learnMoreLinkItemTitle1 () {
        return $('//android.widget.TextView[@resource-id="learnMoreLinkItemTitle1"]');
    }

    get learnMoreLinkItemTitle2 () {    
        return $('//android.widget.TextView[@resource-id="learnMoreLinkItemTitle2"]');
    }

    get learnMoreLinkItemTitle3 () {
        return $('//android.widget.TextView[@resource-id="learnMoreLinkItemTitle3"]');
    }

    get learnMoreLinkItemTitle4 () {
        return $('//android.widget.TextView[@resource-id="learnMoreLinkItemTitle4"]');
    }

    get learnMoreLinkItemTitle5 () {
        return $('//android.widget.TextView[@resource-id="learnMoreLinkItemTitle5"]');
    }

    get learnMoreLinkItemTitle6 () {
        return $('//android.widget.TextView[@resource-id="learnMoreLinkItemTitle6"]');
    }

    get learnMoreLinkItemTitle7 () {
        return $('//android.widget.TextView[@resource-id="learnMoreLinkItemTitle7"]');
    }

    get learnMoreLinkItemTitle8 () {
        return $('//android.widget.TextView[@resource-id="learnMoreLinkItemTitle8"]');
    }

   

}

module.exports = new TalksPage();
