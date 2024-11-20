import { Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnappComponent } from './single-face-snapp/single-face-snapp.component'
export const routes: Routes = [
    {path:'', component: LandingPageComponent},
    {path:'faceSnap', component: FaceSnapListComponent},
    {path:'faceSnap/:id', component: SingleFaceSnappComponent}
];
