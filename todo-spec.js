describe('login page', function() {
    browser.driver.get('http://localhost:8080/#!/login');
    it('should render login page', function() {

      // Checking the current url
      var currentUrl = browser.driver.getCurrentUrl();
      expect(currentUrl).toMatch('/login');
    });
    it('should sign in', function() {

      // Find page elements
      var userNameField = browser.driver.findElement(By.id('username'));
      var userPassField = browser.driver.findElement(By.id('password'));
      var userLoginBtn  = browser.driver.findElement(By.id('loginbtn'));

      // Fill input fields
      userNameField.sendKeys('test@user.com');
      userPassField.sendKeys('1234');

      // Ensure fields contain what we've entered
      expect(userNameField.getAttribute('value')).toEqual('sajid');
      expect(userPassField.getAttribute('value')).toEqual('sajid');

      // Click to sign in - waiting for Angular as it is manually bootstrapped.
      userLoginBtn.click().then(function() {
        browser.waitForAngular();
        expect(browser.driver.getCurrentUrl()).toMatch('http://localhost:8080/#!/');
      }, 10000);
    });
});