import "./styles.css";
import { PromiseSeriesWithParam } from "./code-mixer";
import { getRandomInt } from "./global-vars";

const myNum = 12;

//this array is the second param
const arrParam = [2, 4, 6, 8, 10];

//this function is passed as the first param
function addFunc(numIn) {
  return new Promise((resolve, reject) => {
    try {
      let numOut = myNum + numIn;
      let randNum = getRandomInt(1000, 3000);

      console.log("\nRandom setTimeout: " + randNum);

      setTimeout(function() {
        resolve(numOut);
      }, randNum);
    } catch (e) {
      console.log("error in addFunc: " + e);
    }
  });
}

PromiseSeriesWithParam(addFunc, arrParam);

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
