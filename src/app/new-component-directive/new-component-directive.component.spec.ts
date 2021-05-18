import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComponentDirectiveComponent } from './new-component-directive.component';

describe('NewComponentDirectiveComponent', () => {
  let component: NewComponentDirectiveComponent;
  let fixture: ComponentFixture<NewComponentDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewComponentDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewComponentDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
