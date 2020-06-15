import { Component, OnInit } from '@angular/core';
import Device from '../Device';
import { GatewayService } from '../gateway.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-device-get',
  templateUrl: './device-get.component.html',
  styleUrls: ['./device-get.component.css']
})
export class DeviceGetComponent implements OnInit {

  devices: Device[];
  constructor(private route: ActivatedRoute, private ms: GatewayService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ms.getDevices(params[`id`]).subscribe((data: Device[]) => {
        this.devices = data;
      });
    });
  }

  deleteDevice(id, index) {
    this.ms.deleteDevice(id).subscribe(res => {
      this.devices.splice(index, 1);
    });
  }

}
