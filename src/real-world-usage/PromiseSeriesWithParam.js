import { Promise } from "bluebird";
import { isNull } from "../global-vars";

export function PromiseSeriesWithParam(arrFunc, paramArr) {
  console.log("Promise.seriesWithParam...");

  var funcArr = [],
    ix = -1;

  //make function call for each item in paramArr
  paramArr.forEach(element => {
    if (!isNull(element)) {
      funcArr.push(arrFunc);
    } else {
      //should not have nulls, but JIC
      throw new Error("null object in paramArr");
    }
  });

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
