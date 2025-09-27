import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';

interface ProgessBarState {
  readonly accessibleText: string | null;
  readonly max: number;
  readonly min: number;
  readonly text: string | null;
  readonly value: number;
}

// eslint-disable-next-line @angular-eslint/use-injectable-provided-in -- This is a component-level service
@Injectable()
export class ProgressBarStore extends ComponentStore<ProgessBarState> {
  accessibleText$: Observable<string | null> = this.select(
    state => state.accessibleText
  );
  max$: Observable<number> = this.select(state => state.max);
  min$: Observable<number> = this.select(state => state.min);
  text$: Observable<string | null> = this.select(state => state.text);
  value$: Observable<number> = this.select(state => state.value);

  constructor() {
    super(initalState);
  }

  updateAccessibleText = this.updater<string | null>(
    (state, accessibleText): ProgessBarState => ({ ...state, accessibleText })
  );

  updateMax = this.updater<number | null>(
    (state, max): ProgessBarState => ({
      ...state,
      max: max ?? initalState.max,
    })
  );

  updateMin = this.updater<number | null>(
    (state, min): ProgessBarState => ({
      ...state,
      min: min ?? initalState.min,
    })
  );

  updateText = this.updater<string | null>(
    (state, text): ProgessBarState => ({
      ...state,
      text: text === '' ? null : text,
    })
  );

  updateValue = this.updater<number | null>(
    (state, value): ProgessBarState => ({
      ...state,
      value: value ?? initalState.value,
    })
  );
}

const initalState: ProgessBarState = {
  accessibleText: null,
  max: 100,
  min: 0,
  text: null,
  value: 0,
};
