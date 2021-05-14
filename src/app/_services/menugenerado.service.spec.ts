import { TestBed } from '@angular/core/testing';

import { MenugeneradoService } from './menugenerado.service';

describe('MenugeneradoService', () => {
  let service: MenugeneradoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenugeneradoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
