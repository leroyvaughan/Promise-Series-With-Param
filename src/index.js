import "./styles.css";
import { PromiseSeriesWithParam } from "./code-mixer";
import { getRandomInt } from "./global-vars";
const PatientBuilder = require("./real-world-usage/get-patient-data");

const myNum = 12;

//this array is the second param
const arrParam = [2, 4, 6, 8, 10];

//this function is passed as the first param
function addFunc(numIn) {
  return new Promise((resolve, reject) => {
    try {
      let numOut = myNum + numIn;

      /*

        YOU CAN SET 'randNum' TO ZERO OR REMOVE THE RANDOMNESS
        FOR PRODUCTION USAGE
      */

      let randNum = getRandomInt(1000, 3000);
      console.log("\nRandom setTimeout: " + randNum);

      setTimeout(function() {
        resolve(numOut);
      }, randNum);

      //FOR PRODUCTION USAGE
      // resolve(numOut);
    } catch (e) {
      console.log("error in addFunc: " + e);
    }
  });
}

/* #### BASIC TEST ###### */
//uncomment line below for console output
//PromiseSeriesWithParam(addFunc, arrParam);

/*


*/

/* #### ADVANCED USAGE ###### */
const PatientBuilder = require("./real-world-usage/get-patient-data");
let patientBuilder = new PatientBuilder();
patientBuilder.init("patient1");

/*






















*/
document.getElementById("app").innerHTML = `
<h1>Promise.SeriesWithParam<h1>

`;
