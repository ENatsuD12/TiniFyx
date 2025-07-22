import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-cta',
  imports: [],
  templateUrl: './cta.html',
  styleUrl: './cta.css'
})
export class Cta {
  @Input() trialPeriod: string = '7 días';

  constructor() {}
}
