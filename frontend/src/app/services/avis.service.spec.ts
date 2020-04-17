import { TestBed } from '@angular/core/testing';

import { AvisService } from './avis.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('AvisService', () => {
  let service: AvisService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    // Inject the service in the test
    service = TestBed.inject(AvisService);
  });

  it('should be created', () => {
     expect(service).toBeTruthy();
  });
  it('should have getAvis function', () => {
    expect(service.getAvis).toBeTruthy();
  });
  // it('should getAvis correctely', () => {
  //   expect(service.getAvis()).toBeTruthy();
  // });
 
});
