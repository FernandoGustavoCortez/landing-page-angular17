import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { NewsletterFormComponent } from '../newsletter-form/newsletter-form.component';
import { InfoEquipeComponent } from '../info-equipe/info-equipe.component';
import { ContatoEspecialistasComponent } from '../contato-especialistas/contato-especialistas.component';
import { RodapeComponent } from '../rodape/rodape.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    NgOptimizedImage,
    BtnPrimaryComponent,
    NewsletterFormComponent,
    InfoEquipeComponent,
    ContatoEspecialistasComponent,
    RodapeComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
