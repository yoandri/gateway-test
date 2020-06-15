var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var DeviceSchema = new Schema({
  uid: {
    type: Number,
    required: true,
    unique: true
  },
  vendor: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['offline', 'online'],
    required: true
  },
  gateway : {
    type: Schema.Types.ObjectId,
    ref: 'Gateway'
  },
  created: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Device', DeviceSchema);
