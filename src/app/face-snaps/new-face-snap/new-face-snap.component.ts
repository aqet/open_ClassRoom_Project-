import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Observable, map, tap } from 'rxjs';
import { FaceSnap } from '../../core/model/face-snap';
import { AsyncPipe, DatePipe, NgIf, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../../core/services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-face-snap',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    UpperCasePipe,
    DatePipe,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './new-face-snap.component.html',
  styleUrl: './new-face-snap.component.scss'
})
export class NewFaceSnapComponent implements OnInit {
  snapform!: FormGroup
  urlRegex!: RegExp 
  faceSnapPreview$!: Observable<FaceSnap>
  constructor(private formBuilder: FormBuilder,
              private FaceSnapsService: FaceSnapsService,
              private router: Router) { }

  ngOnInit(): void {
    this.urlRegex=/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/
    this.snapform = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      imageUrl: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
      location: [null]
    },{updateOn: 'blur'});

    this.faceSnapPreview$=this.snapform.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createdDate: new Date,
        id: 0,
        snap: 0
      }))
    )
  }

  onSubmitForm() {
    this.FaceSnapsService.addFaceSnap(this.snapform.value).pipe(
      tap(()=>this.router.navigateByUrl('/faceSnap'))
    ).subscribe()
  }
}
