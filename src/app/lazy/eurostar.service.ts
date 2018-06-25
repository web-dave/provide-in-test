import { Injectable } from "@angular/core";
import { ServiceModule } from "./service/service.module";

@Injectable({ providedIn: ServiceModule })
export class EurostarService {
  constructor() {}
}
