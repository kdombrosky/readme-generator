// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description 
  <p>${data.description}
  </p>

  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)

  ## Installation 
  <p>${data.installation}
  </p>

  ## Usage
  <p>${data.usage}</p>

  ## Contributing
  <p>${data.contributing}</p>

  ## Tests
  <p>${data.tests}</p>
  
  ## Questions
  <p>${data.usernameQuestion}</p>
  <p>You can reach me at: ${data.emailQuestion} </p>

  ## License
`;
}

module.exports = {renderLicenseBadge, renderLicenseLink, renderLicenseSection, generateMarkdown};
