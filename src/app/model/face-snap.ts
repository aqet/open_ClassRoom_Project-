export class FaceSnap {
  location?: string
  constructor(public title: string,
              public description: string,
              public imageUrl: string,
              public createdAt: Date,
              public snaps: number) {}

  updateLocation(location: string): void{
    this.location=location;
  } 
}
