import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenudiaComponent } from './menudia.component';

describe('MenudiaComponent', () => {
  let component: MenudiaComponent;
  let fixture: ComponentFixture<MenudiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenudiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenudiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
