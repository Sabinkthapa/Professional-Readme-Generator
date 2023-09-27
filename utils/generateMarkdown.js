// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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


function renderLicenseSection(License) {
  if (License==='none') {
    return "";
    
  }else {
    return `## license
    Copyright (c) 2023 Sabin Thapa
    This project is licensed under the ${License} license.
    `
  }

}
 
// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.License)}
  #Title
  # ${data.ProjectName}
  
  ## Description
  ${data.Description}
  
  ## Table of Contents
  
  - [Installation] (#Installation)
  - [Usage] (#usage)
  - [Contributor] (#contributor)
  - [GithubName] (#githubname)
  - [EmailAddress] (emailaddress)
  - [Questions] (#questions)
  - License
  
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
  Please contact me directly at ${data.EmailAddress} or open an issue

  ## License
 ${renderLicenseSection(data.License)}`;
  }

module.exports = generateMarkdown;
