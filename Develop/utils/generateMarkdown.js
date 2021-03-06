// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None'){
    return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)]`;
  }
  return '';
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !=='None'){
    if(license === 'Apache'){
      return '(https://opensource.org/licenses/Apache-2.0)';
    }
    if(license === 'Boost'){
      return '(https://www.boost.org/LICENSE_1_0.txt)';
    }
    if(license === 'IBM'){
      return '(https://opensource.org/licenses/IPL-1.0)';
    }
    if(license === 'MIT'){
      return '(https://opensource.org/licenses/MIT)';
    }
  }
  return '';
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license!=='None'){
  return  `## License

  
  This project utilizes these license:
  ${license}
  `
}
return '';
}
// A function to generate markdown for README
function generateMarkdown(data) {
  if (renderLicenseSection(data.license)!==''){
  return `# ${data.projectName}
  ## Description
  ${data.projectDesc}

  # Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contributing](#contributing)
  4. [Tests](#tests)
  5. [License](#license)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

  

  
  ${data.github}
`;
}else{
  return `# ${data.projectName}
  ## Description
  ${data.projectDesc}

  # Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contributing](#contributing)
  4. [Tests](#tests)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

  

  
  ${data.github}
`;
}
}

module.exports = generateMarkdown;
