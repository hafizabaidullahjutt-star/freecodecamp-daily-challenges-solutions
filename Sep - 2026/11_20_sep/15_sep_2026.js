function adjustThermostat(temp, target) {
  return temp < target ? "heat" : temp > target ? "cool" : "hold";
}