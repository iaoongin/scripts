async function _battery() {
    var batteryLevel = Device.batteryLevel()
    var isCharging = Device.isCharging()
    var color = isCharging ? Color.green() : Color.white()
    addText(text = ((batteryLevel * 100).toFixed(0) + '%'), 20, color)
}