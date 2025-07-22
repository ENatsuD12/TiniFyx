import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { navbarcomponent } from './layout/navbar/navbar';
import { Footer } from "./layout/footer/footer";
import { Hero } from './sections/hero/hero';
import { TransformBusiness } from './sections/transform-business/transform-business';
import { Carousel } from './sections/carousel/carousel';
import { Pricing } from './sections/pricing/pricing';
import { Cta } from './sections/cta/cta';
import { Faq } from './sections/faq/faq';
import { Contact } from './sections/contact/contact';

@Component({
  selector: 'app-root',
  imports: [navbarcomponent, Hero, TransformBusiness, Carousel, Pricing, Cta, Faq, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TiniFyxWeb');
}
