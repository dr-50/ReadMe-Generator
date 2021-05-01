// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
        }
    ])
    .then((projectName, projectDesc=>{
            const template =`# ${projectName}
            ## Description
            ${projectDesc}`
        }
    ));
};

            

// TODO: Create a function to write README file
function writeToFile(projectName, template) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
//init();
