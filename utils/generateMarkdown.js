// function to generate markdown for README
function generateMarkdown(data) {
  return `## Title
  
   ${data.project}
  ## Description

   ${data.description}
  ## Installation

   ${data.installation}
  ## Usage

   ${data.usage}
`;
}

module.exports = generateMarkdown;
