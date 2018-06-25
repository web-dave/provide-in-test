import { Component, OnInit } from "@angular/core";
import { LazyService } from "./lazy.service";
import { ModuleBasedServiceService } from "./module-based-service.service";
import { EurostarService } from "./eurostar.service";

@Component({
  selector: "app-lazy",
  templateUrl: "./lazy.component.html",
  styleUrls: ["./lazy.component.css"]
})
export class LazyComponent implements OnInit {
  constructor(
    private service: LazyService,
    private star: EurostarService,
    private service2: ModuleBasedServiceService
  ) {}

  ngOnInit() {}
}
