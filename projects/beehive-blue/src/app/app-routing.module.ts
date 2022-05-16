import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    "path":"pages/beehive-blue-happy",
     loadChildren:()=>import('./pages/bee-blue-happy/bee-blue-happy.module').then(mod=>mod.BeeBlueHappyModule),
  },
  {
    "path":"pages/beehive-blue-shock",
     loadChildren:()=>import('./pages/bee-blue-shock/bee-blue-shock.module').then(mod=>mod.BeeBlueShockModule),
  },
  {"path":"",redirectTo:"pages/beehive-blue-happy",pathMatch:'full'},
  {"path":"**",redirectTo:"pages/beehive-blue-happy",pathMatch:'full'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
