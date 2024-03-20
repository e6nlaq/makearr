# makearr

## Install
```bash
npm i makearr
```

## Usage
CommonJS
```typescript
const makearr = require('makearr');

makearr.makearr<number>(3, 1); // => [1, 1, 1]

makearr.makearr2<number>(3, 2, 1);
// =>
// [
//   [1, 1]
//   [1, 1]
//   [1, 1]
// ]

```

ESModule
```typescript
import { makearr, makearr2 } from 'makearr';

makearr<number>(3, 1); // => [1, 1, 1]

makearr2<number>(3, 2, 1);
// =>
// [
//   [1, 1]
//   [1, 1]
//   [1, 1]
// ]

```
