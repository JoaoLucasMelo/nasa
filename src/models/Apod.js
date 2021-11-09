


export class Apod {
  constructor(data){
    this.apod = data.hdurl
    this.title = data.title
    this.description = data.explanation
  }
}