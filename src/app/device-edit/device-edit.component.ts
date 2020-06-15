import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GatewayService } from '../gateway.service';

@Component({
  selector: 'app-device-edit',
  templateUrl: './device-edit.component.html',
  styleUrls: ['./device-edit.component.css']
})
export class DeviceEditComponent implements OnInit {
  deviceForm: FormGroup;
  device: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private ms: GatewayService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.deviceForm = this.fb.group({
      uid: ['', Validators.required],
      vendor: ['', Validators.required],
      status: ['', Validators.required],
      created: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ms.editDevice(params[`id`]).subscribe(res => {
        this.device = res;
        this.device.created = this.device.created.toString().substring(0,10);
      });
    });
  }

  updateDevice(uid, vendor, status, created) {
    this.route.params.subscribe(params => {
      this.ms.updateDevice(uid, vendor, created, status, params.id);
      this.router.navigate(['gateways']);
    });
  }

}
