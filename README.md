# cast
Enforces JS variables to be of certain type

# Example

```shell
$ yarn add cast
```

```javascript
const { cast } = require('cast');
// ES2015
import { cast } from 'cast';


cast.str(11) // Cast to string
// ''
cast.str(11, 'lol') // Cast to string with fallback
// 'lol'

cast.int('100') // Cast to integer
// 0
cast.int('100', 10) // Cast to integer with fallback
// 10

cast.int('100') // Cast to integer
// 0
cast.int('100', 10) // Cast to integer with fallback
// 10

cast.arr(null) // Cast to array
// []
cast.arr(null, ['a', 'b']) // Cast to array with fallback
// ['a', 'b']

cast.obj(false) // Cast to object
// {}
cast.obj([], {code: 200}) // Cast to object with fallback
// {code: 200}

cast.int(NaN) // Cast to integer
// 0
cast.int(NaN, 5) // Cast to integer with fallback
// 5

cast.flo(100) // Cast to float
// 0
cast.flo(100, 3.14) // Cast to float with fallback
// 3.14

cast.bool('test') // Cast to boolean
// false
cast.bool('test', false) // Cast to boolean with fallback
// false
```