Synth's `number` type allows for generating fixed-width numbers. 

### Parameters 

#### `subtype`
All the variants of `number` accept an optional `"subtype"` field to specify
the width and primitive kind of the values generated. The value of `"subtype"`,
if specified, must be one of `u64`, `i64`, `f64`, `u32`, `i32`, `f32`.

#### Example

```json synth
{
  "type": "number",
  "subtype": "u32",
  "constant": 42
}
```

It is not required to specify the `"subtype"` field: `synth` will try to infer
the best value based on the value of other parameters. But it may be necessary
to set it manually in situations where the data sink only accepts certain
widths (e.g. postgres).

## range

Defines a range over a semi-open interval `[low, high)` with a specified `step`. Values are generated by sampling a
random non-negative integer `n` and computing `low + n*step`.

#### Example

```json synth
{
  "type": "number",
  "range": {
      "high": 15000000.0, // temperature at sun's core in Celcius
      "low": -273.15,     // 0 Kelvin
      "step": 0.01
  }
}
```

## constant

A constant number type. This will always evaluate to the same number.

#### Example

```json synth
{
  "type": "number",
  "constant": 3.14159  // pi
}
```

The constant number generator can also be simply declared by its desired output value.

#### Example

The schema

```json synth
{
  "type": "object",
  "just_the_number_42": 42
}
```

is the same as the longer

```json synth
{
  "type": "object",
  "just_the_number_42": {
    "type": "number",
    "constant": 42
  }
}
```

## id

A monotonically increasing number type, most commonly used as a unique row identifier. The optional `start` field
defaults to 1 if unspecified.

Synth currently supports `u64` ids.

#### Example

```json synth
{
  "type": "array",
  "length": {
    "type": "number",
    "constant": 5
  },
  "content": {
    "type": "number",
    "id": {
      "start_at": 10
    }
  }
}
```