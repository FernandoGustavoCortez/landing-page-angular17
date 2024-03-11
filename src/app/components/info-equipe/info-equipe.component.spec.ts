import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEquipeComponent } from './info-equipe.component';

describe('InfoEquipeComponent', () => {
  let component: InfoEquipeComponent;
  let fixture: ComponentFixture<InfoEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoEquipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
