import { WebpackContext } from './webpack-context';

export interface WebpackRequire {
  context: (
    directory: string,
    useSubdirectories?: boolean /* = false */,
    regExp?: RegExp /* = /^\.\// */,
  ) => WebpackContext;
}
