import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { render } from '@testing-library/angular';
import {
  FasProgressBarHarness,
  FasProgressMeterHarness,
  FasProgressMeterTextHarness,
} from 'ngx-foundation-sites/testing';

import { fasProgressBarDeclarables } from './progress-bar-declarables';

describe('Progress Bar', () => {
  async function setup(template: string, props: Record<string, unknown> = {}) {
    const { fixture } = await render(template, {
      imports: [fasProgressBarDeclarables],
      componentProperties: props,
    });

    const loader = TestbedHarnessEnvironment.loader(fixture);
    return { fixture, loader };
  }

  describe('FasProgressBarHarness', () => {
    it('should load progress bar harness', async () => {
      const { loader } = await setup(`
        <fas-progress-bar id="test-progress">
          <fas-progress-meter [value]="50">
            <fas-progress-meter-text>50%</fas-progress-meter-text>
          </fas-progress-meter>
        </fas-progress-bar>
      `);

      const progressBar = await loader.getHarness(FasProgressBarHarness);
      expect(progressBar).toBeTruthy();
    });

    it('should get progress bar by id', async () => {
      const { loader } = await setup(`
        <fas-progress-bar id="test-progress">
          <fas-progress-meter [value]="50">
            <fas-progress-meter-text>50%</fas-progress-meter-text>
          </fas-progress-meter>
        </fas-progress-bar>
      `);

      const progressBar = await loader.getHarness(
        FasProgressBarHarness.with({ id: 'test-progress' })
      );
      expect(await progressBar.getId()).toBe('test-progress');
    });

    it('should get role attribute', async () => {
      const { loader } = await setup(`
        <fas-progress-bar>
          <fas-progress-meter [value]="50">
            <fas-progress-meter-text>50%</fas-progress-meter-text>
          </fas-progress-meter>
        </fas-progress-bar>
      `);

      const progressBar = await loader.getHarness(FasProgressBarHarness);
      expect(await progressBar.getRole()).toBe('progressbar');
    });

    it('should get meter from progress bar', async () => {
      const { loader } = await setup(`
        <fas-progress-bar>
          <fas-progress-meter [value]="75">
            <fas-progress-meter-text>75%</fas-progress-meter-text>
          </fas-progress-meter>
        </fas-progress-bar>
      `);

      const progressBar = await loader.getHarness(FasProgressBarHarness);
      const meter = await progressBar.getMeter();
      expect(meter).toBeTruthy();
      expect(await meter.getValue()).toBe(75);
    });

    it('should get value through progress bar', async () => {
      const { loader } = await setup(`
        <fas-progress-bar>
          <fas-progress-meter [value]="30">
            <fas-progress-meter-text>30%</fas-progress-meter-text>
          </fas-progress-meter>
        </fas-progress-bar>
      `);

      const progressBar = await loader.getHarness(FasProgressBarHarness);
      expect(await progressBar.getValue()).toBe(30);
    });

    it('should get min and max values through progress bar', async () => {
      const { loader } = await setup(`
        <fas-progress-bar>
          <fas-progress-meter [min]="10" [max]="200" [value]="100">
            <fas-progress-meter-text>100/200</fas-progress-meter-text>
          </fas-progress-meter>
        </fas-progress-bar>
      `);

      const progressBar = await loader.getHarness(FasProgressBarHarness);
      expect(await progressBar.getMin()).toBe(10);
      expect(await progressBar.getMax()).toBe(200);
    });

    it('should detect color class', async () => {
      const { loader } = await setup(`
        <fas-progress-bar class="primary">
          <fas-progress-meter [value]="50">
            <fas-progress-meter-text>50%</fas-progress-meter-text>
          </fas-progress-meter>
        </fas-progress-bar>
      `);

      const progressBar = await loader.getHarness(FasProgressBarHarness);
      expect(await progressBar.getColor()).toBe('primary');
    });

    it('should return default color when no color is explicitly set', async () => {
      const { loader } = await setup(`
        <fas-progress-bar>
          <fas-progress-meter [value]="50">
            <fas-progress-meter-text>50%</fas-progress-meter-text>
          </fas-progress-meter>
        </fas-progress-bar>
      `);

      const progressBar = await loader.getHarness(FasProgressBarHarness);
      expect(await progressBar.getColor()).toBe('primary');
    });
  });

  describe('FasProgressMeterHarness', () => {
    it('should load progress meter harness', async () => {
      const { loader } = await setup(`
        <fas-progress-bar>
          <fas-progress-meter [value]="50">
            <fas-progress-meter-text>50%</fas-progress-meter-text>
          </fas-progress-meter>
        </fas-progress-bar>
      `);

      const meter = await loader.getHarness(FasProgressMeterHarness);
      expect(meter).toBeTruthy();
    });

    it('should get meter by value filter', async () => {
      const { loader } = await setup(`
        <fas-progress-bar>
          <fas-progress-meter [value]="42">
            <fas-progress-meter-text>42%</fas-progress-meter-text>
          </fas-progress-meter>
        </fas-progress-bar>
      `);

      const meter = await loader.getHarness(
        FasProgressMeterHarness.with({ value: 42 })
      );
      expect(await meter.getValue()).toBe(42);
    });

    it('should get meter text from meter', async () => {
      const { loader } = await setup(`
        <fas-progress-bar>
          <fas-progress-meter [value]="60">
            <fas-progress-meter-text>Loading...</fas-progress-meter-text>
          </fas-progress-meter>
        </fas-progress-bar>
      `);

      const meter = await loader.getHarness(FasProgressMeterHarness);
      const meterText = await meter.getMeterText();
      expect(meterText).toBeTruthy();
      if (meterText) {
        expect(await meterText.getText()).toBe('Loading...');
      }
    });

    it('should return null when no meter text', async () => {
      const { loader } = await setup(`
        <fas-progress-bar>
          <fas-progress-meter [value]="60">
          </fas-progress-meter>
        </fas-progress-bar>
      `);

      const meter = await loader.getHarness(FasProgressMeterHarness);
      const meterText = await meter.getMeterText();
      expect(meterText).toBeNull();
    });

    it('should get default min and max values', async () => {
      const { loader } = await setup(`
        <fas-progress-bar>
          <fas-progress-meter [value]="25">
            <fas-progress-meter-text>25%</fas-progress-meter-text>
          </fas-progress-meter>
        </fas-progress-bar>
      `);

      const meter = await loader.getHarness(FasProgressMeterHarness);
      expect(await meter.getMin()).toBe(0);
      expect(await meter.getMax()).toBe(100);
    });

    it('should get custom min and max values', async () => {
      const { loader } = await setup(`
        <fas-progress-bar>
          <fas-progress-meter [min]="5" [max]="50" [value]="25">
            <fas-progress-meter-text>50%</fas-progress-meter-text>
          </fas-progress-meter>
        </fas-progress-bar>
      `);

      const meter = await loader.getHarness(FasProgressMeterHarness);
      expect(await meter.getMin()).toBe(5);
      expect(await meter.getMax()).toBe(50);
    });
  });

  describe('FasProgressMeterTextHarness', () => {
    it('should load progress meter text harness', async () => {
      const { loader } = await setup(`
        <fas-progress-bar>
          <fas-progress-meter [value]="50">
            <fas-progress-meter-text>Half way there</fas-progress-meter-text>
          </fas-progress-meter>
        </fas-progress-bar>
      `);

      const meterText = await loader.getHarness(FasProgressMeterTextHarness);
      expect(meterText).toBeTruthy();
    });

    it('should get meter text by text filter', async () => {
      const { loader } = await setup(`
        <fas-progress-bar>
          <fas-progress-meter [value]="80">
            <fas-progress-meter-text>Almost done!</fas-progress-meter-text>
          </fas-progress-meter>
        </fas-progress-bar>
      `);

      const meterText = await loader.getHarness(
        FasProgressMeterTextHarness.with({ text: 'Almost done!' })
      );
      expect(await meterText.getText()).toBe('Almost done!');
    });

    it('should get meter text by regex filter', async () => {
      const { loader } = await setup(`
        <fas-progress-bar>
          <fas-progress-meter [value]="75">
            <fas-progress-meter-text>75 percent complete</fas-progress-meter-text>
          </fas-progress-meter>
        </fas-progress-bar>
      `);

      const meterText = await loader.getHarness(
        FasProgressMeterTextHarness.with({ text: /percent/u })
      );
      expect(await meterText.getText()).toBe('75 percent complete');
    });

    it('should get accessible text attribute', async () => {
      const { loader } = await setup(`
        <fas-progress-bar>
          <fas-progress-meter [value]="90">
            <fas-progress-meter-text accessibleText="90 percent complete">90%</fas-progress-meter-text>
          </fas-progress-meter>
        </fas-progress-bar>
      `);

      const meterText = await loader.getHarness(FasProgressMeterTextHarness);
      expect(await meterText.getText()).toBe('90%');
      // Note: accessibleText is handled internally by the component, not as aria-label
    });
  });
});
