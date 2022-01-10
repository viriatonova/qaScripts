const {Builder, By, Key, until} = require('selenium-webdriver');

const service = new chrome.ServiceBuilder('./src/webdrivers/chromedriver').build();
const driver =  new Builder().forBrowser('chrome').setChromeService(service).build();



(async function helloSelenium() {

    await driver.get('https://www.google.com');

    await driver.getTitle(); // => "Google"

    let searchBox = await driver.findElement(By.name('q'));
    let searchButton = await driver.findElement(By.name('btnK'));

    await searchBox.sendKeys('Selenium');
    await searchButton.click();

    await driver.findElement(By.name('q')).getAttribute("value"); // => 'Selenium'

    await driver.quit();
})();