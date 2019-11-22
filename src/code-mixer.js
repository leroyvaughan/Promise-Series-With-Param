import { Promise } from "bluebird";
import { isNull } from "./global-vars";

export function PromiseSeriesWithParam(arrFunc, paramArr) {
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
          console.log("number added to 12 = " + paramArr[ix]);
          //console.log("last value: " + values);
          console.log("result: " + values);
          return values;
        })
        .catch(err => {
          console.log("err in Promise.reduce: " + err);
        });
    },
    []
  );
}
