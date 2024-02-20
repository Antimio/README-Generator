// function to generate markdown for README
function generateMarkdown(data) {

    return `
# ${data.Title}
  
## Description
  
${data.Description}
  
## Table of Contents
  
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#Uicense)
- [Contributing](#Contributing)
- [Tests](#App_tests)
- [Questions](#Questions)
  
## Installation
  
${data.Installation}
  
## Usage
  
${data.Usage}
  
## License
  
This project is licensed under the ${data.License}.
  
## Contributing
  
${data.Contributing}
  
## Tests
  
${data.App_tests}
  
## Questions
  
For any questions, please contact me at ${data.Email_address} or visit my GitHub profile https://github.com/${data.Github_name}.

   `;
}

module.exports = generateMarkdown;