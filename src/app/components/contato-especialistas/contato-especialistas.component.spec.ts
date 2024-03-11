import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoEspecialistasComponent } from './contato-especialistas.component';

describe('ContatoEspecialistasComponent', () => {
  let component: ContatoEspecialistasComponent;
  let fixture: ComponentFixture<ContatoEspecialistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContatoEspecialistasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContatoEspecialistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
