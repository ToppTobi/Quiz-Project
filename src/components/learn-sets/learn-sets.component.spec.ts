import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnSetsComponent } from './learn-sets.component';

describe('LearnSetsComponent', () => {
  let component: LearnSetsComponent;
  let fixture: ComponentFixture<LearnSetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnSetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
