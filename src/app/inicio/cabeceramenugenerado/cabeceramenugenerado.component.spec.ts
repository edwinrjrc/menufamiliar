import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceramenugeneradoComponent } from './cabeceramenugenerado.component';

describe('CabeceramenugeneradoComponent', () => {
  let component: CabeceramenugeneradoComponent;
  let fixture: ComponentFixture<CabeceramenugeneradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabeceramenugeneradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceramenugeneradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
