import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiohSignInComponent } from './fioh-sign-in.component';

describe('FiohSignInComponent', () => {
  let component: FiohSignInComponent;
  let fixture: ComponentFixture<FiohSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiohSignInComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiohSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
