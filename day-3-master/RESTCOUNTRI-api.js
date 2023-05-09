/// wether_api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b9e563408b68cf4faf5e8aff6b3bde4b`

global_parent = document.querySelector('.parent')

countries_api = 'https://restcountries.com/v2/all'

// 'GET', 'POST' , 'PUT' , 'DELETE'

output = fetch(countries_api,{
    "method":"GET",
    "content-type":" application/json; charset=UTF-8"
})


console.log(output);

output.then((res)=>{
    console.log(res) // response
    const out = res.json() // promise have to resolve this to fetch the response
    return out
})
    .then((res)=>{
        console.log(res)
        console.log(JSON.stringify(res[0]))
        
        for(let i of res){

            let names=i[`name`]
            let img_flag = i['flags']['svg']
            
            let region = i['region']
          let alphaCode=i['alpha3Code']
          let population=i['population']
          let subregion=i['subregion']
          let capital = i['capital']

         console.log(`country- ${names} flag is ${img_flag} `)
        // console.log(capital)
        // console.log(region)
        // console.log(population)
        // console.log(subregion)

          let parent_flat_data = document.createElement('div')
 parent_flat_data.style.background=`#645a56`
 parent_flat_data.style.color=`white`
 parent_flat_data.style.border=`1px solid white`
            // creating image
            let img_ele = document.createElement('img')
            img_ele.src = img_flag
            img_ele.setAttribute('height',"50px")
            parent_flat_data.append(img_ele)

            // add caplital & region
            let name_ele=document.createElement('p')
            let capital_ele = document.createElement('p')
            let region_ele = document.createElement('p')
            let code_ele = document.createElement('p')
            
            name_ele.innerText = ` ${names} `
            capital_ele.innerText = `Capital: ${capital}`
            region_ele.innerText = `Region: ${region}`
            code_ele.innerTtext=`Country Code:${alphaCode}`
            parent_flat_data.append(name_ele)
            parent_flat_data.append(capital_ele)
            parent_flat_data.append(region_ele)
            parent_flat_data.append(code_ele)
            
            if(capital){

         
                
                try{
                    console.log(`country -${names} capital is ${capital}`)
                    console.log(`${names}- population is `,population);
                    console.log(`${names}  region is ${region}`)
                    console.log(`${names}   subregion is`,subregion);
                }
                catch{
                    console.log('this capital is not having population');
                    console.log(capital);
                }
                
                // adding button
                var button_ele = document.createElement('button')
             
                button_ele.style.background=`#645a56`
                button_ele.style.color=`white`
                

                parent_flat_data.append(button_ele)
                

                parent_flat_data.style.border = '2px solid white'
                parent_flat_data.style.margin = '10px'
                parent_flat_data.style.padding = '10px'
                global_parent.append(parent_flat_data)
              

                console.log('flag',img_flag);
            }

            // break
        }
        // console.log(JSON.stringify(fulllat));
       
    })

