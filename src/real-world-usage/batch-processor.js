/*
 * This is sample code of how I used my
 * PromiseSeriesWithParam module to do
 * batch processing of patientIDs
 */

import { PromiseSeriesWithParam } from "./PromiseSeriesWithParam";
const PatientBuilder = require("./get-patient-data");

let patientIDs = ["p1", "p2", "p3", "p4"];

export default function processPatients() {
  patientIDs.forEach(pID => {
    let patientBuilder = new PatientBuilder();
    patientBuilder.init(pID);
  });
}
