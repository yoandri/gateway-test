import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GatewayAddComponent } from './gateway-add/gateway-add.component';
import { GatewayGetComponent } from './gateway-get/gateway-get.component';
import { GatewayEditComponent } from './gateway-edit/gateway-edit.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GatewayService } from './gateway.service';
import { DeviceAddComponent } from './device-add/device-add.component';
import { DeviceGetComponent } from './device-get/device-get.component';
import { DeviceEditComponent } from './device-edit/device-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    GatewayAddComponent,
    GatewayGetComponent,
    GatewayEditComponent,
    DeviceAddComponent,
    DeviceGetComponent,
    DeviceEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ GatewayService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
