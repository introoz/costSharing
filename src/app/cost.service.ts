import { Injectable } from '@angular/core';

import { COSTS } from './Cost';
import { Cost } from './Cost';

@Injectable()
export class CostService {
  getCosts(): Promise<Cost[]> {
    return Promise.resolve(COSTS);
  }
  constructor() { }
}
