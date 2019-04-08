import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DotaPlayersComponent } from './dota-players.component';

describe('DotaPlayersComponent', () => {
  let component: DotaPlayersComponent;
  let fixture: ComponentFixture<DotaPlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DotaPlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DotaPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
