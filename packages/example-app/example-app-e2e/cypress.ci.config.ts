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
  screenshotOnRunFailure: false,
  video: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  watchForFileChanges: false,
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
