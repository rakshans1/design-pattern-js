👷 Builder
--------------------------------------------
Real world example
> Imagine you are at Hardee's and you order a specific deal, lets say, "Big Hardee" and they hand it over to you without *any questions* this is the example of simple factory. But there are cases when the creation logic might involve more steps. For example you want a customized Subway deal, you have several options in how your burger is made e.g what bread do you want? what types of sauces would you like? What cheese would you want? etc. In such cases builder pattern comes to the rescue.

In plain words
> Allows you to create different flavors of an object while avoiding constructor pollution. Useful when there could be several flavors of an object. Or when there are a lot of steps involved in creation of an object.

Wikipedia says
> The builder pattern is an object creation software design pattern with the intentions of finding a solution to the telescoping constructor anti-pattern.

Having said that let me add a bit about what telescoping constructor anti-pattern is. At one point or the other we have all seen a constructor like below:

```js
constructor(size, cheese = true, pepperoni = true, tomato = false, lettuce = true) {
    // ... 
}
```

As you can see the number of constructor parameters can quickly get out of hand and it might become difficult to understand the arrangement of parameters. Plus this parameter list could keep on growing if you would want to add more options in future. This is called telescoping constructor anti-pattern.

When you find that the number of arguments to a function or method are too many (normally any more than 2 arguments is considered too much), use a single object argument instead of multiple arguments. This serves two purposes :

1. It makes your code look less cluttered, since there is only one argument.
2. You don't have to worry about the order of arguments since arguments are now passed as named properties of the object.

For example : 

```js
const burger = new Burger({
    size : 14,
    pepperoni : true,
    cheeze : false,
    lettuce : true,
    tomato : true
})
```

instead of :

```
const burger = new Burger(14, true, false, true, true)
```

**When to use?**

When there could be several flavors of an object and to avoid the constructor telescoping. The key difference from the factory pattern is that factory pattern is to be used when the creation is a one step process while builder pattern is to be used when the creation is a multi step process.