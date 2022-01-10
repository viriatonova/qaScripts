async function helloSelenium() {
    let driver = await new Builder().forBrowser('chrome').build();

    await driver.get('https://www.google.com');

    await driver.getTitle(); // => "Google"

    let searchBox = await driver.findElement(By.name('q'));
    let searchButton = await driver.findElement(By.name('btnK'));

    await searchBox.sendKeys('Selenium');
    await searchButton.click();

    await driver.findElement(By.name('q')).getAttribute("value"); // => 'Selenium'

    await driver.quit();
};

module.exports = helloSelenium;