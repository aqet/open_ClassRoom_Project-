import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../model/face-snap';
import { DatePipe, LowerCasePipe, NgClass, NgStyle, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snapp',
  standalone: true,
  imports: [
    // NgStyle,
    // NgClass,
    UpperCasePipe,
    // TitleCasePipe,
    // LowerCasePipe,
    // DatePipe,
  ],
  templateUrl: './face-snapp.component.html',
  styleUrl: './face-snapp.component.scss'
})
export class FaceSnappComponent{
  @Input() facesnap!: FaceSnap;
  snapButtonText!: string
  userHasSnapped!: boolean

  constructor(private route: Router){}

  onViewFaceSnap(){
    this.route.navigateByUrl(`/faceSnap/${this.facesnap.id}`)
  }

}


