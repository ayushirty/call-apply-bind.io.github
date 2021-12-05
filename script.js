//call() function.
function sum() {
  let add = this.num1 + this.num2;
  console.log("Addition of two numbers using call: " + add);
}
function multi() {
  let product = this.num1 * this.num2;
  console.log("Multiplication of two numbers using call: " + product);
}
function diff() {
  let res = this.num1 - this.num2;
  console.log("Diffrence between two numbers using call:" + res);
}
var obj1 = {
  num1: 05,
  num2: 25,
};

sum.call(obj1);
multi.call(obj1);
diff.call(obj1);

//apply() function.

function sum1() {
  var res = 0;
  for (var i = 0; i < arguments_array.length; i++) {
    res = res + arguments_array[i];
  }
  console.log(this.key);
  console.log(res);
}
var obj2 = {
  key: "Using Apply Method adding numbers!",
};
var obj3 = {
  key: "Using Apply Method multiplying numbers!",
};
function multi1() {
  var res = 1;
  for (var i = 0; i < arguments_array.length; i++) {
    res = res * arguments_array[i];
  }
  console.log(this.key);
  console.log(res);
}
var arguments_array = [1, 2, 3, 4, 5];
sum1.apply(obj2, arguments_array);
multi1.apply(obj3, arguments_array);

//using Bind() method.

function sum2() {
    var res =this.num1+this.num2;
    console.log("using bind function: "+res);
}
var obj4 = {
    num1 : 100,
    num2 : 200
}
//setting function bind.
let bind_fun = sum2.bind(obj4);
//getting bind function.
bind_fun();