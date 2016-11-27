/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CostService } from './cost.service';

describe('CostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CostService]
    });
  });

  it('should ...', inject([CostService], (service: CostService) => {
    expect(service).toBeTruthy();
  }));
});
