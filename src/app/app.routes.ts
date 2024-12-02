import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/components/landing-page/landing-page.component';

export const routes: Routes = [
    {path:'auth', loadChildren: ()=>import('./auth/auth.module').then(n=>n.AuthModule)},
    {path:'faceSnap', loadChildren: ()=> import('./face-snaps/face-snaps.module').then(m=>m.FaceSnapsModule)},
    {path:'', component: LandingPageComponent}
];
