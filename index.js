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
function writeToFile(fileName, data) {}

// function to initialize program
function init() {

}

// function call to initialize program
init();