// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                }else {
                    console.log('Please enter a project title!');
                    return false;
                }
            }
        },
        {
          type: 'input',
          name: 'projectDesc',
          message: 'Provide a description of the project (Required)',
          validate: descriptionInput => {
              if (descriptionInput){
                  return true;
              }else {
                  console.log('You need to enter a project description!');
                  return false;
              }
          }  
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'Provide a description of the installtion process (Required)',
            validate: installtionInput => {
                if (installtionInput){
                    return true;
                } else {
                    console.log('You need to enter an installation process!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'Provide a description of how to use your application (Required)',
            validate: usageInput => {
                if (usageInput){
                    return true;
                } else {
                    console.log('You need to enter a description of how to use your application!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Contributing',
            message: 'Provide guidelines for others to contribute to your application (Required)',
            validate: contributionInput => {
                if (contributionInput){
                    return true;
                } else {
                    console.log('You need to provide guidelines for others to contribute to your application!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Tests',
            message: 'Provide guidelines for how to run the test scripts (Required)',
            validate: testInput => {
                if (testInput){
                    return true;
                } else {
                    console.log('You need to provide guidelines for how to run the test scripts!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Github',
            message: 'What is your github username? (Required)',
            validate: githubInput => {
                if (githubInput){
                    return true;
                } else {
                    console.log('You need to provide your github username!')
                    return false;
                }
            }
        }

    ])
};

            

// TODO: Create a function to write README file
function writeToFile(fileName, template) {
    fs.writeFile(fileName, template, function(err){
        if (err) {
            return console.log(err);
        }
        console.log('Your README is complete!')
    })
}

// TODO: Create a function to initialize app
function init() {
     questions().then(data => {
         //GenerateMarkdown
        const answers = generateMarkdown(data);
        writeToFile('README.md',answers);
    });
}

// Function call to initialize app
init();
