import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GatewayService {

  uri = 'http://localhost:4000/gateways';
  constructor(private http: HttpClient) { }

  addGateway(usn, name, ip) {
    const obj = {
      usn,
      name,
      ip
    };
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(
        result => {
          alert("Gateway has been added successfully");
        },
        error => {
          alert("Unable to save Gateway in database");
        }
      );
  }

  getGateways() {
    return this.http.get(`${this.uri}`);
  }

  editGateway(id) {
    return this.http.get(`${this.uri}/edit/${id}`);
  }

  updateGateway(usn, name, ip, id) {
    const obj = {
      usn,
      name,
      ip
    };
    this.http.post(`${this.uri}/update/${id}`, obj).subscribe(
      result => {
        alert("Gateway has been updated successfully");
      },
      error => {
        alert("Unable to update Gateway in database");
      }
      );
  }

  deleteGateway(id) {
    return this.http.get(`${this.uri}/delete/${id}`);
  }

  getDevices(id) {
    return this.http.get(`${this.uri}/devices/${id}`);
  }

  addDevice(uid, vendor, created, status, gateway) {
    const obj = {
      uid,
      vendor,
      status,
      gateway,
      created
    };
    console.log(obj);
    this.http.post(`${this.uri}/add-device`, obj)
      .subscribe(
        result => {
          alert("Device has been added successfully");
        },
        error => {
          alert("Unable to add Device in database");
        }
      );
  }

  editDevice(id) {
    return this.http.get(`${this.uri}/edit-device/${id}`);
  }

  updateDevice(uid, vendor, created, status, id) {
    const obj = {
      uid,
      vendor,
      created,
      status
    };
    this.http.post(`${this.uri}/update-device/${id}`, obj)
      .subscribe(
        result => {
          alert("Device has been updated successfully");
        },
        error => {
          alert("Unable to update Device in database");
        }
      );
  }

  deleteDevice(id) {
    return this.http.get(`${this.uri}/delete-device/${id}`);
  }
}
