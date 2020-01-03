let homepage = require('../pages/homepage.js')

describe('demo calculator tests', () => {
    
    it('addition test', () => {
        homepage.get('http://juliemr.github.io/protractor-demo/')
        
        homepage.enterFirstNumber('4')
        
        homepage.enterSecondNumber('6')

        homepage.clickGo()

        homepage.verifyResult('10')
        
        browser.sleep(2000)

        browser.driver.manage().window().setSize(1536, 824);
        
    });
  });