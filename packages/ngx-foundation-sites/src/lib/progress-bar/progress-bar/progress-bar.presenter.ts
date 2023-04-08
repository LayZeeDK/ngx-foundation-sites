import { Injectable, Provider } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { map, pipe, tap } from 'rxjs';

import { FasColor } from '../../color';
import { AriaRenderer } from '../../ui-dom/aria-renderer';
import { StyleRenderer } from '../../ui-dom/style-renderer';
import { ProgressBarStore } from './progress-bar.store';

interface ProgessBarState {
  readonly color: FasColor;
}

export function provideProgressBarPresenter(): Provider[] {
  return [ProgressBarPresenter, AriaRenderer, StyleRenderer];
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
    this.#renderAriaValuetextAttribute(
      this.select(
        progressBarState.accessibleText$,
        progressBarState.text$,
        (accessibleText, text) => accessibleText ?? text
      )
    );
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
    pipe(
      tap(accessibleText =>
        this.#aria.setAriaAttribute('valuetext', accessibleText)
      )
    )
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
      tap(colorClasses => this.#style.toggleClasses(colorClasses))
    )
  );
}

const initalState: ProgessBarState = {
  color: 'primary',
};
