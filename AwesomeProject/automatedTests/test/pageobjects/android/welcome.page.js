const { $ } = require('@wdio/globals')
/**
 * Page containing specific selectors and methods for a specific page
 */

class WelcomePage {
    /**
     * Define selectors using getter methods
     */
    get appWelcomeText () {
        return $('//android.widget.TextView[@resource-id="appWelcomeText"]');
    }

    get appBackgroundImage () {
        return $('//android.widget.ImageView[@resource-id="appBackgroundImage"]');
    }
}

module.exports = new WelcomePage();
