import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxzipComponent } from './rxzip.component';

describe('RxzipComponent', () => {
  let component: RxzipComponent;
  let fixture: ComponentFixture<RxzipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxzipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxzipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
