var data = require("../Fixtures/data.json");
var accInfo = require('../Fixtures/accInfo.json')

var authorizationGoogle = require('../PO/AuthorizationGoogle');
var tagManager = require('../PO/TagManager');

describe("Tag manager homepage test", function () {
    it('Authorization in Google', async function(){
              

        browser.ignoreSynchronization = true;

        browser.driver.manage().window().maximize();
        authorizationGoogle.goToStartPage();
        
        // send login
        browser.driver.wait(function(){

            return element.all(by.name('hiddenPassword')).isEnabled();

            /*
            return authorizationGoogle.inputForgotEmail.isEnabled();

            if use this return - protractor send bug:
            Failed: Cannot read property 'getText' of undefined
            
            */

        }, 5000, 'Error send login').then(function(){
            authorizationGoogle.sendLogin();
            browser.sleep(2000);

            // send password
            browser.driver.wait(function(){

                return element.all(by.id('forgotPassword')).isEnabled();
                //return authorizationGoogle.forgotPassword.isEnabled();

            }, 5000, 'Error send password').then(function(){

                authorizationGoogle.sendPassword();
                browser.sleep(15000);

                // move to
                browser.driver.wait(function(){

                    return element.all(by.css('button.btn')).isEnabled();
                    //return authorizationGoogle.buttonCreateAccount;

                }, 10000, 'Error move to add account')
                    .then(function(){

                        tagManager.moveToAddAccount(); 
                        browser.sleep(15000);

                        /* 
                        expect(tagManager.spanAdministration.getText()).toEqual('АДМИНИСТРИРОВАНИЕ');
                        expect(tagManager.spanTitlesAddNewAccount.getText()).toEqual('Добавление нового аккаунта');
                        expect(tagManager.formAddNewAccount.isPresent()).toBe(true);

                        if use bottow expect's protractor send this bug: 
                        
                        Failed: tagManager.moveToAddAccount is not a function                    
                        
                        */

                        let span = element(by.css('nav > ul > li:nth-child(3) > a > span'));
                        let div = element(by.css('div.gtm-admin-page-content'));
                        let h2 = div.element(by.css('content > h2'));
                        let form = div.element(by.tagName('form'));

                        expect(span.getText()).toEqual('АДМИНИСТРИРОВАНИЕ');
                        expect(h2.getText()).toEqual('Добавление нового аккаунта');
                        expect(form.isPresent()).toBe(true);
                        
                
                
                    });
            });
                
        });       
        
    });
    it('2', async function(){
        browser.sleep(9000);
        browser.ignoreSynchronization = false;
        
       let settingAccount = element.all(by.css('div.blg-form-input')).first();

       let inputNameAccount = settingAccount.element(by.tagName('input'));
       let labelNameAccount = settingAccount.element(by.tagName('label'));

       inputNameAccount.clear();
       inputNameAccount.sendKeys(accInfo.accName);
    
       expect(labelNameAccount.getText()).toEqual('Название аккаунта');
       expect(inputNameAccount.getAttribute('value')).toEqual(accInfo.accName);
    });
    it('3', async function(){
        browser.sleep(9000);

        let checkboxAnonymousInfo = element(by.id('2-form.account.data.shareData'));
        checkboxAnonymousInfo.click();
        
        expect(checkboxAnonymousInfo.getAttribute('class')).toMatch('ng-untouched ng-valid ng-not-empty ng-dirty ng-valid-parse material-checked');      
            
    });

    it('4', function (){
        browser.sleep(9000);
        
       let buttonNextStep = element(by.css('div.gtm-stepper-step-buttons > button'));

        expect(buttonNextStep.getAttribute('disabled')).toEqual(null).then(function(){
            buttonNextStep.click();
            browser.sleep(9000);

            
            let formSettingContainer = element(by.tagName('gtm-container-form'));
            let labelInputFormSettingContainer = formSettingContainer.element(by.css('div.blg-form-input > label'));

            expect(labelInputFormSettingContainer.isPresent()).toBe(true);
            expect(labelInputFormSettingContainer.getText()).toEqual('Название контейнера');
            
        });
            
    });
    it('5', function (){
        browser.sleep(9000);
        
        let formSettingContainer = element(by.tagName('gtm-container-form'));
        let inputFormSettingContainer = formSettingContainer.element(by.tagName('input'));

        inputFormSettingContainer.clear();
        inputFormSettingContainer.sendKeys(accInfo.containerName);

        expect(inputFormSettingContainer.getAttribute('value')).toEqual(accInfo.containerName);

    });

    it('6', function(){
        browser.sleep(9000);
        
        let formPickOperationSystem = element(by.css('gtm-chunky-select > div'));
        let buttonOperationSystemWebSite = formPickOperationSystem.element(by.cssContainingText('.chip',' Веб-сайт '));
        buttonOperationSystemWebSite.click();
        expect(buttonOperationSystemWebSite.getAttribute('class')).toEqual('chip large selector selected');
    });

    it('7',function(){
        var buttonYesRule = element(by.css('.gtm-tos-accept-button'));
        element(by.cssContainingText('button.btn.btn-action','Создать')).click();
        browser.sleep(3000);
           
        
        var header = element(by.css('div.gtm-sheet-header__actions'));
        
        buttonYesRule.click();
                  

    });
    it('8', function(){
        

        browser.driver.wait(function(){
            return element(by.cssContainingText('btn btn-action','Да'));
        }).then(function(){
            var buttonYesPushDiv = element(by.cssContainingText('btn btn-action','Да'));
            buttonYesRule.click();
        });
    });
    it('9', function(){
        browser.sleep('3000');
        browser.get('https://tagmanager.google.com/#/home');
        browser.sleep('7000');
        
        browser.driver.wait(function(){
            return element(by.css('span.wd-account-name')).isEnabled();
        }).then(function(){
            var spanNameContainer = element(by.css('span.wd-account-name')).isEnabled();
            expect(spanNameContainer.getText()).toEqual(accInfo.accName);
        });

        
    });

});