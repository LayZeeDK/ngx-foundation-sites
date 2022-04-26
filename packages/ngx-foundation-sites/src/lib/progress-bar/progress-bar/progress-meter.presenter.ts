import { Injectable, TypeProvider } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { map, pipe, tap } from 'rxjs';

import { ProgressBarStore } from './progress-bar.store';
import { StyleRenderer } from './style-renderer';

// No local UI state yet
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ProgressMeterState {}

@Injectable()
export class ProgressMeterPresenter extends ComponentStore<ProgressMeterState> {
  #style: StyleRenderer;

  constructor(progressBar: ProgressBarStore, style: StyleRenderer) {
    super(initialState);
    this.#style = style;

    this.#renderWidthStyle(
      this.select(
        progressBar.min$,
        progressBar.max$,
        progressBar.value$,
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

export const progressMeterPresenterProviders: TypeProvider[] = [
  ProgressMeterPresenter,
  StyleRenderer,
];