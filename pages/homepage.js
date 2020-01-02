let homepage = function(){
    let firstInput = element(by.model('first'))
    let secondInput = element(by.model('second'))
    let goButton = element(by.css('[ng-click="doAddition()"]'))

    this.get = function(url){
        browser.get(url);
    } 

    this.enterFirstNumber = function(firstNo){
        firstInput.sendKeys(firstNo)
    }

    this.enterSecondNumber = function(secondNo){
        secondInput.sendKeys(secondNo)
    }

    this.clickGo = function(){
        goButton.click()
    }

    this.verifyResult = function(result){
        let output = element(by.cssContainingText('.ng-binding', result))
        expect(output.getText()).toEqual(result)    
    }
}

module.exports = new homepage()
