# DKRHexLoader
Simple script to add hex loader to page

# Install
npm i dkrhexloader

# Usage
```js
import {DKRHexLoader} from 'dkrhexloader';

let loader = new DKRHexLoader(300,300, 200);
loader.startLoader();
...
loader.stopLoader();


```

# Params
```js

new DKRHexLoader(
x,  //canvas position  
y,  //canvas position 
size, //canvas size 
speed, //animation speed (default 100)
maskStyle, //styles for backgraund (default 'background: black;opacity: 0.4;filter: blur(8px);')
color //fill color for hex (default '#fff')
);

```
