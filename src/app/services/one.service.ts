import { Injectable } from "@angular/core";

console.warn('OneService is here')

@Injectable()
export class OneService {
  constructor() {
    console.log("Hello One");
  }
}
