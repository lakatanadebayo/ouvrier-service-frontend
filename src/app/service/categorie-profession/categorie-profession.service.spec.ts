import { TestBed } from '@angular/core/testing';

import { CategorieProfessionService } from './categorie-profession.service';

describe('CategorieProfessionService', () => {
  let service: CategorieProfessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorieProfessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
