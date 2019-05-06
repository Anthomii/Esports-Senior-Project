import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftParticipantsComponent } from './draft-participants.component';

describe('DraftParticipantsComponent', () => {
  let component: DraftParticipantsComponent;
  let fixture: ComponentFixture<DraftParticipantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftParticipantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
