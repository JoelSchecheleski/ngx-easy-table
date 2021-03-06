import { Injectable } from '@angular/core';

@Injectable()
export class FiltersService {
  static getPath(p, o) {
    // https://github.com/dherges/ng-packagr/issues/696
    const result = p.reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, o);
    return result;
  }
}
