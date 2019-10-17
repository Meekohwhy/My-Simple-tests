const{Builder,By,Key,util} = require("selenium-webdriver");
async function example (){
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://google.com"); //Pobranie adresu
    await driver.findElement(By.name("q")).sendKeys("selenium",Key.RETURN);
}
example();