import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TwoComponent } from "./two/two.component";
import { OneService } from "./services/one.service";
import { ThreeComponent } from "./three/three.component";
import { ThreeService } from "./services/three.service";
import { FiveService } from "./services/five.service";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [AppComponent, TwoComponent, ThreeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [OneService, ThreeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
