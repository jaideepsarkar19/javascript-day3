//forloop
const n = 5;


for (let i = 1; i <= n; i++) {
   

    console.log(i);     
}

//for in 

const student = {
    name: 'Jasbeer',
    class: 11,
    age: 18
}

console.log (student.name+" "+student.class+" "+student.age );


// Created my own resume data in JSON format

let resume={
    "basics": {
      "name": "JAIDEEP SARKAR",
      "email": "jaideep.sarkar19@rediffmail.com",
      "phone": 8697768076,
      "Profession": "IT SYSTEMS ADMIN",
      "skills": {"Programming" : "JavaScript", "IT ADMIN": "WINDOWS LINUX ADMINISTRATION AND NETWORKING"},
      "location": {
        "address": "842/D UPEN BANERJEE ROAD KOLKATA ",
        "postalCode": 700060,
        "city": "Kolkata",
        "state": "West Bengal",
        "country": "India"}
      }
    }