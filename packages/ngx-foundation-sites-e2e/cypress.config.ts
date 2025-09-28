import { defineConfig } from 'cypress';
import { nxE2EStorybookPreset } from '@nrwl/storybook/presets/cypress';
// @ts-expect-error -- The `package.json#exports` property is only supported in TypeScript >=4.7 https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-7.html#packagejson-exports-imports-and-self-referencing
import { getPreprocessorConfig } from '@jscutlery/cypress-harness/preprocessor-config';

export default defineConfig({
  e2e: {
    ...nxE2EStorybookPreset(__dirname),
    video: true,
    viewportHeight: 1080,
    viewportWidth: 1920,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call -- See `@jscutlery/cypress-harness/preprocessor-config` import
    ...getPreprocessorConfig(),
  },
});
