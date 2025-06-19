const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber-report.json',
  output: 'reports/cucumber-report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "App Version":"1.0.0",
    "Test Environment": "Local",
    "Browser": "Chrome",
    "Platform": process.platform,
    "Executed": "Local"
  }
};

reporter.generate(options);
