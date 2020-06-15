var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var GatewaySchema = new Schema({
  usn: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  ip: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^(?:(?:^|\.)(?:2(?:5[0-5]|[0-4]\d)|1?\d?\d)){4}$/.test(v);
      }
    },
  }
});

module.exports = mongoose.model('Gateway', GatewaySchema);
