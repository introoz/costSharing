/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CostTypeService } from './cost-type.service';

describe('CostTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CostTypeService]
    });
  });

  it('should ...', inject([CostTypeService], (service: CostTypeService) => {
    expect(service).toBeTruthy();
  }));
});
