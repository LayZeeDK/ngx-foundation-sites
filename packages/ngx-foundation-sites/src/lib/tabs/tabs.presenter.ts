import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { map, Observable, pipe, tap, withLatestFrom } from 'rxjs';

interface TabsState {
  readonly activeTabId: string | null;
  readonly collapsing: boolean;
  readonly vertical: boolean;
}

@Injectable()
export class TabsPresenter extends ComponentStore<TabsState> {
  #collapsing: Observable<boolean> = this.select(state => state.collapsing);

  activeTabId$: Observable<string | null> = this.select(
    state => state.activeTabId
  );
  vertical$: Observable<boolean> = this.select(state => state.vertical);

  constructor() {
    super(initialState);
  }

  selectTabById = this.effect<string>(
    pipe(
      withLatestFrom(this.activeTabId$, this.#collapsing),
      map(([selectedTabId, activeTabId, collapsing]) =>
        collapsing && selectedTabId === activeTabId ? null : selectedTabId
      ),
      tap(newActiveTabId => this.#updateActiveTabId(newActiveTabId))
    )
  );

  updateCollapsing = this.updater<boolean>(
    (state, collapsing): TabsState => ({
      ...state,
      collapsing,
    })
  );

  updateVertical = this.updater<boolean>(
    (state, vertical): TabsState => ({
      ...state,
      vertical,
    })
  );

  #updateActiveTabId = this.updater<string | null>(
    (state, activeTabId): TabsState => ({
      ...state,
      activeTabId,
    })
  );
}

const initialState: TabsState = {
  activeTabId: null,
  collapsing: false,
  vertical: false,
};
