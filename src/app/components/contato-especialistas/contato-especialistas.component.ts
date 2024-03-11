import { Component } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';

@Component({
  selector: 'contato-especialistas',
  standalone: true,
  imports: [BtnPrimaryComponent],
  templateUrl: './contato-especialistas.component.html',
  styleUrl: './contato-especialistas.component.scss',
})
export class ContatoEspecialistasComponent {}
