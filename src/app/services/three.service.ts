import { Injectable } from "@angular/core";

console.warn("ThreeService is here");

@Injectable()
export class ThreeService {
  constructor() {
    console.log("Hello Three");
  }
}
