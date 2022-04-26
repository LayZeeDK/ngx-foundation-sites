import { Injectable, TypeProvider } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { map, pipe, tap } from 'rxjs';

import { FasColor } from '../../color';
import { AriaRenderer } from './aria-renderer';
import { ProgressBarStore } from './progress-bar.store';
import { StyleRenderer } from './style-renderer';

interface ProgessBarState {
  readonly color: FasColor;
}

@Injectable()
export class ProgressBarPresenter extends ComponentStore<ProgessBarState> {
  #aria: AriaRenderer;
  #style: StyleRenderer;

  constructor(
    progressBarState: ProgressBarStore,
    aria: AriaRenderer,
    style: StyleRenderer
  ) {
    super(initalState);
    this.#aria = aria;
    this.#style = style;

    this.#renderAriaValuemaxAttribute(progressBarState.max$);
    this.#renderAriaValueminAttribute(progressBarState.min$);
    this.#renderAriaValuenowAttribute(progressBarState.value$);
    this.#renderAriaValuetextAttribute(progressBarState.text$);
    this.#renderColorClasses(this.select(state => state.color));
  }

  updateColor = this.updater<FasColor>(
    (state, color): ProgessBarState => ({
      ...state,
      color,
    })
  );

  #renderAriaValuemaxAttribute = this.effect<number>(
    pipe(
      tap(meterMax =>
        this.#aria.setAriaAttribute('valuemax', meterMax.toString())
      )
    )
  );

  #renderAriaValueminAttribute = this.effect<number>(
    pipe(
      tap(meterMin =>
        this.#aria.setAriaAttribute('valuemin', meterMin.toString())
      )
    )
  );

  #renderAriaValuenowAttribute = this.effect<number>(
    pipe(
      tap(meterValue =>
        this.#aria.setAriaAttribute('valuenow', meterValue.toString())
      )
    )
  );

  #renderAriaValuetextAttribute = this.effect<string | null>(
    pipe(tap(meterText => this.#aria.setAriaAttribute('valuetext', meterText)))
  );

  #renderColorClasses = this.effect<FasColor>(
    pipe(
      map(
        (activeColor): Readonly<Record<FasColor, boolean>> => ({
          alert: activeColor === 'alert',
          primary: activeColor === 'primary',
          secondary: activeColor === 'secondary',
          success: activeColor === 'success',
          warning: activeColor === 'warning',
        })
      ),
      tap(colorClasses => this.#style.updateClasses(colorClasses))
    )
  );
}

const initalState: ProgessBarState = {
  color: 'primary',
};

export const progressBarPresenterProviders: TypeProvider[] = [
  ProgressBarPresenter,
  AriaRenderer,
  StyleRenderer,
];
