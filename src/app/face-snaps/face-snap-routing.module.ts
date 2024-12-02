import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { SingleFaceSnappComponent } from "./single-face-snapp/single-face-snapp.component";
import { NewFaceSnapComponent } from "./new-face-snap/new-face-snap.component";
import { AuthGuard } from "../core/guards/auth.guard";

const routes: Routes=[
    {path:'create', component: NewFaceSnapComponent, canActivate: [AuthGuard]},
    {path:'', component: FaceSnapListComponent, canActivate: [AuthGuard]},
    {path:':id', component: SingleFaceSnappComponent, canActivate: [AuthGuard]}
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class FaceSnapRoutingModule{}