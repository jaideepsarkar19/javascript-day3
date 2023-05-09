//XMLHTTP request to extract JSON object from API countries 

//create object for xhr method
let xhr=new XMLHttpRequest();
//object with request 
  xhr.open("GET","https://restcountries.com/v3/all");

  // listerners to complete the request
  xhr.onload=function(){
    if(xhr.status>=200&&xhr.status<300)
    {let jsonobj=JSON.parse(this.response);
   for(let i=0;i<jsonobj.length;i++)
   {console.log(`Country:${jsonobj[i].name}
   Flag: ${jsonobj[i].flags}
   Region:$[ jsonobj[i].region}
   Sub-Region:${jsonobj[i].subregion}
   Population:${jsonobj[i].population} 
   `
   )
   }
  }
  //to make a reqest
  xhr.send();