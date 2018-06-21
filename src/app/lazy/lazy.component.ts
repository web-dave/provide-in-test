import { Component, OnInit } from "@angular/core";
import { LazyService } from "./lazy.service";
import { ModuleBasedServiceService } from "./module-based-service.service";

@Component({
  selector: "app-lazy",
  templateUrl: "./lazy.component.html",
  styleUrls: ["./lazy.component.css"]
})
export class LazyComponent implements OnInit {
  constructor(
    private service: LazyService,
    private service2: ModuleBasedServiceService
  ) {}

  ngOnInit() {}
}
