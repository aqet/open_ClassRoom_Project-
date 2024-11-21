import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { Observable, interval } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // HeaderComponent, // Décommentez si HeaderComponent est utilisé
    // RouterOutlet,    // Décommentez si RouterOutlet est utilisé
    AsyncPipe         // Permet d'utiliser l'AsyncPipe dans le template
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Corrigé en "styleUrls"
})
export class AppComponent implements OnInit {
  interval$!: Observable<number>; // Observable qui émet une valeur chaque seconde

  ngOnInit() {
    this.interval$ = interval(1000); // Observable qui émet toutes les secondes
  }
}
