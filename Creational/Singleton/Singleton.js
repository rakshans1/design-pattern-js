// singletons can be implemented using the module pattern. 
// Private variables and functions are hidden in a function closure, and public methods are selectively exposed.
const president = (function(){
  const presidentsPrivateInformation = 'Super private'

  const name = 'Turd Sandwich'

  const getName = () => name

  return {
      getName
  }
}())

// Here, presidentsPrivateInformation and name are kept private. 
// However, name can be accessed with the exposed president.getName method.

console.log(president.getName()); // Outputs 'Turd Sandwich'
console.log(president.name); // Outputs undefined
console.log(president.presidentsPrivateInformation); // Outputs undefined