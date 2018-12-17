var TagManager = function() {
    var data = require("../Fixtures/data.json");

    var inputForgotEmail = element.all(by.name('hiddenPassword')).first();
    var forgotPassword = element.all(by.id('forgotPassword')).first();
    var buttonCreateAccount = element.all(by.css('button.btn')).first();

    var spanAdministration = element(by.css('nav > ul > li:nth-child(3) > a > span'));

    var divAddNewAccount = element(by.css('div.gtm-admin-page-content'));
    var spanTitlesAddNewAccount = divAddNewAccount.element(by.css('content > h2'));
    var formAddNewAccount = divAddNewAccount.element(by.tagName('form'));

    this.moveToAddAccount = function(){
        let buttonAddAccount = element(by.className('btn'));
        buttonAddAccount.click();
    };

    //2
    var settingAccount = element.all(by.css('div.blg-form-input')).first();
    var inputNameAccount = settingAccount.element(by.tagName('input'));
    var labelNameAccount = settingAccount.element(by.tagName('label'));

    this.sendCompanyName = function(name){
        let inputNameAccount = settingAccount.element(by.tagName('input'));
        let labelNameAccount = settingAccount.element(by.tagName('label'));

        inputNameAccount.clear();
        inputNameAccount.sendKeys(name);
    };

    //3
    var checkboxAnonymousInfo = element(by.id('2-form.account.data.shareData'));

    //4
    var buttonNextStep = element(by.css('div.gtm-stepper-step-buttons > button'));
    var formSettingContainer = element(by.tagName('gtm-container-form'));
    var labelInputFormSettingContainer = formSettingContainer.element(by.css('div.blg-form-input > label'));

    //5
    //  use "formSettingContainer" from 4
    var inputFormSettingContainer = formSettingContainer.element(by.tagName('input'));

    //6
    var formPickOperationSystem = element(by.css('gtm-chunky-select > div'));
    var buttonOperationSystemWebSite = formPickOperationSystem.element(by.cssContainingText('.chip',' Веб-сайт '));

};
module.exports = new TagManager();