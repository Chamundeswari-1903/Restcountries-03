// To compare two JSON 

const json1 = '{"name": "person1", "age": 5}';
const json2 = '{"age": 5, "name": "person1"}';

function compareJson(json1, json2) {
  const obj1 = JSON.parse(json1);
  const obj2 = JSON.parse(json2);

  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (let key in obj1) {
    if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

const result = compareJson(json1, json2);
console.log(result);
