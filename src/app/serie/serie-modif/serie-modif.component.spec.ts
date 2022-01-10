import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieModifComponent } from './serie-modif.component';

describe('SerieModifComponent', () => {
  let component: SerieModifComponent;
  let fixture: ComponentFixture<SerieModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerieModifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
