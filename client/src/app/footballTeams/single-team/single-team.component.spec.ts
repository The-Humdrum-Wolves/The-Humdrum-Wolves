import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTeamComponent } from './single-team.component';

describe('SingleTeamComponent', () => {
  let component: SingleTeamComponent;
  let fixture: ComponentFixture<SingleTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});