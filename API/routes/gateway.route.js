const express = require('express');
const app = express();
const gatewayRoutes = express.Router();

let Gateway = require('../models/Gateway');
let Device = require('../models/Device');

gatewayRoutes.route('/add').post(function (req, res) {
  let gateway = new Gateway(req.body);
  gateway.save()
    .then(gateway => {
      res.status(200).json({ 'Gateway': 'Gateway has been added successfully' });
    })
    .catch(err => {
      res.status(400).send("Unable to save Gateway in database");
    });
});

gatewayRoutes.route('/').get(function (req, res) {
  Gateway.find(function (err, gateways) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(gateways);
    }
  });
});

gatewayRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Gateway.findById(id, function (err, gateway) {
    res.json(gateway);
  });
});

//  Defined update route
gatewayRoutes.route('/update/:id').post(function (req, res) {
  Gateway.findById(req.params.id, function (err, gateway) {
    if (!gateway)
      res.status(404).send("Record not found");
    else {
      gateway.usn = req.body.usn;
      gateway.name = req.body.name;
      gateway.ip = req.body.ip;

      gateway.save().then(gateway => {
        res.json('Update complete');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

gatewayRoutes.route('/delete/:id').get(function (req, res) {
  Gateway.findByIdAndRemove({ _id: req.params.id }, function (err, gateway) {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});


//devices
gatewayRoutes.route('/devices/:id').get(function (req, res) {
  let id = req.params.id;
  Device
    .find({ gateway : id })
    .exec(function (err, devices) {
      if (err) {
        console.log(err);
      }
      else {
        res.json(devices);
      }
    });
});

gatewayRoutes.route('/add-device').post(function (req, res) {
  Device.find({ gateway : req.body.gateway }).exec(function (err, devices) {
      if (err) {
        console.log(err);
      }
      else {
        if (devices.length < 10){
          let device = new Device(req.body);
          device.save()
            .then(device => {
              res.status(200).json({ 'Device': 'Device has been added successfully' });
            })
            .catch(err => {
              res.status(400).send("unable to save to database");
            });
        }
        else{
          res.status(400).send("unable to save to database");
        }
      }
    });



});

gatewayRoutes.route('/edit-device/:id').get(function (req, res) {
  let id = req.params.id;
  Device.findById(id, function (err, device) {
    res.json(device);
  });
});

gatewayRoutes.route('/update-device/:id').post(function (req, res) {
  Device.findById(req.params.id, function (err, device) {
    if (!device)
      res.status(404).send("Record not found");
    else {
      device.uid = req.body.uid;
      device.vendor = req.body.vendor;
      device.created = req.body.created;
      device.status = req.body.status;

      device.save().then(device => {
        res.json('Update complete');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

gatewayRoutes.route('/delete-device/:id').get(function (req, res) {
  Device.findByIdAndRemove({ _id: req.params.id }, function (err, device) {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = gatewayRoutes;
