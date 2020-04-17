import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
// ici il faut importer HttpClientModule(ou HttpClientTestingModule), sinon HttpClient ne fonctionnera pas car Angular ne le sait pas

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]});

    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
      expect(service).toBeTruthy();
  });
});

  