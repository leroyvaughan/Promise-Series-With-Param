# This simulates a real world usage example.  

## get-patient-data.js
This is the module that would be imported into another file (see /src/index.js).

**But basically**:
```
const PatientBuilder = require("{relativePath}/real-world-usage/get-patient-data");
let patientBuilder = new PatientBuilder();
patientBuilder.init("patient1"); //just an example patientId...or parameter

```





## CONSOLE OUTPUT
```
Promise.seriesWithParam... 


getting patient info for: patient1 
data saved to (patient-info) for patient: patient1 
{
    "name": "test patient",
    "age": "79",
    "gender": "male"
} 


getting allergies for: patient1 
data saved to (allergies) for patient: patient1 
{
    "patientID": "patient1",
    "allergies": [
        {
            "description": "cheese",
            "reaction": "hives"
        },
        {
            "description": "milk",
            "reaction": "frequent farts"
        }
    ],
    "total": 2
} 


getting conditions for: patient1 
data saved to (conditions) for patient: patient1 
{
    "patientID": "patient1",
    "conditions": [
        {
            "description": "limp in walk",
            "dateRecorded": "1974-08-21T03:13:42.361Z",
            "cause": "Pimpin ain't easy"
        },
        {
            "description": "abnormally large biceps",
            "dateRecorded": "2000-01-01T01:01:42.381Z",
            "cause": "A curse from God"
        },
        {
            "description": "abnormally large pectorals",
            "dateRecorded": "2000-01-01T01:01:42.381Z",
            "cause": "A curse from God"
        }
    ],
    "total": 3
} 


getting medications for: patient1 
data saved to (medications) for patient: patient1 
{
    "patientID": "patient1",
    "medications": [
        {
            "description": "naproxen sodium",
            "dateRecorded": "2010-07-03T12:23:38.211Z",
            "dosageInstruction": "200 mg, As Needed",
            "quantity": "2",
            "route": "Oral",
            "summary": "Take as needed for alleviating pain associated with carrying around such huge biceps and massive chest"
        }
    ],
    "total": 1
} 
```
