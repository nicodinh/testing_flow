// interfaces/underscore.js

declare module 'underscore' {
  declare class Underscore {
    findWhere<T>(list: Array<T>, properties: {[key:string]: any}): ?T;
  }
  declare var _: Underscore;
/*
declare function findWhere<T>(list: Array<T>, properties: {[key:string]: any}): ?T;
index.js: import {findWhere} from underscore;
running: babel-node src/index.js --presets es2015
*/
}
