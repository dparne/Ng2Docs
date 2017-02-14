
## Typescript

Constructor initialization creates variables by itself. So the following is recommended

#### Do this
```
class ExampleClass {
  constructor(private propA, private propB) {}
}
```

#### Don't do this

```
class ExampleClass {
  private propA: string
  private propB: string
  constructor(propA, propB) {
    this.propA = propA
    this.propB = propB
  }
}
```

### Arrow Operator

Functions can be defined using arrow operators over traditional way. It is recommended to use arrow operator to keep the scope for ```this``` whenever necessary.

__example:__

This is the typescript file
```
class RandomNumber {

    constructor(private value: number) {

    }

    addValuesTraditionally = function(variableOne: number, variableTwo: number) {
        return this.value + variableOne + variableTwo
    }

    addValuesWithArrow = (variableOne: number, variableTwo: number) => { 
        return this.value + variableOne + variableTwo
    }
}
```
which gets transpiled into the following javascript

```
var RandomNumber = (function () {
    function RandomNumber(value) {
        var _this = this;
        this.value = value;
        this.addValuesTraditionally = function (variableOne, variableTwo) {
            return this.value + variableOne + variableTwo;
        };
        this.addValuesWithArrow = function (variableOne, variableTwo) {
            return _this.value + variableOne + variableTwo;
        };
    }
    return RandomNumber;
}());
```

Notice the difference between two functions. When the arrow function is used the scope of the ```this``` is automatically preserved. This is really helpful in avoiding some errors that result from event binding functions.

In traditional function delaration ```this``` will reference the element calling the function.

### Do's and Don'ts 

There is a nice reference to some Do's and Don'ts here for typescript [Do's and Don'ts](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)