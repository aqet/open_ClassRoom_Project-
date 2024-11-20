import { Injectable } from "@angular/core";
import { FaceSnap } from "../model/face-snap";
import { snap_type } from "../model/snap_type.type";

@Injectable({
    providedIn: 'root'
})

export class FaceSnapsService {
    faceSnaps: FaceSnap[]=[
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
             "https://pics.craiyon.com/2023-09-13/3e3203dfb51c4e658351c0540420d27d.webp",
             new Date,
             120
        ).withLocation('AaA')
    ]

    getFaceSnaps(): FaceSnap[]{
        return [...this.faceSnaps]
    }

    getFaceSnapById(faceSnapId: string):FaceSnap{
        const foundFaceSnape=this.faceSnaps.find(faceSnap => faceSnap.id===faceSnapId);
        if(!foundFaceSnape){
            throw new Error('FaceSnape not foud')
        }
        return foundFaceSnape
    }

    snapFaceSnapById(faceSnapId:string, snap_type: snap_type):void{
        const facesnap =this.getFaceSnapById(faceSnapId);
        facesnap.snap(snap_type)
    }
}
       