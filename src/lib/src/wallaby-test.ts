// tslint:disable:ordered-imports
// The import order in this testing entry point is very import. Be careful not
// to change the order of existing imports.

// Used for reflect-metadata in JIT. If you use AOT (and only Angular
// decorators), you can remove.
// Required for Augury, Karma, and Protractor.
// import 'core-js/es7/reflect';

// Zone JS is required by default for Angular itself.
import 'zone.js/dist/zone';  // Included with Angular CLI.

/*
* In development mode, to ignore zone related error stack frames such as
* `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
* import the following file, but please comment it out in production mode
* because it will have performance impact when throw error
*/
import 'zone.js/dist/zone-error';  // Included with Angular CLI.

import 'zone.js/dist/zone-testing'; // Included with Angular CLI.

import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting());
