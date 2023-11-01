const sampleObject = {
  name: 'John',
  age: 30,
  city: 'New York'
};

const keysArray = Object.keys(sampleObject);

console.log(keysArray);
// Output: ['name', 'age', 'city']

Object.keys(data.districts).map((currE, index) => {
  // ...
});
Object.keys(data.districts): This part takes the data.districts object and returns an array of its property names (keys). For example, if data.districts contains properties like "district1", "district2", and so on, Object.keys(data.districts) will return an array ["district1", "district2", ...]. Essentially, it extracts the names of the districts from the object...
.map((currE, index) => { ... }): The .map() function is applied to the array of district names returned by Object.keys(data.districts). It iterates over each element (district name) in the array and performs a specific operation for each element.

currE: This variable represents the current element (district name) being processed during each iteration.
index: This variable represents the index of the current element in the array.