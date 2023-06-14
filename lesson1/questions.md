# Lesson 1 Questions & Reflections

[TOC]

---

# Dependency vs. Collaboration

Is it correct that a program has less dependency when an object method changes its own state rather than something else directly changing the state?

## Example 1

Code Snippet 1:

```javascript
const hair = {
  color: 'brown',
  length: 'long',
};

const curtis = {
  hair,
  cutHair() {
    this.hair.length = 'short';
  }
};

console.log(curtis.hair.length);
curtis.cutHair();
console.log(curtis.hair.length);
```

Code Snippet 2:

```javascript
const hair = {
  color: 'brown',
  length: 'long',
  cutHair() {
    this.length = 'short';
  }
};

const curtis = {
  hair,
};

console.log(curtis.hair.length);
curtis.hair.cutHair();
console.log(curtis.hair.length);
```

Questions:

- Should `cutHair` be a method of `hair` rather than `curtis`, as in Example 2?
- Does Example 1 have a dependency since line 9 directly modifies a state of another object?

## * Example 2

(pass arguments)
