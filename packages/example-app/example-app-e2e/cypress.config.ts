import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nrwl/cypress/plugins/cypress-preset';
import { getPreprocessorConfig } from '@jscutlery/cypress-harness/preprocessor-config';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__dirname),
    video: true,
    viewportHeight: 1080,
    viewportWidth: 1920,
    ...getPreprocessorConfig(),
  },
});
