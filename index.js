const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(totalBatteries);
