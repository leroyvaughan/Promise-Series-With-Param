import { Promise } from "bluebird";

export function PromiseSeriesWithParam(FuncCalledForArrayItems, paramArr) {
  return new Promise((resolve, reject) => {
    console.log("Promise.seriesWithParam w/ Promise.mapSeries...");

    //make function call for each item in paramArr
    Promise.mapSeries(paramArr, function(funcInArr) {
      FuncCalledForArrayItems(funcInArr)
        .then(result => {
          // This will run after the last step is done
          console.log(result);

          return resolve();

          //optionally pass result to get-patient-data.init();
          // return resolve(result);
        })
        .catch(err => {
          return reject("err in Promise.seriesWithParam.mapSeries:\t" + err);
        });
    })
      .then(values => {
        resolve("done");

        //optional
        // resolve(values);
      })
      .catch(err => {
        reject("err in Promise.seriesWithParam:\t" + err);
      });
  });
}

//http://bluebirdjs.com/docs/api/promise.mapseries.html
