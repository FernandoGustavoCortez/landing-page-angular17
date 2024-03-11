import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'rodape',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './rodape.component.html',
  styleUrl: './rodape.component.scss',
})
export class RodapeComponent {}
