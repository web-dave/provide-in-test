import { Component, OnInit } from "@angular/core";
import { TwoService } from "../services/two.service";

@Component({
  selector: "app-two",
  templateUrl: "./two.component.html",
  styleUrls: ["./two.component.css"]
})
export class TwoComponent implements OnInit {
  constructor(private service: TwoService) {}

  ngOnInit() {}
}
