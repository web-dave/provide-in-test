import { Component, OnInit } from "@angular/core";
import { LazyService } from "./lazy.service";

@Component({
  selector: "app-lazy",
  templateUrl: "./lazy.component.html",
  styleUrls: ["./lazy.component.css"]
})
export class LazyComponent implements OnInit {
  constructor(private service: LazyService) {}

  ngOnInit() {}
}
