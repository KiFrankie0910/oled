OLED.init(128, 64)
basic.forever(function () {
    OLED.writeNumNewLine(smarthome.ReadTemperature(TMP36Type.TMP36_temperature_C, AnalogPin.P1))
})
