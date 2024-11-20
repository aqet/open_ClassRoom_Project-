import { Component, OnInit } from '@angular/core';
import { FaceSnappComponent } from '../face-snapp/face-snapp.component';
import { FaceSnap } from '../model/face-snap';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnappComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {
  mysnap!: FaceSnap[]

  constructor(private facesnapservice: FaceSnapsService){}

  ngOnInit(): void {
    this.mysnap=this.facesnapservice.getFaceSnaps()
  }
}
