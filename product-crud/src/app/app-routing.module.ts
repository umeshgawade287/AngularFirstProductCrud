import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { EditproductComponent } from './components/editproduct/editproduct.component';
import { ListproductComponent } from './components/listproduct/listproduct.component';

const routes: Routes = [
  { path:'',component:ListproductComponent },
  { path:'addproduct',component:AddproductComponent},
  { path:'editproduct/:id',component:EditproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
