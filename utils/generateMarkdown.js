
//Function that returns the license badge and link based on the user choice for license
function renderLicenseBadge(License) {
  switch (License){
    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'Boost':
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    case 'BSD 3-Clause':
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    case 'BSD 2-Clause':
      return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
    default:
      return '';
    }
}
// To return the license section
function renderLicenseSection(License) {
  if (License==='none') {
    return "";
  }else {
    return `
  All resources provided by this project are avaiable for free use and distribution,subject to the term of  ${License} license.
  (c)Copyright ${new Date().getFullYear()} Sabin
    `
  }
}
 
// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.License)}
  # Title
  ${data.ProjectName}
  
  ## Description
  ${data.Description}
  
  ## Table of Contents
  
  - [Installation](#Installation)
  - [Usage](#usage)
  - [Contributor](#contributor)
  - [GithubName](#githubname)
  - [EmailAddress](#emailaddress)
  - [Questions](#questions)
  - [License](#license)
  
  ## Installation
  ${data.Installation}
  
  ## Usage
  ${data.Usage}

  
  ## Contributor
  ${data.Contributor}
  
  ## GithubName
  ${data.GithubName}
  
  ## EmailAddress
  ${data.EmailAddress}

  ## Questions
  If you have any questions or need further information, please feel free to contact me
  Contributor: ${data.Contributor}
  Email: ${data.EmailAddress}

  ## License
 ${renderLicenseSection(data.License)}`;
  }
// Export generateMarkdown function
module.exports = generateMarkdown;

