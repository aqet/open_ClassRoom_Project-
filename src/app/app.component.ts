import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './core/component/header/header.component';
import { RouterOutlet } from '@angular/router';
import { Observable, filter, interval, map, take, takeUntil, tap, timer } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent, // Décommentez si HeaderComponent est utilisé
    RouterOutlet,    // Décommentez si RouterOutlet est utilisé
    AsyncPipe         // Permet d'utiliser l'AsyncPipe dans le template
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Corrigé en "styleUrls"
})
export class AppComponent implements OnInit {
  aa:string='test'
  aaa:string='test'
  interval$!: Observable<string>; // Observable qui émet une valeur chaque seconde

  ngOnInit() {
    this.interval$ = interval(1000).pipe(
      take(29),
      filter(value => value%3 ===0),
      map(value => value%2===0?
         `je suis ${value} et je suis paire`:
         `je suis ${value} et je suis impaire`,
      ),
      tap(text => this.logger(`yo:${text}`))
    ); // Observable qui émet toutes les secondes
  }

  logger(text: string): void{
    console.log(text);
  }
}




// import { Component, OnInit } from '@angular/core';
// import { interval, of } from 'rxjs';
// import { concatMap, mergeMap, delay, exhaustMap, map, switchMap, take, tap } from 'rxjs/operators';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [
//     // HeaderComponent, // Décommentez si HeaderComponent est utilisé
//     // RouterOutlet,    // Décommentez si RouterOutlet est utilisé
//     AsyncPipe         // Permet d'utiliser l'AsyncPipe dans le template
//   ],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'] // Corrigé en "styleUrls"
// })
// export class AppComponent implements OnInit {

//   redTrainsCalled = 0;
//   yellowTrainsCalled = 0;

//   ngOnInit() {
//     interval(500).pipe(

//       take(10),
//       map(value => value % 2 === 0 ? 'rouge' : 'jaune'),
//       tap(color => console.log(`La lumière s'allume en %c${color}`, `color: ${this.translateColor(color)}`)),
//       switchMap(color => this.getTrainObservable$(color)),
//       tap(train => console.log(`Train %c${train.color} ${train.trainIndex} arrivé !`, `font-weight: bold; color: ${this.translateColor(train.color)}`))
//     ).subscribe();
//   }

//   getTrainObservable$(color: 'rouge' | 'jaune') {
//     const isRedTrain = color === 'rouge';
//     isRedTrain ? this.redTrainsCalled++ : this.yellowTrainsCalled++;
//     const trainIndex = isRedTrain ? this.redTrainsCalled : this.yellowTrainsCalled;
//     console.log(`Train %c${color} ${trainIndex} appelé !`, `text-decoration: underline; color: ${this.translateColor(color)}`);
//     return of({ color, trainIndex }).pipe(
//       delay(isRedTrain ? 5000 : 6000)
//     );
//   }

//   translateColor(color: 'rouge' | 'jaune') {
//     return color === 'rouge' ? 'red' : 'yellow';
//   }
// }