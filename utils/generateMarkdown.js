// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license.length === 0) { return ''; }

  // Add badge icon if user selected badge 
  let badgeArr = [];
  for(i=0; i<license.length;i++) {
    if(license[i] === 'MIT') {
      badgeArr.push(`![MIT](https://img.shields.io/badge/license-MIT-informational)`);
    }
    if(license[i] === 'Apashe License 2.0') {
      badgeArr.push(`![Apashe](https://img.shields.io/badge/license-Apashe%202.0-informational)`);
    }
    if(license[i] === 'ISC') {
      badgeArr.push(`![ISC](https://img.shields.io/badge/license-ISC-informational)`);
    }
    if(license[i] === 'GNU GPLv3') {
      badgeArr.push(`![GNU GPLv3](https://img.shields.io/badge/license-MITV3-informational)`);
    }
    if(license[i] === 'GNU GPLv2') {
      badgeArr.push(`![GNU GPLv2](https://img.shields.io/badge/license-MITV2-informational)`);
    }
  }

  return `${badgeArr.join(' ')}`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.length === 0) { return ''; } 
  else { 
    return `* [License](#license)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.length === 0) { return ''; } 
  else {
  return `## License 
This project is licensed with: ${license.join(', ')}`}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description 
${renderLicenseBadge(data.license)}<br/>
${data.description}

## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
${renderLicenseLink(data.license)} 

## Installation 
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
My GitHub: [${data.usernameQuestion}](https://github.com/${data.usernameQuestion}) <br/>
You can reach me at: <${data.emailQuestion}> 

${renderLicenseSection(data.license)} 
`;
}

//${renderLicenseBadge()} 
module.exports = {renderLicenseBadge, renderLicenseLink, renderLicenseSection, generateMarkdown};