import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginarComponent } from './paginar.component';

describe('PaginarComponent', () => {
  let component: PaginarComponent;
  let fixture: ComponentFixture<PaginarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginarComponent]
    });
    fixture = TestBed.createComponent(PaginarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
