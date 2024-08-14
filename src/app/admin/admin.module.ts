import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminContainerComponent } from './container/admin-container/admin-container.component';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { AdminRoutingModule } from './admin.routing.module';



@NgModule({
  declarations: [
    AdminContainerComponent,
    AdminViewComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
