# UI-tech-challenge

## Project Overview :
This project uses Page Object Pattern.
It uses playwright for automation and html reporter to create HTML report files.

## Technologies Used: 
1.	Programming Language : Javascript
2.	Build Tool : npm
3.	Automation Tool used : playwright
4.	Reporting tool : html reporter

## Installation
After cloning the project from the repository, make sure you run `npm install` to install all node modules. There should be no further installation required.

`npm run test` is the command to run the test

## Project Structure :
As we have used Page Object Model, we have created separate files for the pages and for the tests.
1.	tests folder contains all the test files .
2.	page-objects :  all the pages are inside the pageobjects folder
3.	playwright-report : Report are created in the `./playwright-report` folder. When a test completes, it created a folder named reports if none exists. This folder will contains a subfolder of screenshots taken when a test fails and an HTML report file.
 
#### All the tests are run in parallel. Upto 5 tests can be run parallely.

## Headless Execution : 
Tests are by default run in headless mode. In order to run tests in non-headless, append --headed in the test run command


 
 
