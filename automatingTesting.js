const { Builder, By, Key, until } = require('selenium-webdriver');

async function runTest() {
    let options = new chrome.Options();
    options.addArguments('--headless'); 

    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

    try {
        await driver.get('https://e-commerce-clothess.netlify.app');

        await driver.findElement(By.id('/html/body/div[1]/div/div[3]/header/div[2]/div/div/div[3]/nav/ul/li[2]/a')).click();

        await driver.wait(until.elementLocated(By.id('result')), 5000);

    } finally {
        await driver.quit();
    }
}

runTest();