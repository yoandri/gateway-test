import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GatewayService } from '../gateway.service';
import { ActivatedRoute, Router } from '@angular/router';
import Device from '../Device';

@Component({
  selector: 'app-device-add',
  templateUrl: './device-add.component.html',
  styleUrls: ['./device-add.component.css']
})
export class DeviceAddComponent implements OnInit {

  deviceForm: FormGroup;
  constructor(private fb: FormBuilder, private ms: GatewayService, private router: Router, private route: ActivatedRoute) {
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

  addDevice(uid, vendor, status, created) {
    this.route.params.subscribe(params => {
      this.ms.addDevice(uid, vendor, created, status, params.id);
      this.router.navigate(['gateways']);
    });
  }

  ngOnInit(): void {
  }

}
