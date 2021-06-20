// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const licenseArr = [
  { 
    license: 'MIT',
    url: `![license](https://img.shields.io/badge/license-MIT-informational)`
  },
  { 
    license: 'Apache License 2.0',
    url: `![license](https://img.shields.io/badge/license-Apashe%202.0-informational)`
  }
]

function renderLicenseBadge(license) {
  if (license.length === 0) { return ''; }
  // else {
  //   license.forEach(licenseItem => {
  //     console.log(licenseItem);
  //     if(licenseItem === 'MIT') {
  //       badgeArr.push(`https://img.shields.io/badge/license-MIT-informational`);
  //       console.log(badgeArr);
  //     }
  //   if(licenseItem === 'Apache License 2.0') {
  //     badgeArr.push(`https://img.shields.io/badge/license-Apashe%202.0-informational`);
  //       console.log(badgeArr);
  //   }
  //   // if(licenseItem === )
  //   // if(licenseItem === )
  //   // if(licenseItem === )
  //   })
  // }
  else {
    license.filter(item => {
      if(item === 'MIT') {
        return `![license](https://img.shields.io/badge/license-MIT-informational)`;
      }
    })
  }

  const badgeArr = license.filter(item => {
    if()
  })
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.length === 0) { return ''; } 
  else { return `* [License](#license)`}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.length === 0) { return ''; } 
  else {
  return `## License 
This project is licensed with: ${license.join(', ')}
  `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description 
<p>${data.description}</p>
<p>${renderLicenseBadge(data.license)}</p>

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