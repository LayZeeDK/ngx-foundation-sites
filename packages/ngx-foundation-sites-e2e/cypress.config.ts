import { defineConfig } from 'cypress';
import { nxE2EStorybookPreset } from '@nrwl/storybook/presets/cypress';
import { getPreprocessorConfig } from '@jscutlery/cypress-harness/preprocessor-config';

export default defineConfig({
  e2e: {
    ...nxE2EStorybookPreset(__dirname),
    video: true,
    viewportHeight: 1080,
    viewportWidth: 1920,
    ...getPreprocessorConfig(),
  },
});
