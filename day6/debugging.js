const measureKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'cels',
        // value: prompt('Degrees celsius'),
        value: '10'
    }

    console.log(measurement);

    console.table(measurement)

    debugger;
    const kelvin = Number(measurement.value) + 273;
    return kelvin;
}
console.log(measureKelvin());
