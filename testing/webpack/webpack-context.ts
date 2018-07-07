import { WebpackContextFunction } from './webpack-context-function';
import { WebpackContextPrototype } from './webpack-context-prototype';

export type WebpackContext = WebpackContextFunction & WebpackContextPrototype;
