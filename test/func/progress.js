'use strict';

const VALUE_ATTR = 'aria-valuenow';

module.exports = {
    '@tags': ['progress'],

    'is shown in `full` mode': browser => {
        browser.url(`${browser.globals.url}/full.html`);
        browser.assert.cssProperty('.progress', 'display', 'block');
        browser.end();
    },

    'is hidden in `list` mode': browser => {
        browser.url(`${browser.globals.url}/list.html`);
        browser.assert.cssProperty('.progress', 'display', 'none');
        browser.end();
    },

    'updates progress on page load (class)': browser => {
        browser.url(`${browser.globals.url}/full.html#2`);
        browser.assert.attributeEquals('.progress', VALUE_ATTR, '50');
        browser.end();
    },

    'updates progress on page load (query)': browser => {
        browser.url(`${browser.globals.url}/list.html?full#2`);
        browser.assert.attributeEquals('.progress', VALUE_ATTR, '50');
        browser.end();
    },

    'updates progress when moving forward': browser => {
        browser.url(`${browser.globals.url}/full.html`);
        browser.assert.attributeEquals('.progress', VALUE_ATTR, '0');
        browser.sendKeys('.send-keys', browser.Keys.ARROW_RIGHT);
        browser.assert.attributeEquals('.progress', VALUE_ATTR, '50');
        browser.sendKeys('.send-keys', browser.Keys.ARROW_RIGHT);
        browser.assert.attributeEquals('.progress', VALUE_ATTR, '100');
        browser.end();
    },

    'updates progress when moving backwards': browser => {
        browser.url(`${browser.globals.url}/full.html#3`);
        browser.assert.attributeEquals('.progress', VALUE_ATTR, '100');
        browser.sendKeys('.send-keys', browser.Keys.ARROW_LEFT);
        browser.assert.attributeEquals('.progress', VALUE_ATTR, '50');
        browser.sendKeys('.send-keys', browser.Keys.ARROW_LEFT);
        browser.assert.attributeEquals('.progress', VALUE_ATTR, '0');
        browser.end();
    },
};
