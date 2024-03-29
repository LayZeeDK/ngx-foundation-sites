import { inject, Injectable, Provider } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { map, pipe, tap } from 'rxjs';

import { StyleRenderer } from '../../ui-dom/style-renderer';
import { ProgressBarStore } from './progress-bar.store';

// No local UI state yet
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ProgressMeterState {}

export function provideProgressMeterPresenter(): Provider[] {
  return [ProgressMeterPresenter, StyleRenderer];
}

@Injectable()
export class ProgressMeterPresenter extends ComponentStore<ProgressMeterState> {
  #progressBar = inject(ProgressBarStore);
  #style = inject(StyleRenderer);

  constructor() {
    super(initialState);

    this.#renderWidthStyle(
      this.select(
        this.#progressBar.min$,
        this.#progressBar.max$,
        this.#progressBar.value$,
        (min, max, value) => {
          const percentage = (value / (max - min)) * 100;

          return Number.isNaN(percentage) ? 0 : percentage;
        }
      )
    );
  }

  #renderWidthStyle = this.effect<number>(
    pipe(
      map(widthPercentage => `${widthPercentage}%`),
      tap(widthValue => this.#style.setStyle('width', widthValue))
    )
  );
}

const initialState: ProgressMeterState = {};
