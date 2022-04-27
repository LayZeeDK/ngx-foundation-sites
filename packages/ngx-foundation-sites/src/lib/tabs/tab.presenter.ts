import { Injectable, TypeProvider } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { filter, map, Observable, pipe, tap } from 'rxjs';

import { Nullable } from '../types-shared/nullable';
import { AriaRenderer } from '../ui-dom/aria-renderer';
import { AttributeRenderer } from '../ui-dom/attribute-renderer';
import { StyleRenderer } from '../ui-dom/style-renderer';
import { TabsPresenter } from './tabs.presenter';

// No local UI state for now
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface TabState {
  readonly active: boolean;
  readonly id: string;
}

export type InitializeTabOptions = Pick<TabState, 'active'> &
  Nullable<Pick<TabState, 'id'>>;

function createInitialState({ active, id }: InitializeTabOptions): TabState {
  if (id == null) {
    id ??= `fas-tab-${nextSerialNumber}`;
    nextSerialNumber += 1;
  }

  return {
    active,
    id,
  };
}

@Injectable()
export class TabPresenter extends ComponentStore<TabState> {
  #aria: AriaRenderer;
  #attributes: AttributeRenderer;
  #styles: StyleRenderer;
  #tabs: TabsPresenter;

  active$: Observable<boolean>;
  id$: Observable<string> = this.select(state => state.id);

  constructor(
    tabs: TabsPresenter,
    attributes: AttributeRenderer,
    styles: StyleRenderer,
    aria: AriaRenderer
  ) {
    super();
    this.#aria = aria;
    this.#attributes = attributes;
    this.#styles = styles;
    this.#tabs = tabs;
    this.active$ = this.select(
      this.id$,
      tabs.activeTabId$,
      (tabId, activeTabId) => tabId === activeTabId
    );

    this.#renderActiveClass(this.active$);
    this.#renderAriaHiddenAttribute(this.active$);
    this.#renderAriaLabelledbyAttribute(this.id$);
    this.#renderIdAttribute(this.id$);
  }

  #renderAriaHiddenAttribute = this.effect<boolean>(
    pipe(
      map(active => (active ? null : String(true))),
      tap(hiddenValue => this.#aria.setAriaAttribute('hidden', hiddenValue))
    )
  );

  #renderAriaLabelledbyAttribute = this.effect<string>(
    pipe(tap(id => this.#aria.setAriaAttribute('labelledby', id)))
  );

  #renderIdAttribute = this.effect<string>(
    pipe(
      map(tabId => `${tabId}-label`),
      tap(labelId => this.#attributes.setAttribute('id', labelId))
    )
  );

  #renderActiveClass = this.effect<boolean>(
    pipe(tap(active => this.#styles.toggleClass('is-active', active)))
  );

  #selectTabIfActive = this.effect<Pick<TabState, 'active' | 'id'>>(
    pipe(
      filter(({ active }) => active === true),
      tap(({ id: tabId }) => this.#tabs.selectTabById(tabId))
    )
  );

  initialize(options: InitializeTabOptions) {
    const initialState = createInitialState(options);
    this.setState(initialState);
    const { active, id } = initialState;
    this.#selectTabIfActive({ active, id });
  }
}

let nextSerialNumber = 1;

export const tabPresenterProviders: TypeProvider[] = [
  TabPresenter,
  AriaRenderer,
  AttributeRenderer,
  StyleRenderer,
];
