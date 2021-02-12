console.log(
  converter('{"distance": {"unit": "m", "value": 0.5}, "convert_to": "cm"}')
);

function converter(str) {
  const table = {
    m: 1000,
    cm: 10,
    in: 25.4,
    ft: 304.8,
  };
  const input = JSON.parse(str);
  const inMM = input.distance.value * table[input.distance.unit];
  const result = inMM / table[input.convert_to];
  console.log(result);
}
