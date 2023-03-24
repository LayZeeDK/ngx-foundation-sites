import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nrwl/cypress/plugins/cypress-preset';
import setupNodeEvents from './src/plugins/index';

const cypressJsonConfig = {
  chromeWebSecurity: false,
  env: {
    tsConfig: 'tsconfig.json',
  },
  fileServerFolder: '.',
  fixturesFolder: './src/fixtures',
  screenshotsFolder:
    '../../../dist/cypress/packages/example-app/example-app-e2e/screenshots',
  video: true,
  videosFolder:
    '../../../dist/cypress/packages/example-app/example-app-e2e/videos',
  viewportHeight: 1080,
  viewportWidth: 1920,
  specPattern: 'src/e2e/**/*.cy.{js,jsx,ts,tsx}',
  supportFile: 'src/support/e2e.ts',
};
export default defineConfig({
  e2e: {
    ...nxE2EPreset(__dirname),
    ...cypressJsonConfig,
    setupNodeEvents,
  },
});
