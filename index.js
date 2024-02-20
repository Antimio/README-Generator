const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [{
        name: "Title",
        type: "input",
        message: "What's the title of your project?",
    },
    {
        name: "Description",
        type: "input",
        message: "Please give a description of your project:",
    },
    {
        name: "Installation",
        type: "input",
        message: "How is this application installed?",
    },
    {
        name: "Usage",
        type: "input",
        message: "How can this application be used?",
    },
    {
        name: "License",
        type: "list",
        message: "What license is your project under?:",
        choices: ["MIT Licence", "Apache License 2.0", "GNU General Public License v3.0", "BSD 2-Clause 'Simplified' License", "BSD 3-Clause 'New' or 'Revised' License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal",
            "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense", "No License"
        ],
    },
    {
        name: "Contributing",
        type: "input",
        message: "How can other developers contribute to your project?",
    },
    {
        name: "App_tests",
        type: "input",
        message: "How can this app be tested?",
    },
    {
        name: "Github_name",
        type: "input",
        message: "What's your github username:",
    },
    {
        name: "Email_address",
        type: "input",
        message: "What's ypur email address:",
    },
];

// function to write README file
function writeToFile(fileName, data) { //This funtion will take the name of the file the user wants to create (fileName) and the text (data) that it is to be copied onto said file.

    fs.writeFile(path.join(process.cwd(), fileName), data, err => { //This function is part of the "fs" package and will create the actual file into the current working directory. If there is an error, the console will log it. The fileName and data will be fed to it from the parent function (writeToFile).
        if (err) {
            return console.log(err);
        }
        console.log("Congratulations! Your README file has been created!"); // If there is no error, this message will be logged.
    });
}

// function to initialize program
function init() { //

    inquirer
        .prompt(questions) //This function is a promisse that uses the "inquirer" package. The argument passed is the array of questions.
        .then((input) => { //Input is the collection of answers given by the user. This is in the form of an object.
            writeToFile("README.md", generateMarkdown(input)); // The "input" object is passed as an argument onto the generateMarkdow function and completes the string literal to form the desired file. The writeToFile will create the file and call it "README.md".
        });
}


// function call to initialize program
init();