import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
const routes: Routes = [
  {
    path: "",
    redirectTo: "/lazy",
    pathMatch: "full"
  },
  {
    path: "lazy",
    loadChildren: "./lazy/lazy.module#LazyModule"
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
