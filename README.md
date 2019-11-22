# Promise-Series-With-Param
Created with CodeSandbox.io

Here is a function I used for pulling in EHR data to build patient profiles for the @HomeVitals product with YGIEA Group.  I use BlueBird for my promises in Node.js because I happen to like it.  With Node.js you (as I do) can also use async-await, but I have not taken the time research a replacment for 'Promise Series With Param'.

Maybe if I get the time I'll create an NPM package for this if there isn't one.  I cannot give credit to the person who inspired me to write this because it was in 2017 and I don't remember where.  However, I cannot take full credit for this because I got the code from somewhere online and then modified it to my use.

## Example Usage

**First Parameter will be a function array you want to be processed in a series.**  *It must be a Promise based function!!!*

```
let addNum = 12;

//this function will be the first parameter
function addFunc(numIn){
  return new Promise((resolve, reject) => {
      try{
        let numOut = addNum + numIn;
        resolve(numOut);
      }
      catch(e){
        reject("err in addFunc(): " + e);
      }
  });


```

**Second Parameter will be an array of values that will be passed as a parameter into the first parameter (addFunc)**

```
let numArr = [2, 4, 6, 8, 10];

```



**Here is the usage of PromiseSeriesWithParam**

```
PromiseSeriesWithParam(addFunc, numArr);

```


*> For demonstration purposes I added a random integer with a setTimeout call in 'addFunc'.  This was to demonstrate the series functionality as being solid, not just a claim I'm making.*


**OUTPUT**

```
Promise.seriesWithParam... 

Random setTimeout: 2065 
number added to 12 = 2 
result: 14 

Random setTimeout: 1849 
number added to 12 = 4 
result: 16 

Random setTimeout: 2599 
number added to 12 = 6 
result: 18 

Random setTimeout: 2801 
number added to 12 = 8 
result: 20 

Random setTimeout: 1803 
number added to 12 = 10 
result: 22 

```


Check this out on [codesandbox.io](https://codesandbox.io/s/promise-series-with-param-48bnp)


## TO USE AS A GLOBAL FUNCTION IN A NODE.JS APPLICATION

I usually create a file called globalVars.js and import it into my index.js or app.js file (the main file for my Node.js app).

in that file:

```
global.PromiseSeriesWithParam(arrFunc, paramArr) {
  console.log("Promise.seriesWithParam...");

  var funcArr = [],
    ix = -1;

  //make function call for each item in paramArr
  for (var x = 0; x < paramArr.length; x++) {
    if (isNull(paramArr[x])) {
      console.log("null? " + x);
      throw new Error("null object in paramArr");
    }
    funcArr.push(arrFunc);
  }

  /// values = function output, promise = funcArr-item
  Promise.reduce(
    funcArr,
    (values, promise) => {
      ix++;

      return promise(paramArr[ix])
        .then(values => {
          //useless here.
          //...but in a class file, could be stored in class object
          return values;
        })
        .catch(err => {
          console.log("err in Promise.reduce: ->\t " + err);
        });
    },
    []
  );
}


```
