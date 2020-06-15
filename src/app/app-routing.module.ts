import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GatewayAddComponent } from './gateway-add/gateway-add.component';
import { GatewayEditComponent } from './gateway-edit/gateway-edit.component';
import { GatewayGetComponent } from './gateway-get/gateway-get.component';

import { DeviceAddComponent } from './device-add/device-add.component';
import { DeviceEditComponent } from './device-edit/device-edit.component';
import { DeviceGetComponent } from './device-get/device-get.component';

const routes: Routes = [
  {
    path: 'gateway/create',
    component: GatewayAddComponent
  },
  {
    path: 'edit/:id',
    component: GatewayEditComponent
  },
  {
    path: 'gateways',
    component: GatewayGetComponent
  },
  {
    path: 'device/create/:id',
    component: DeviceAddComponent
  },
  {
    path: 'device/edit/:id',
    component: DeviceEditComponent
  },
  {
    path: 'devices/:id',
    component: DeviceGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
