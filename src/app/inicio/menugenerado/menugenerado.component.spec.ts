import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenugeneradoComponent } from './menugenerado.component';

describe('MenugeneradoComponent', () => {
  let component: MenugeneradoComponent;
  let fixture: ComponentFixture<MenugeneradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenugeneradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenugeneradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
