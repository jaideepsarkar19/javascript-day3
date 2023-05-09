//Comparing two  Json objects 
let obj1={
    name:"Person 1",
    age:5
}
let obj2={
    age:5,
    name:"Person 1"
    }
// fuction declared to compare two objects to return True on equality or False on not equal.
    function compare ( object1,object2)
    { let a= JSON.stringify(obj1);
      let b=JSON.stringify(obj2);
          return a.split(``).sort().join(``) === b.split(``.sort().join(``));
    }
    console.log( compare(obj1,obj2));

  //  OUTPUT
  //True

 

 
 