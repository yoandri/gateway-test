import { Component, OnInit } from '@angular/core';
import Gateway from '../Gateway';
import { GatewayService } from '../gateway.service';

@Component({
  selector: 'app-gateway-get',
  templateUrl: './gateway-get.component.html',
  styleUrls: ['./gateway-get.component.css']
})
export class GatewayGetComponent implements OnInit {

  gateways: Gateway[];
  constructor(private ms: GatewayService) { }

  ngOnInit() {
    this.ms.getGateways()
      .subscribe((data: Gateway[]) => {
        this.gateways = data;
      });
  }

  deleteGateway(id, index) {
    this.ms.deleteGateway(id).subscribe(res => {
      this.gateways.splice(index, 1);
    });
  }

}
