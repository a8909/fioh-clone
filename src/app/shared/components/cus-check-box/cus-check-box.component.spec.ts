import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusCheckBoxComponent } from './cus-check-box.component';

describe('CusCheckBoxComponent', () => {
  let component: CusCheckBoxComponent;
  let fixture: ComponentFixture<CusCheckBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CusCheckBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CusCheckBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
