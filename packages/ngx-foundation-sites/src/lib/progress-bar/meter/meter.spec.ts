import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { render } from '@testing-library/angular';
import { FasMeterHarness } from 'ngx-foundation-sites/testing';

import { FasMeterComponent } from './meter.component';

describe('FasMeterComponent', () => {
  async function setup(template: string, props: Record<string, unknown> = {}) {
    const { fixture } = await render(template, {
      imports: [FasMeterComponent],
      componentProperties: props,
    });

    const loader = TestbedHarnessEnvironment.loader(fixture);
    return { fixture, loader };
  }

  describe('Basic functionality', () => {
    it('should load harness', async () => {
      const { loader } = await setup(`<meter fas-meter></meter>`);

      const meter = await loader.getHarness(FasMeterHarness);
      expect(meter).toBeTruthy();
    });

    it('should get default values', async () => {
      const { loader } = await setup(`<meter fas-meter></meter>`);

      const meter = await loader.getHarness(FasMeterHarness);
      expect(await meter.getValue()).toBe(0);
      expect(await meter.getMax()).toBe(1);
      expect(await meter.getMin()).toBe(0);
      // For native meter elements, high defaults to max value if not set
      expect(await meter.getHigh()).toBe(1);
      expect(await meter.getLow()).toBe(0);
      // For native meter elements, optimum defaults to midpoint if not set
      expect(await meter.getOptimum()).toBe(0.5);
    });

    it('should get set values', async () => {
      const { loader } = await setup(`
        <meter fas-meter 
               [value]="0.6" 
               [min]="0" 
               [max]="1" 
               [high]="0.9" 
               [low]="0.1" 
               [optimum]="0.5"></meter>
      `);

      const meter = await loader.getHarness(FasMeterHarness);
      expect(await meter.getValue()).toBe(0.6);
      expect(await meter.getMin()).toBe(0);
      expect(await meter.getMax()).toBe(1);
      expect(await meter.getHigh()).toBe(0.9);
      expect(await meter.getLow()).toBe(0.1);
      expect(await meter.getOptimum()).toBe(0.5);
    });
  });

  describe('Color functionality', () => {
    it('should get no color by default', async () => {
      const { loader } = await setup(`<meter fas-meter></meter>`);

      const meter = await loader.getHarness(FasMeterHarness);
      expect(await meter.getColor()).toBeNull();
    });
  });

  describe('Harness filtering', () => {
    it('should filter by value', async () => {
      const { loader } = await setup(`
        <div>
          <meter fas-meter [value]="0.3"></meter>
          <meter fas-meter [value]="0.7"></meter>
        </div>
      `);

      const meter = await loader.getHarness(
        FasMeterHarness.with({ value: 0.7 })
      );
      expect(await meter.getValue()).toBe(0.7);
    });
  });
});
