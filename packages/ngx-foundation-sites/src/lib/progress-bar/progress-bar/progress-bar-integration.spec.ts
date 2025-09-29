import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { render } from '@testing-library/angular';
import {
  FasProgressBarHarness,
  type FasProgressMeterHarness,
} from 'ngx-foundation-sites/testing';

import { fasProgressBarDeclarables } from './progress-bar-declarables';

describe('Progress Bar Integration', () => {
  async function setup(template: string, props: Record<string, unknown> = {}) {
    const { fixture } = await render(template, {
      imports: [fasProgressBarDeclarables],
      componentProperties: props,
    });

    const loader = TestbedHarnessEnvironment.loader(fixture);
    return { fixture, loader };
  }

  const validateProgressBarBasics = async (
    progressBar: FasProgressBarHarness
  ): Promise<void> => {
    expect(await progressBar.getId()).toBe('main-progress');
    expect(await progressBar.getRole()).toBe('progressbar');
    expect(await progressBar.getValue()).toBe(65);
    expect(await progressBar.getMin()).toBe(0);
    expect(await progressBar.getMax()).toBe(100);
  };

  const validateMeterAndText = async (
    meter: FasProgressMeterHarness
  ): Promise<void> => {
    expect(await meter.getValue()).toBe(65);
    const meterText = await meter.getMeterText();
    expect(meterText).toBeTruthy();
    if (meterText) {
      expect(await meterText.getText()).toBe('65%');
    }
  };

  it('should work with complete progress bar structure', async () => {
    const { loader } = await setup(`
      <fas-progress-bar id="main-progress">
        <fas-progress-meter [min]="0" [max]="100" [value]="65">
          <fas-progress-meter-text accessibleText="65 percent complete">65%</fas-progress-meter-text>
        </fas-progress-meter>
      </fas-progress-bar>
    `);

    const progressBar = await loader.getHarness(
      FasProgressBarHarness.with({ id: 'main-progress' })
    );

    await validateProgressBarBasics(progressBar);
    const meter = await progressBar.getMeter();
    await validateMeterAndText(meter);
  });

  it('should handle progress bar without text', async () => {
    const { loader } = await setup(`
      <fas-progress-bar>
        <fas-progress-meter [value]="25">
        </fas-progress-meter>
      </fas-progress-bar>
    `);

    const progressBar = await loader.getHarness(FasProgressBarHarness);
    const meter = await progressBar.getMeter();
    const meterText = await meter.getMeterText();

    expect(await progressBar.getValue()).toBe(25);
    expect(meterText).toBeNull();
  });

  it('should handle multiple progress bars', async () => {
    const { loader } = await setup(`
      <div>
        <fas-progress-bar id="progress1">
          <fas-progress-meter [value]="30">
            <fas-progress-meter-text>30%</fas-progress-meter-text>
          </fas-progress-meter>
        </fas-progress-bar>
        
        <fas-progress-bar id="progress2">
          <fas-progress-meter [value]="70">
            <fas-progress-meter-text>70%</fas-progress-meter-text>
          </fas-progress-meter>
        </fas-progress-bar>
      </div>
    `);

    const progressBars = await loader.getAllHarnesses(FasProgressBarHarness);
    expect(progressBars).toHaveLength(2);

    const progress1 = await loader.getHarness(
      FasProgressBarHarness.with({ id: 'progress1' })
    );
    const progress2 = await loader.getHarness(
      FasProgressBarHarness.with({ id: 'progress2' })
    );

    expect(await progress1.getValue()).toBe(30);
    expect(await progress2.getValue()).toBe(70);
  });
});
