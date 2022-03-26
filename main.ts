let TempoAnalog = 0
let TempoMotor = 0
function Schritt1 (tempo: number) {
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
}
function Schritt4 (tempo: number) {
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
}
function Schritt3 (tempo: number) {
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
}
function Schritt2 (tempo: number) {
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
}
/**
 * Ein bipolarer Schrittmotor soll sich im Vollschrittbetrieb drehen. Benötigt werden 2 H Brücken
 */
/**
 * Tabelle Schrittmotor
 * 
 * Spule 1    Spule 2
 * 
 * 0   1           1    0
 * 
 * 0   1           0    1
 * 
 * 1   0           0    1
 * 
 * 1   0           1    0
 */
basic.forever(function () {
    TempoAnalog = pins.analogReadPin(AnalogPin.P0)
    TempoMotor = TempoAnalog / 4
    Schritt1(1)
    basic.pause(TempoMotor)
    Schritt2(1)
    basic.pause(TempoMotor)
    Schritt3(1)
    basic.pause(TempoMotor)
    Schritt4(1)
    basic.pause(TempoMotor)
})
