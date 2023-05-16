const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

const searchGoogle = async () => {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver
            .manage()
            .window()
            .maximize();
        await driver.manage().deleteAllCookies();

        await driver.get('https://www.google.com/');
        if (await driver.findElement(By.className('lnXdpd'))) {
            console.log("FOUND LOGO!");
        } else {
            console.log("LOGO NOT FOUND!");
        }
        if (await driver.findElement(By.name('q'))) {
            console.log("FOUND SEARCH!");
        } else {
            console.log("SEARCH NOT FOUND!");
        }
        if (await driver.findElement(By.name('btnK'))) {
            console.log("FOUND SEARCH BUTTON!");
        } else {
            console.log("SEARCH BUTTON NOT FOUND!");
        }
        if (await driver.findElement(By.className('gb_t'))) {
            console.log("FOUND GMAIL!");
        } else {
            console.log("GMAIL NOT FOUND!");
        }


    } catch (err) {
        console.error(err);
    } finally {
        console.log('complete google search!');
        driver.quit();
    }
};
const searchWIKI = async () => {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver
            .manage()
            .window()
            .maximize();
        await driver.manage().deleteAllCookies();

        await driver.get('https://uk.wikipedia.org/wiki/%D0%93%D0%BE%D0%BB%D0%BE%D0%B2%D0%BD%D0%B0_%D1%81%D1%82%D0%BE%D1%80%D1%96%D0%BD%D0%BA%D0%B0');


        await driver.findElement(By.id("searchInput")).click();
        await driver.findElement(By.id("searchInput")).sendKeys("Київ");
        await driver.findElement(By.id("searchButton")).click();
        await driver.wait(until.elementLocated(By.css(".infobox")), 30000);

        if (await driver.findElement(By.xpath("//img[@alt=\'COA of Kyiv Kurovskyi.svg\']"))) {
            console.log("FOUND COA!");
        } else {
            console.log("NOT FOUND COA!");
        }
        if (await driver.findElement(By.xpath("//a[contains(text(),\'Населення\')]"))) {
            console.log("FOUND PEOPLE!");
        } else {
            console.log("NOT FOUND PEOPLE!");
        }
        if (await driver.findElements(By.xpath("//th[contains(.,\'Квіт.\')]"))) {
            console.log("FOUND TEMP!");
        } else {
            console.log("NOT FOUND TEMP!");
        }
        if (await driver.findElements(By.xpath("//span[contains(.,\'Епідемія коронавірусу\')]"))) {
            console.log("FOUND COVID!");
        } else {
            console.log("NOT FOUND COVID!");
        }
        if (await driver.findElements(By.xpath("//a[contains(text(),\'Густота населення\')]"))) {
            console.log("FOUND PEOPLE NUMS!");
        } else {
            console.log("NOT FOUND PEOPLE NUMS!");
        }
        const elements = await driver.findElements(By.xpath("//ul[contains(.,\'Золоті ворота\') and contains(.,\'Будинок з химерами\')]//li"));
        if (elements.length > 20) {
            console.log("Cultural monuments > 20");
        } else {
            console.log("Cultural monuments < 20");
        }
        

    } catch (err) {
        console.error(err);
    } finally {
        console.log('complete wiki search!');
        driver.quit();
    }
};

searchGoogle();
searchWIKI();