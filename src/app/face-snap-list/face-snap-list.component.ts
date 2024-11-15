import { Component, OnInit } from '@angular/core';
import { FaceSnappComponent } from '../face-snapp/face-snapp.component';
import { FaceSnap } from '../model/face-snap';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnappComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {
  mysnap!: FaceSnap[]

  ngOnInit(): void {
    this.mysnap =[
        new FaceSnap(
             'Igor',
             'moi meme',
             "https://autoartmodels.de/wp-content/uploads/2020/04/12113z-1-450x450.jpg'",
             new Date,
             10
        ),
        new FaceSnap(
             'aqet',
             'yo yo',
             "https://autoartmodels.de/wp-content/uploads/2023/03/diablo-svr.jpg'",
             new Date,
             120
        )
    ]
    this.mysnap[1].updateLocation('AaA')
  }
}
