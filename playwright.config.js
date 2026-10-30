// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    // Display the browser window
    headless: false,

    // Custom test ID attribute
    testIdAttribute: 'data-test',

    // Capture trace on the first retry
    trace: 'on-first-retry',

    // Slow down Playwright actions and maximize the window
    launchOptions: {
      args: ['--start-maximized'],
      slowMo: 1000,
    },
  },

  projects: [
    {
      name: 'Google Chrome',
      use: {
        ...devices['Desktop Chrome'],

        // Use installed Google Chrome instead of bundled Chromium
        channel: 'chrome',

        // Maximize the browser window
        viewport: null,
        deviceScaleFactor: undefined,
      },
    },

    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
  ],

  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});