import { defineConfig } from "@playwright/test";
import { currentsReporter, type CurrentsConfig } from '@currents/playwright';

const { CI, CURRENTS_BUILD_ID, CURRENTS_RECORD_KEY, CURRENTS_PROJECT_ID } = process.env;

const currentsConfig: CurrentsConfig = {
  ciBuildId: CURRENTS_BUILD_ID!,
  recordKey: CURRENTS_RECORD_KEY!,
  projectId: CURRENTS_PROJECT_ID!,
};

export default defineConfig({
  use: {
    screenshot: "only-on-failure", // Take screenshots on failures
    video: "retain-on-failure", // Keep videos for failed tests
    trace: "on-first-retry", // Record trace on first retry (nice bonus)
  },
  reporter: [
    currentsReporter(),
    [
      // See https://argos-ci.com/docs/quickstart/playwright
      "@argos-ci/playwright/reporter",
      {
        uploadToArgos: true,
      },
    ],
  ],
});
