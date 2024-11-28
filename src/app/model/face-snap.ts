import { snap_type } from "./snap_type.type"

export class FaceSnap {
  location?: string
  constructor(public title: string,
              public description: string,
              public imageUrl: string,
              public createdAt: Date,
              public snaps: number,
              public id: number) {}
    
    removeSnap():void{
      this.snaps--
    }

    addsnap():void{
      this.snaps++
    }

    snap(snap_type: snap_type){
      if(snap_type==='snap'){
        this.addsnap();
      }else if(snap_type==='unSnap'){
        this.removeSnap()
      }
    }

              
  updateLocation(location: string): void{
    this.location=location;
  } 

  withLocation(location:string):FaceSnap{
    this.updateLocation(location)
    return this
  }
}
