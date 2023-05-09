

function compare(original, copy) {
    for (let [k, v] of Object.entries(original)) {
      if (typeof v === "object" && v !== null) {
        if (!copy.hasOwnProperty(k)) {
          copy[k] = v; // 2
        } else {
          compare(v, copy?.[k]);
        }
      } else {
        if (Object.is(v, copy?.[k])) {
          delete copy?.[k]; // 1
        }
      }
    }
    return JSON.stringify(copy);
  }
  
  const 
    obj1 =
      '{"name":"Person1","age":5}',
    obj2= '{"age":5,"name":"Person1"}',
    diff = compare(JSON.parse(obj1), JSON.parse(barca));
  
  console.log(diff);
  