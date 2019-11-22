import { PromiseSeriesWithParam } from "./PromiseSeriesWithParam";

var getPatientData = function() {
  const self = this;
  let pID = "";
  const arrayOfFuncsToProcess = [
    getPatientInfo,
    getAllergies,
    getConditions,
    getMedications
  ];

  //make Promise-based series call

  self.init = function(patientId) {
    return new Promise((resolve, reject) => {
      try {
        pID = patientId;
        resolve(PromiseSeriesWithParam(saveData, arrayOfFuncsToProcess));
      } catch (e) {
        reject("err in getPatientData():\t" + e);
      }
    });
  };

  function saveData(inFunc) {
    return new Promise((resolve, reject) => {
      inFunc()
        .then(resp => {
          const collectionName = resp.collection;
          const jsonData = resp.data;

          //this sould also be a promise-based func in real-world
          console.log(
            "data saved to (" + collectionName + ") for patient: " + pID
          );
          // console.log(jsonData);

          console.log(JSON.stringify(jsonData, null, 4));
          resolve();
        })
        .catch(err => {
          //could be better...
          reject(err);
        });
    });
  }

  function getPatientInfo() {
    return new Promise((resolve, reject) => {
      console.log("\n\ngetting patient info for: " + pID);
      try {
        let returnObj = {
          collection: "patient-info"
        };

        //simulate data fetched from EHR
        returnObj.data = {
          name: "test patient",
          age: "79",
          gender: "male"
        };

        resolve(returnObj);
      } catch (e) {
        reject("err in getPatientInfo()");
      }
    });
  }

  function getAllergies() {
    return new Promise((resolve, reject) => {
      console.log("\n\ngetting allergies for: " + pID);
      try {
        let returnObj = {
          collection: "allergies"
        };

        //simulate data fetched from EHR
        returnObj.data = {
          patientID: "patient1",
          allergies: [
            { description: "cheese", reaction: "hives" },
            { description: "milk", reaction: "frequent farts" }
          ],
          total: 2
        };

        resolve(returnObj);
      } catch (e) {
        reject("err in getAllergies()" + e);
      }
    });
  }

  function getConditions() {
    return new Promise((resolve, reject) => {
      console.log("\n\ngetting conditions for: " + pID);
      try {
        let returnObj = {
          collection: "conditions"
        };

        //simulate data fetched from EHR
        returnObj.data = {
          patientID: "patient1",
          conditions: [
            {
              description: "limp in walk",
              dateRecorded: "1974-08-21T03:13:42.361Z",
              cause: "Pimpin ain't easy"
            },
            {
              description: "abnormally large biceps",
              dateRecorded: "2000-01-01T01:01:42.381Z",
              cause: "A curse from God"
            },
            {
              description: "abnormally large pectorals",
              dateRecorded: "2000-01-01T01:01:42.381Z",
              cause: "A curse from God"
            }
          ],
          total: 3
        };

        resolve(returnObj);
      } catch (e) {
        reject("err in getConditions()" + e);
      }
    });
  }

  function getMedications() {
    return new Promise((resolve, reject) => {
      console.log("\n\ngetting medications for: " + pID);
      try {
        let returnObj = {
          collection: "medications"
        };

        //simulate data fetched from EHR
        returnObj.data = {
          patientID: "patient1",
          medications: [
            {
              description: "naproxen sodium",
              dateRecorded: "2010-07-03T12:23:38.211Z",
              dosageInstruction: "200 mg, As Needed",
              quantity: "2",
              route: "Oral",
              summary:
                "Take as needed for alleviating pain associated with carrying around such huge biceps and massive chest"
            }
          ],
          total: 1
        };

        resolve(returnObj);
      } catch (e) {
        reject("err in getMedications()" + e);
      }
    });
  }
};

module.exports = () => {
  return new getPatientData();
};
