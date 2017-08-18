# hampool

> NCVEC amateur radio question pools in JSON format

Available on NPM

## Installation

```
npm install hampool
```
## Usage

```js
const hampool = require('hampool');

console.log(hampool.extra.questions[0])
console.log(hampool.general.questions[0])
console.log(hampool.tech.questions[0])

// or require the json directly
const extra = require('hampool/extra');
console.log(extra.questions[0]);
```

## Schema Example

```json
{
  "questions": [
    {
      "id": "E1A01",
      "correct": 3,
      "question": "When using a transceiver that displays the carrier frequency of phone signals, which of the following displayed frequencies represents the highest frequency at which a properly adjusted USB emission will be totally within the band?",
      "answers": [
        "The exact upper band edge",
        "300 Hz below the upper band edge",
        "1 kHz below the upper band edge",
        "3 kHz below the upper band edge"
      ]
    },
    ...
  ]
}
```

## Why?

The amateur radio question pools made [available by
NCVEC](http://www.ncvec.org/page.php?id=338) aren't available in an easily
consumable format. This project converted the Word docs to UTF-8 text and then
parsed that into json.

## Hosted

Need access to this as an API? Thanks to [unpkg](https://unpkg.com), the contents of the NPM package are available at the following endpoints:

- https://unpkg.com/hampool/tech
- https://unpkg.com/hampool/general
- https://unpkg.com/hampool/extra
