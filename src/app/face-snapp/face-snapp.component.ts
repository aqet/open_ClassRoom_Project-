import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../model/face-snap';
import { DatePipe, LowerCasePipe, NgClass, NgStyle, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-face-snapp',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    TitleCasePipe,
    LowerCasePipe,
    DatePipe,
  ],
  templateUrl: './face-snapp.component.html',
  styleUrl: './face-snapp.component.scss'
})
export class FaceSnappComponent implements OnInit {
  @Input() facesnap!: FaceSnap;

  onsnaps!: boolean
  

  ngOnInit(): void{
    this.onsnaps=false
  }

  onAddSnaps(): any{
    !this.onsnaps ?
      this.facesnap.snaps++
    :
      this.facesnap.snaps--
    this.onsnaps=!this.onsnaps
  }

}
