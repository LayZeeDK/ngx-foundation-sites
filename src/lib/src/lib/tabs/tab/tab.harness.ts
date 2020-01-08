import {
  AsyncFactoryFn,
  BaseHarnessFilters,
  ComponentHarness,
  HarnessPredicate,
  TestElement,
} from '@angular/cdk/testing';

export interface FasTabFilters extends BaseHarnessFilters {
  readonly id?: string | RegExp;
  readonly title?: string | RegExp;
}

export class FasTabHarness extends ComponentHarness {
  static hostSelector = '.tabs-title';
  static with(
    options: FasTabFilters,
  ): HarnessPredicate<FasTabHarness> {
    return new HarnessPredicate(FasTabHarness, options);
      // .addOption('ID', options.id, (harness, id) =>
      //   HarnessPredicate.stringMatches(harness.getId(), id))
      // .addOption('title', options.title, (harness, title) =>
      //   HarnessPredicate.stringMatches(harness.getTitle(), title));
  }

  protected async getPanel(): Promise<TestElement> {
    const panelId = await this.getAriaControls();

    return this.documentRootLocatorFactory().locatorFor(`#${panelId}`)();
  }

  protected getLabel: AsyncFactoryFn<TestElement> = this.locatorFor('a');

  protected async isSelected(): Promise<boolean> {
    const ariaSelected = await this.getAriaSelected();

    return ariaSelected === 'true';
  }

  async activatePanel(): Promise<void> {
    const label = await this.getLabel();

    label.click();
  }

  async getAriaControls(): Promise<string> {
    const label = await this.getLabel();
    const maybePanelId = await label.getAttribute('aria-controls');

    if (!maybePanelId) {
      throw new Error('No aria-controls attribute');
    }

    if (maybePanelId.includes(' ')) {
      throw new Error('Multiple tab panels not supported');
    }

    return maybePanelId;
  }

  async getAriaSelected(): Promise<'true' | 'false'> {
    const label = await this.getLabel();
    const maybeAriaSelected =
      await label.getAttribute('aria-selected');

    if (maybeAriaSelected === null
      || (maybeAriaSelected !== 'true' && maybeAriaSelected !== 'false')
    ) {
      throw new Error('No aria-selected attribute');
    }

    return maybeAriaSelected;
  }

  async getId(): Promise<string> {
    const label = await this.getLabel();

    return label.getProperty('id');
  }

  async getRole(): Promise<string | null> {
    const label = await this.getLabel();

    return label.getAttribute('role');
  }

  async getTextContent(): Promise<string> {
    const label = await this.getLabel();
    const text = await label.text();

    return text.trim();
  }

  async isActive(): Promise<boolean> {
    const host = await this.host();
    const [hasActiveClass, isSelected] = await Promise.all([
      host.hasClass('is-active'),
      this.isSelected(),
    ]);

    return hasActiveClass && isSelected;
  }
}
