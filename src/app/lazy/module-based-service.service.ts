import { Injectable } from "@angular/core";
import { LazyModule } from "./lazy.module";

@Injectable({
  providedIn: LazyModule
})
export class ModuleBasedServiceService {
  constructor() {}
}
