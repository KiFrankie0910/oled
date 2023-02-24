input.onButtonPressed(Button.A, function () {
    smarthome.motorFan(AnalogPin.P15, true)
})
input.onButtonPressed(Button.B, function () {
    smarthome.motorFan(AnalogPin.P15, false)
})
