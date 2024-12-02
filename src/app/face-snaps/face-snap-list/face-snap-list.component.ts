import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaceSnappComponent } from '../face-snapp/face-snapp.component';
import { FaceSnap } from '../../core/model/face-snap';
import { FaceSnapsService } from '../../core/services/face-snaps.service';
import { Observable, Subject, interval, take, takeUntil, tap } from 'rxjs';
import { AsyncPipe, NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [
    FaceSnappComponent,
    NgFor,
    // CommonModule,
    AsyncPipe
  ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {
  
  faceSnaps$!: Observable<FaceSnap[]>
  
  constructor(private facesnapservice: FaceSnapsService){}

  ngOnInit(): void {
    this.faceSnaps$ = this.facesnapservice.getAllFaceSnaps()
  }
}
