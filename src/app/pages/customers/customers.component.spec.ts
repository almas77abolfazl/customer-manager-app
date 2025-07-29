import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CustomersComponent } from './customers.component';

describe('CustomersComponent', () => {
  let component: CustomersComponent;
  let fixture: ComponentFixture<CustomersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CustomersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
