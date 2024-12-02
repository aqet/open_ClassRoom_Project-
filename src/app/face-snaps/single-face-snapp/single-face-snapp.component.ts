import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../../core/model/face-snap';
import { AsyncPipe, DatePipe, LowerCasePipe, NgClass, NgIf, NgStyle, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../../core/services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Observable, tap } from 'rxjs';
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
    RouterLink,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './single-face-snapp.component.html',
  styleUrl: './single-face-snapp.component.scss'
})
export class SingleFaceSnappComponent implements OnInit {
  facesnap$!: Observable<FaceSnap>
  snapButtonText!: string
  // userHasSnapped!: boolean

  constructor(private faceSnapService: FaceSnapsService,
              private route: ActivatedRoute){}

  ngOnInit(): void{
    // this.prepareInterface()
    // this.getFaceSnap()

    this.snapButtonText='Oh,Snap!';
    const faceSnapId = +this.route.snapshot.params['id']
    this.facesnap$=this.faceSnapService.getFaceSnapById(faceSnapId)
  }
  

  onSnaps(facesnapId: number): any{
    if(this.snapButtonText==="Oups,UnSnap!"){
      this.facesnap$ = this.faceSnapService.snapFaceSnapById(facesnapId, 'unSnap').pipe(
        tap(()=>{
          this.snapButtonText="Oh,Snap!"
        })
      )
    }else{
      this.facesnap$ = this.faceSnapService.snapFaceSnapById(facesnapId, 'snap').pipe(
        tap(()=>{
          this.snapButtonText="Oups,UnSnap!"
        })
      )
      
    }
  }

//   onSnap(faceSnapId: number) {
//     if (this.buttonText === 'Oh Snap!') {
//         this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').pipe(
//             tap(() => this.buttonText = 'Oops, unSnap!')
//         );
//     } else {
//         this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
//             tap(() => this.buttonText = 'Oh Snap!')
//         );
//     }
// }

  private prepareInterface(){
    // this.snapButtonText='Oh,Snap!';
  }

  private getFaceSnap(){
    const faceSnapId = parseInt(this.route.snapshot.params['id'])
    this.facesnap$=this.faceSnapService.getFaceSnapById(faceSnapId)
  }
}


