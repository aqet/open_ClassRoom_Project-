import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaceSnappComponent } from '../face-snapp/face-snapp.component';
import { FaceSnap } from '../model/face-snap';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Observable, Subject, interval, take, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnappComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit, OnDestroy {
  mysnap!: FaceSnap[]
  private Destroy$!: Subject<boolean>
  constructor(private facesnapservice: FaceSnapsService){}

  ngOnInit(): void {
    this.mysnap=this.facesnapservice.getFaceSnaps()
    this.Destroy$=new Subject<boolean>
    interval(1000).pipe(
      takeUntil(this.Destroy$),
      tap(console.log)
    ).subscribe()
  }

  ngOnDestroy(): void {
    this.Destroy$.next(true)
  }
}
