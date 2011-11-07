# rget
Copyright (C) 2011 by Maciej Małecki  
MIT License (see LICENSE file)

Access your properties by string. Recursively!

## Usage

```javascript
var rget = require('rget');

var obj = {
  user: {
    name: 'Fred',
    preferences: {
      coffee: 'black'
    }
  }
};

rget(obj, 'user.preferences.coffee'); // => 'black'

//
// It also supports custom separators.
//
rget(obj, 'user:preferences:coffee', ':'); // => 'black'
```

## Installation

    npm install rget

