There are few things which should be done in order to get testing started

1. Install Nodejs through cmd (1)

2. Run http server for nodejs through cmd

3. Open another cmd (2)

4. Install protractor through it

5. Start protractor through cmd (2) 

6. Run another cmd (3)

7. Run protractor file (conf.js)

 


Main files for protractor are conf.js and todo-spec.js

Conf.js contains configuration for protractor and selenium that on which port selenium

gonna run 
todo-spec.js contains all the selenium code which will be used to test the angular login app



Once the code runs it will redirect you to angular app installed in local machine as I 
entered my localhost
 address in todo-spec.js, while you can change accordingly.



It tests the login module's whole scenario by entering right username and password it'll redirect

you to Main page.


When you'll install protractor and nodejs make sure it makes a node_modules folder in the same folder