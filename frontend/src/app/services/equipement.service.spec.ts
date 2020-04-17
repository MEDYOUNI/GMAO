import { TestBed } from '@angular/core/testing';

import { EquipementService } from './equipement.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EquipementService', () => {
  let service: EquipementService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(EquipementService);
  });

  it('should be created', () => {
     expect(service).toBeTruthy();
  });
});
