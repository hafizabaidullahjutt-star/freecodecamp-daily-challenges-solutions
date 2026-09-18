// @Writer Abaidullah
// @Given 1)Size of the fuel 2) Current fuel level 3) price per Gallon
// @access public (can be used)

function costToFill(tankSize, fuelLevel, pricePerGallon) {
    let Gallon_Needed=tankSize-fuelLevel;
    let cost= Gallon_Needed * pricePerGallon;
  return cost.toFixed(2);
}