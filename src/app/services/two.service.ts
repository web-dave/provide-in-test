import { Injectable } from "@angular/core";
import { TwoComponent } from "../two/two.component";

console.warn("TwoService is here");

@Injectable({
  providedIn: "root"
})
export class TwoService {
  constructor() {
    console.log("Hello Two");
  }
}
