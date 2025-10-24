# JavaScript Essentials: `bind`, `call`, `apply`, `this`, Lexical Scope & Closures

## 🔧 `bind()`, `call()`, and `apply()` in JavaScript

### Basic Concept of `this`
In JavaScript, `this` refers to the object that is executing the current function. These methods help explicitly set the value of `this`.

---

### `call()` Method
- **Purpose**: Invokes a function immediately with a specified `this` value and arguments.
- **Syntax**: `func.call(thisArg, arg1, arg2, ...)`
- **Example**:
  ```javascript
  function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
  }

  const person = { name: "Alice" };
  greet.call(person, "Hello"); // Output: Hello, Alice
  ```

---

### `apply()` Method
- **Purpose**: Similar to `call()`, but takes arguments as an array.
- **Syntax**: `func.apply(thisArg, [arg1, arg2, ...])`
- **Example**:
  ```javascript
  greet.apply(person, ["Hi"]); // Output: Hi, Alice
  ```

---

### `bind()` Method
- **Purpose**: Returns a new function with a bound `this` value, but does **not** invoke it immediately.
- **Syntax**: `const boundFunc = func.bind(thisArg)`
- **Example**:
  ```javascript
  const boundGreet = greet.bind(person);
  boundGreet("Hey"); // Output: Hey, Alice
  ```

---

### Key Differences

| Method | Invokes Immediately | Accepts Arguments | Returns New Function |
|--------|---------------------|-------------------|----------------------|
| `call` | ✅ Yes              | Comma-separated   | ❌ No                |
| `apply`| ✅ Yes              | Array             | ❌ No                |
| `bind` | ❌ No               | Comma-separated   | ✅ Yes               |

---

## `this` in Different Contexts

### Global Scope
```javascript
console.log(this); // window (in browser)
```

- **Non-strict mode**: `this` refers to the global object.
- **Strict mode**: `this` is `undefined`.

---

### Regular Function Scope
```javascript
function show() {
  console.log(this);
}
show(); // window (non-strict), undefined (strict)
```

---

### Inside an Object
```javascript
const obj = {
  name: "Box",
  show: function () {
    console.log(this.name);
  }
};
obj.show(); // "Box"
```

---

### Arrow Function
```javascript
const obj = {
  name: "Arrow",
  show: () => {
    console.log(this.name);
  }
};
obj.show(); // undefined
```

- Arrow functions inherit `this` from their **lexical scope**.

---

### Summary Table

| Context           | `this` refers to…                          |
|-------------------|--------------------------------------------|
| Global (non-strict)| Global object (`window`)                  |
| Global (strict)    | `undefined`                               |
| Regular function   | Depends on how it's called                |
| Object method      | The object itself                         |
| Arrow function     | Lexical scope (surrounding context)       |

---

## Lexical Scope

### Definition
Lexical scope means that the scope of a variable is determined by its **position in the source code**.

### Example
```javascript
function outer() {
  const outerVar = "I'm from outer";

  function inner() {
    console.log(outerVar);
  }

  inner();
}
outer();
```

---

## Scope Chain

### Definition
The scope chain is the process JavaScript uses to resolve variable names.

### Example
```javascript
const globalVar = "I'm global";

function outer() {
  const outerVar = "I'm outer";

  function inner() {
    const innerVar = "I'm inner";
    console.log(globalVar);
    console.log(outerVar);
    console.log(innerVar);
  }

  inner();
}
outer();
```

---

## Closures

### Definition
A closure is created when a function "remembers" variables from its lexical scope even after the outer function has finished executing.

### Example
```javascript
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
```

---

## Real-World Uses of Closures

### Currying
```javascript
function multiply(a) {
  return function(b) {
    return a * b;
  };
}

const double = multiply(2);
console.log(double(5)); // 10
```

---

### Module Pattern
```javascript
const CounterModule = (function () {
  let count = 0;

  return {
    increment: function () {
      count++;
      return count;
    },
    reset: function () {
      count = 0;
    }
  };
})();
```

---

### Async State
```javascript
function delayedLogger(message) {
  setTimeout(function () {
    console.log(message);
  }, 1000);
}
delayedLogger("Hello after 1 second");
```

---

### Loop Closure with `let` vs `var`
```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000); // 0, 1, 2
}

for (var j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 1000); // 3, 3, 3
}
```

---

## Closure Memory Visualization

> Think of a closure as a backpack: when a function is created, it packs all the variables from its lexical scope and carries them wherever it goes.

---

## Closure Use Cases Summary

| Pattern         | Purpose                         | Closure Role                          |
|----------------|----------------------------------|----------------------------------------|
| Currying        | Function customization           | Remembers initial arguments            |
| Module pattern  | Encapsulation & privacy          | Keeps internal state hidden            |
| Event handlers  | Dynamic behavior                 | Accesses outer variables               |
| Async callbacks | Delayed execution with context   | Preserves state across time            |

