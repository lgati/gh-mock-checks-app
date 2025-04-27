import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    screenshot: 'only-on-failure', // Take screenshots on failures
    video: 'retain-on-failure',    // Keep videos for failed tests
    trace: 'on-first-retry',        // Record trace on first retry (nice bonus)
  },
  reporter: [
    ['list'],
    ['@currents/playwright', { projectId: 'EILla1' }]
  ]
});
