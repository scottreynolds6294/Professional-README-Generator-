// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'ISC':
        return 'https://img.shields.io/badge/license-ISC-blue';
    case 'MIT':
        return 'https://img.shields.io/badge/license-MIT-blue';
    case 'none':
        return '';
    default:
        return '';
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  switch (license) {
  case 'ISC':
      return '[ISC License](https://opensource.org/licenses/ISC)';
  case 'MIT':
      return '[MIT License](https://opensource.org/licenses/MIT)';
  case 'none':
      return '';
  default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return '';
}

return `
## License
This project is licensed under the ${license} license.
For more details, see the ${renderLicenseLink(license)}.
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license) ? `![License](${renderLicenseBadge(data.license)})` : ''}


## Description
${data.motivation}

${data.purpose}

${data.solve}

${data.learn}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Features](#features)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Features
${data.features}

## Contributing
Author: ${data['your-name']}
Other Contributors: ${data.credits}

## Questions
[${data['GitHub-username']}](https://github.com/${data['GitHub-username']})
For additional questions please contact ${data['your-name']} at ${data.email}
`;
}

module.exports = generateMarkdown;
