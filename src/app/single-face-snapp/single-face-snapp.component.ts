import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../model/face-snap';
import { DatePipe, LowerCasePipe, NgClass, NgStyle, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-single-face-snapp',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    TitleCasePipe,
    LowerCasePipe,
    DatePipe,
    RouterLink
  ],
  templateUrl: './single-face-snapp.component.html',
  styleUrl: './single-face-snapp.component.scss'
})
export class SingleFaceSnappComponent implements OnInit {
  facesnap!: FaceSnap;
  snapButtonText!: string
  userHasSnapped!: boolean

  constructor(private faceSnapService: FaceSnapsService,
              private route: ActivatedRoute){}

  ngOnInit(): void{
    this.prepareInterface()

    this.getFaceSnap()
  }
  

  onSnaps(): any{
    if(this.userHasSnapped){
      this.unSnap()
    }else{
      this.snap()
    }
  }

  unSnap(){
    this.faceSnapService.snapFaceSnapById(this.facesnap.id, 'unSnap')
    this.snapButtonText="Oh,Snap!",
    this.userHasSnapped=false
  }

  snap(){
    this.faceSnapService.snapFaceSnapById(this.facesnap.id, 'snap')
    this.snapButtonText="Oups,UnSnap!",
    this.userHasSnapped=true
  }

  private prepareInterface(){
    this.userHasSnapped=false,
    this.snapButtonText='Oh, Snap!';
  }

  private getFaceSnap(){
    const faceSnapId = parseInt(this.route.snapshot.params['id'])
    this.facesnap=this.faceSnapService.getFaceSnapById(faceSnapId)
  }
}


