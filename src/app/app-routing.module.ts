import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// tslint:disable-next-line:import-spacing
import  { DeptDetailsComponent } from './dept-details/dept-details.component';
import { EmployeeComponent} from './employee/employee.component';
const routes: Routes = [

  {path : 'department', component: DeptDetailsComponent },
  {path : 'employee', component : EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [DeptDetailsComponent, EmployeeComponent];
