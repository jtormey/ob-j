
# ob-j

Abstract object management and transformations

## Installation

`$ npm install --save ob-j`

```js
var obj = require('ob-j');
```

## Testing

`$ npm test`

## Usage

### Main function

```js
obj(x);
```

Pass an object into `obj` to start transforming it. Methods chained onto the `obj` constructor function are what do all of the modification. By default, this object will be transformed in place.

## Methods

### copy

```js
obj(x).copy();
```

Copies the object passed into `obj` so that it does not get modified in place.

### each

```js
obj(x).each(f);
```

Takes a function `f` that gets passed a single argument: the value of a property of object `x`. The function is applied to each one of the values in object `x`.

### end

```js
var o = obj(x).end();
```

Just returns whatever object is at the end of the current chain. In the above example it returns object `o`. No methods can be chained on after this one (see `.output` if you want to have the option to continue chaining).

### exclude

```js
obj(x).exclude('name');
```

Deletes the properties in object `x` that match the value passed into `.exclude()`. This method can also take an array of values to exclude.

### filter

```js
obj(x).filter('prop');
```

Deletes all properties in object `x` except those that match the value passed into `.filter()`. This method can also take an array of values to filter by.

### map

```js
obj(x).map(o);
```

Maps the property names of object `x` using the key-value pairs of object `o`. Only properties specified in the mapping object are kept.

### modify

```js
obj(x).modify(f);
```

Takes a function that gets passed a single argument: the current object in the chain (in this case it's object `x`). In this function `f` you are able to do custom modifications to any of the object's properties.

### to

```js
var o = {};
obj(x).to(o);
```

Gives all properties and values of object `x` to object `o`. Object `o` becomes the function affected by further chaining.

