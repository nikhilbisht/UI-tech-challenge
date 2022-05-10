const { devices } = require('@playwright/test');

module.exports = {

    // Each test is given 30 seconds
    timeout : 1300000,
    reporter : [ ['html', { open: 'never' }] ],
      projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Edge'] },
    },
  ],
  };