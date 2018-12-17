var AutorizationGoogle = function() {
  var data = require("../Fixtures/data.json");
    
  var loginDiv = element.all(by.css('div.aXBtI.Wic03c')).first(); //father input
  var inputLogin = loginDiv.element(by.id('identifierId'));
        
  var passwordDiv = element.all(by.css('div.aCsJod.oJeWuf')).first(); //father input
  var inputPassword = passwordDiv.element(by.name('password'));

  var inputForgotEmail = element.all(by.name('hiddenPassword')).first();
  var forgotPassword = element.all(by.id('forgotPassword')).first();
  var buttonCreateAccount = element.all(by.css('button.btn')).first();

  var spanAdministration = element(by.css('nav > ul > li:nth-child(3) > a > span'));

  var divAddNewAccount = element(by.css('div.gtm-admin-page-content'));
  var spanTitlesAddNewAccount = divAddNewAccount.element(by.css('content > h2'));
  var formAddNewAccount = divAddNewAccount.element(by.tagName('form'));
  
  this.goToStartPage = function(){
    browser.get('https://tagmanager.google.com/#/admin/accounts/create');
  };

  this.sendLogin = function(){
    let elm = element.all(by.name('hiddenPassword'));
    let promise = elm.isEnabled();
    browser.wait(promise, 5000, 'Server should start within 5 seconds');

    let btnInput = element(by.id('identifierNext'));

    inputLogin.clear();
    inputLogin.sendKeys(data.user.login);
    btnInput.click();
            
    console.log('Send Login');
  };

  this.sendPassword = function(){
    let btnPassword = element(by.id('passwordNext'));

    inputPassword.clear();                
    inputPassword.sendKeys(data.user.password);                
    btnPassword.click();

    console.log('Send Password');
  };
  
};
module.exports = new AutorizationGoogle();