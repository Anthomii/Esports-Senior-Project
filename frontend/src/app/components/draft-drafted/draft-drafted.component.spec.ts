import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftDraftedComponent } from './draft-drafted.component';

describe('DraftDraftedComponent', () => {
  let component: DraftDraftedComponent;
  let fixture: ComponentFixture<DraftDraftedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftDraftedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftDraftedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
