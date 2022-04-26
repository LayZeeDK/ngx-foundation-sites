import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';

interface ProgessBarState {
  readonly max: number;
  readonly min: number;
  readonly value: number;
}

@Injectable()
export class ProgressBarStore extends ComponentStore<ProgessBarState> {
  max$: Observable<number> = this.select(state => state.max);
  min$: Observable<number> = this.select(state => state.min);
  value$: Observable<number> = this.select(state => state.value);

  constructor() {
    super(initalState);
  }

  updateMax = this.updater<number>(
    (state, max): ProgessBarState => ({ ...state, max })
  );

  updateMin = this.updater<number>(
    (state, min): ProgessBarState => ({ ...state, min })
  );

  updateValue = this.updater<number>(
    (state, value): ProgessBarState => ({ ...state, value })
  );
}

const initalState: ProgessBarState = {
  max: 100,
  min: 0,
  value: 0,
};
