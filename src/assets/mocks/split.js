const fs = require('fs');
const path = require('path');

// Path to the Companies.json file
const companiesFilePath = path.join(__dirname, 'Companies.json');
// Directory where individual company files will be saved
const outputDirPath = path.join(__dirname, 'companies');

// Ensure the output directory exists
if (!fs.existsSync(outputDirPath)) {
  fs.mkdirSync(outputDirPath, { recursive: true });
}

// Read the Companies.json file
fs.readFile(companiesFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading Companies.json:', err);
    return;
  }

  // Parse the JSON data
  const companies = JSON.parse(data);

  // Iterate over each company and create a new file for it
  companies.forEach((company, index) => {
    const fileName = `${company.company.replace(/[^a-zA-Z0-9]/g, '_')}.json`;
    const filePath = path.join(outputDirPath, fileName);

    // Write the company data to a new file
    fs.writeFile(filePath, JSON.stringify(company, null, 2), 'utf8', (err) => {
      if (err) {
        console.error(`Error writing file for ${company.company}:`, err);
      } else {
        console.log(`Successfully wrote file for ${company.company}`);
      }
    });
  });
});