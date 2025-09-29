import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { render } from '@testing-library/angular';
import { FasProgressHarness } from 'ngx-foundation-sites/testing';

import { FasProgressComponent } from './progress.component';

describe('FasProgressComponent', () => {
  async function setup(template: string, props: Record<string, unknown> = {}) {
    const { fixture } = await render(template, {
      imports: [FasProgressComponent],
      componentProperties: props,
    });

    const loader = TestbedHarnessEnvironment.loader(fixture);
    return { fixture, loader };
  }

  describe('Basic functionality', () => {
    it('should load harness', async () => {
      const { loader } = await setup(`<progress fas-progress></progress>`);

      const progress = await loader.getHarness(FasProgressHarness);
      expect(progress).toBeTruthy();
    });

    it('should get default values', async () => {
      const { loader } = await setup(`<progress fas-progress></progress>`);

      const progress = await loader.getHarness(FasProgressHarness);
      expect(await progress.getValue()).toBe(0);
      expect(await progress.getMax()).toBe(1);
    });

    it('should get set values', async () => {
      const { loader } = await setup(`
        <progress fas-progress [value]="0.7" [max]="1"></progress>
      `);

      const progress = await loader.getHarness(FasProgressHarness);
      expect(await progress.getValue()).toBe(0.7);
      expect(await progress.getMax()).toBe(1);
    });
  });

  describe('Color functionality', () => {
    it('should get default primary color', async () => {
      const { loader } = await setup(`<progress fas-progress></progress>`);

      const progress = await loader.getHarness(FasProgressHarness);
      expect(await progress.getColor()).toBe('primary');
    });

    it('should get set color', async () => {
      const { loader } = await setup(`
        <progress fas-progress color="success"></progress>
      `);

      const progress = await loader.getHarness(FasProgressHarness);
      expect(await progress.getColor()).toBe('success');
    });
  });

  describe('Harness filtering', () => {
    it('should filter by value', async () => {
      const { loader } = await setup(`
        <div>
          <progress fas-progress [value]="0.3"></progress>
          <progress fas-progress [value]="0.7"></progress>
        </div>
      `);

      const progress = await loader.getHarness(FasProgressHarness.with({ value: 0.7 }));
      expect(await progress.getValue()).toBe(0.7);
    });
  });
});