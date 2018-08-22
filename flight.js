var arDrone = require('ar-drone');

var client = arDrone.createClient();
client.config('control:altitude_max', 3000); // 3m altitude
require('ar-drone-png-stream')(client, { port: 8000 });

client.takeoff();

client
  .after(5000, function() {
    this.clockwise(0.5);
  })
  .after(3000, function() {
    this.animate('flipLeft', 15);
  })
  .after(1000, function() {
    this.stop();
    this.land();
  });