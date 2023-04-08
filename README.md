# [WIP] Foundation for Angular Sites

`ngx-foundation-sites`

(Zurb) Foundation for Sites components with modern Angular and CSS Custom
Properties support.

## Installation

_NOTE: The frst prerelease with bundled components is still pending. For now,
clone this repository and build it locally to try it out:_

1. Clone this repository to your local machine.
2. Install package dependencies:
   ```pwsh
   yarn install
   ```
3. Build the latest bundle:
   ```pwsh
   yarn build
   ```
4. Locate the library directory:
   ```pwsh
    cd dist/packages
   ```
5. Copy the `ngx-foundation-sites` directory to your workspace's `node_modules`
   directory.
6. Follow the installation instructions below.

Install using NPM CLI

```pwsh
npm install ngx-foundation-sites foundation-sites @ngrx/component-store
```

or using Yarn CLI

```pwsh
yarn add ngx-foundation-sites foundation-sites @ngrx/component-store
```

## Documentation

Documentation is currently only available locally:

1. Clone this repository to your local machine.
2. Install package dependencies:

   ```pwsh
   yarn install
   ```

3. Start the Storybook server:
   ```pwsh
   yarn start
   ```

## Theming

See the `styles.scss` file in this repository for an example of how to set up a
theme. We support CSS Custom Properties.

## Features

### Containers

#### Card

```ts
// my.component.ts
import { Component, NgModule } from '@angular/core';
import { FasCardModule } from 'ngx-foundation-sites';

@Component({
  templateUrl: './my.component.html',
  // (...)
})
export class MyComponent {}

@NgModule({
  declarations: [MyComponent],
  imports: [FasCardModule],
  // (...)
})
export class MyModule {}
```

```html
<!-- my.component.html -->
<fas-card [style.width.px]="300">
  <fas-card-divider>This is a header</fas-card-divider>
  <img src="/assets/img/generic/rectangle-1.jpg" />
  <fas-card-section>
    <h4>This is a card.</h4>
    <p>
      It has an easy to override visual style, and is appropriately subdued.
    </p>
  </fas-card-section>
</fas-card>
```

#### Tabs

```ts
// my.component.ts
import { Component } from '@angular/core';
import { fasTabsDeclarables } from 'ngx-foundation-sites';

@Component({
  standalone: true,
  imports: [fasTabsDeclarables],
  templateUrl: './my.component.html',
  // (...)
})
export class MyComponent {}
```

```html
<!-- my.component.html -->
<fas-tabs id="basic-tabs">
  <fas-tab id="panel1" title="Basic tab 1" [active]="true">
    <p>one</p>
    <p>Check me out! I'm a super cool Tab panel with text content!</p>
    <p>
      <a routerLink="./" fragment="">I am a link but don't do anything</a>
    </p>
  </fas-tab>

  <fas-tab id="panel2" title="Basic tab 2">
    <p>two</p>
    <textarea></textarea>
    <button class="button">I do nothing!</button>
  </fas-tab>

  <fas-tab id="panel3" title="Basic tab 3">
    <p>three</p>
    <p>Check me out! I'm a super cool Tab panel with text content!</p>
  </fas-tab>

  <fas-tab id="panel4" title="Basic tab 4">
    <p>four</p>
    <img class="thumbnail" src="/assets/img/generic/rectangle-2.jpg" />
  </fas-tab>

  <fas-tab id="panel5" title="Basic tab 5">
    <p>five</p>
    <p>Check me out! I'm a super cool Tab panel with text content!</p>
  </fas-tab>

  <fas-tab id="panel6" title="Basic tab 6">
    <p>six</p>
    <img class="thumbnail" src="/assets/img/generic/rectangle-8.jpg" />
  </fas-tab>
</fas-tabs>
```

### Media

#### Progress Bar

##### Progress Bar

```ts
// my.component.ts
import { Component } from '@angular/core';
import { fasProgressBarDeclarables } from 'ngx-foundation-sites';

@Component({
  standalone: true,
  imports: [fasProgressBarDeclarables],
  templateUrl: './my.component.html',
  // (...)
})
export class MyComponent {}
```

```html
<!-- my.component.html -->
<fas-progress-bar>
  <fas-progress-meter [min]="0" [max]="100" [value]="50">
    <fas-progress-meter-text
      accessibleText="50 percent"
    ></fas-progress-meter-text>
  </fas-progress-meter>
</fas-progress-bar>
```

##### Native Progress

```ts
// my.component.ts
import { Component } from '@angular/core';
import { FasProgressComponent } from 'ngx-foundation-sites';

@Component({
  standalone: true,
  imports: [FasProgressComponent],
  templateUrl: './my.component.html',
  // (...)
})
export class MyComponent {}
```

```html
<!-- my.component.html -->
<progress fas-progress [max]="100" [value]="75"></progress>
```

##### Native Meter

```ts
// my.component.ts
import { Component } from '@angular/core';
import { FasMeterComponent } from 'ngx-foundation-sites';

@Component({
  standalone: true,
  imports: [FasMeterComponent],
  templateUrl: './my.component.html',
  // (...)
})
export class MyComponent {}
```

```html
<!-- my.component.html -->
<meter
  fas-meter
  [value]="30"
  [min]="0"
  [low]="33"
  [high]="66"
  [optimum]="100"
  [max]="100"
></meter>
```
