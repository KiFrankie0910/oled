OLED.init(128, 64)
basic.forever(function () {
    OLED.writeString("Temp" + smarthome.ReadTemperature(TMP36Type.TMP36_temperature_C, AnalogPin.P2))
    OLED.writeStringNewLine("Light" + Environment.ReadLightIntensity(AnalogPin.P2))
})
