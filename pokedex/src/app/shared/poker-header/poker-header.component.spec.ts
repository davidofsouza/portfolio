import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokerHeaderComponent } from './poker-header.component';

describe('PokerHeaderComponent', () => {
  let component: PokerHeaderComponent;
  let fixture: ComponentFixture<PokerHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokerHeaderComponent]
    });
    fixture = TestBed.createComponent(PokerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
