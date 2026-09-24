import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindOuvrierComponent } from './find-ouvrier.component';

describe('FindOuvrierComponent', () => {
  let component: FindOuvrierComponent;
  let fixture: ComponentFixture<FindOuvrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindOuvrierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindOuvrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
