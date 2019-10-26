import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideCoreProjetComponent } from './inside-core-projet.component';

describe('InsideCoreProjetComponent', () => {
  let component: InsideCoreProjetComponent;
  let fixture: ComponentFixture<InsideCoreProjetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsideCoreProjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideCoreProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
