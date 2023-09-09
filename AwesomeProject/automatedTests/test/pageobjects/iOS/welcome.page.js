const { $ } = require('@wdio/globals')
/**
 * Page containing specific selectors and methods for a specific page
 */

class WelcomePage {
    /**
     * Define selectors using getter methods
     */
    get appWelcomeText () {
        return $('#appWelcomeText');
    }

    get appBackgroundImage () {
        return $('#appBackgroundImage');
    }
}

module.exports = new WelcomePage();
