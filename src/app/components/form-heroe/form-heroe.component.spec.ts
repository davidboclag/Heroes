import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHeroeComponent } from './form-heroe.component';

describe('FormHeroeComponent', () => {
  let component: FormHeroeComponent;
  let fixture: ComponentFixture<FormHeroeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormHeroeComponent]
    });
    fixture = TestBed.createComponent(FormHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
