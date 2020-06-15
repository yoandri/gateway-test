import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GatewayService } from '../gateway.service';

@Component({
  selector: 'app-gateway-edit',
  templateUrl: './gateway-edit.component.html',
  styleUrls: ['./gateway-edit.component.css']
})
export class GatewayEditComponent implements OnInit {
  gatewayForm: FormGroup;
  gateway: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private ms: GatewayService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.gatewayForm = this.fb.group({
      usn: ['', Validators.required],
      name: ['', Validators.required],
      ip: ['', Validators.required]
    });
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ms.editGateway(params[`id`]).subscribe(res => {
        this.gateway = res;
      });
    });
  }

  updateGateway(usn, name, ip) {
    this.route.params.subscribe(params => {
      this.ms.updateGateway(usn, name, ip, params.id);
      this.router.navigate(['gateways']);
    });
  }

}
