import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCatalogueComponent } from './character-catalogue.component';

describe('CardPlayerComponent', () => {
  let component: CharacterCatalogueComponent;
  let fixture: ComponentFixture<CharacterCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterCatalogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
