import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nba2kComponent } from './nba2k.component';

describe('Nba2kComponent', () => {
  let component: Nba2kComponent;
  let fixture: ComponentFixture<Nba2kComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nba2kComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nba2kComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
