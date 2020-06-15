import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GatewayService } from '../gateway.service';

@Component({
  selector: 'app-gateway-add',
  templateUrl: './gateway-add.component.html',
  styleUrls: ['./gateway-add.component.css']
})
export class GatewayAddComponent implements OnInit {

  gatewayForm: FormGroup;
  constructor(private fb: FormBuilder, private ms: GatewayService, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.gatewayForm = this.fb.group({
      usn: ['', Validators.required],
      name: ['', Validators.required],
      ip: ['', Validators.required]
    });
  }

  addGateway(usn, name, ip) {
    this.ms.addGateway(usn, name, ip);
    this.router.navigate(['gateways']);
  }

  ngOnInit(): void {
  }

}
