import { Component, Injectable } from "@angular/core";
import { FaceSnap } from "../model/face-snap";
import { snap_type } from "../model/snap_type.type";
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from '@angular/common/http';
import { Observable, map, switchMap } from "rxjs";

import { CommonModule } from '@angular/common';
@Injectable({
    providedIn: 'root'
})

export class FaceSnapsService {
  
  constructor(private http: HttpClient){}

    getAllFaceSnaps(): Observable<FaceSnap[]>{
        return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps')
    }

    getFaceSnapById(faceSnapId: number):Observable<FaceSnap>{
        return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`)
    }

    snapFaceSnapById(faceSnapId:number, snap_type: snap_type):Observable<FaceSnap>{
        return this.getFaceSnapById(faceSnapId).pipe(
            map(facesnap => ({
                ...facesnap,
                snaps: facesnap.snaps + (snap_type==='snap' ? 1 : -1)
            })),
            switchMap(updatedFacesnap => this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`, updatedFacesnap))
        )
    }

    addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }): Observable<FaceSnap> {
        return this.getAllFaceSnaps().pipe(
            map(facesnaps => [...facesnaps].sort((a,b) => a.id - b.id)),
            map(sortedFacesnaps => sortedFacesnaps[sortedFacesnaps.length - 1]),
            map(previousFacesnap => ({
               ...formValue,
               snaps: 0,
               createdDate: new Date(),
               id: previousFacesnap.id + 1
           })),
           switchMap(newFacesnap => this.http.post<FaceSnap>(
               'http://localhost:3000/facesnaps',
               newFacesnap)
           )
       );
    }
}
       