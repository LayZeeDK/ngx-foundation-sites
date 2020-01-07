import {
  BaseHarnessFilters,
  ComponentHarness,
  HarnessPredicate,
  TestElement,
} from '@angular/cdk/testing';

export interface FasTabPanelFilters extends BaseHarnessFilters {
  readonly id?: string | RegExp;
  readonly title?: string | RegExp;
}

export class FasTabPanelHarness extends ComponentHarness {
  static hostSelector = '.tabs-panel';
  static with(
    options: FasTabPanelFilters,
  ): HarnessPredicate<FasTabPanelHarness> {
    return new HarnessPredicate(FasTabPanelHarness, options)
      .addOption('ID', options.id, (harness, id) =>
        HarnessPredicate.stringMatches(harness.getId(), id))
      .addOption('title', options.title, (harness, title) =>
        HarnessPredicate.stringMatches(harness.getTitle(), title));
  }

  protected async getTab(): Promise<TestElement> {
    const labelId = await this.getAriaLabelledBy();

    // return this.locatorFor(FasTabHarness.with({id: labelId}));
    return this.documentRootLocatorFactory().locatorFor(`#${labelId}`)();
  }

  protected async isHidden(): Promise<boolean> {
    const ariaHidden = await this.getAriaHidden();

    return ariaHidden === 'true';
  }

  async activate(): Promise<void> {
    const label = await this.getTab();

    label.click();
  }

  async getAriaLabelledBy(): Promise<string> {
    const host = await this.host();
    const maybeLabelId = await host.getAttribute('aria-labelledby');

    if (!maybeLabelId) {
      throw new Error('No aria-labelledby attribute');
    }

    return maybeLabelId;
  }

  async getAriaHidden(): Promise<string | null> {
    const host = await this.host();

    return host.getAttribute('aria-hidden');
  }

  async getId(): Promise<string> {
    const host = await this.host();

    return host.getProperty('id');
  }

  async getTextContent(): Promise<string> {
    const host = await this.host();

    return (await host.text()).trim();
  }

  async getTitle(): Promise<string> {
    const label = await this.getTab();
    const title = await label.text();

    return title.trim();
  }

  async isActive(): Promise<boolean> {
    const host = await this.host();
    const [hasActiveClass, isHidden] = await Promise.all([
      host.hasClass('is-active'),
      this.isHidden(),
    ]);

    return hasActiveClass && !isHidden;
  }
}
