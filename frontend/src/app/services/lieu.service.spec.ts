import { TestBed } from '@angular/core/testing';

import { LieuService } from './lieu.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LieuService', () => {
  let service: LieuService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(LieuService);
  });

  it('should be created', () => {
     expect(service).toBeTruthy();
  });
});
