var nameVar = 'Andrew';
var nameVar = 'Mike'
console.log('nameVar: ' , nameVar);


let firstName = ' Carlos';
firstName = 'Mike';

console.log('firstName: ', firstName)




const lastName = 'Rojas';
const lastName = 'Carranza'

console.log('lastName: ', lastName)


const multiplier = {
   numbers: [1, 2, 3, 4],
   multiplyBy: 2,
   multiply() {
      return this.numbers.map((number) => number * this.multiplyBy)
   }
}

console.log(multiplier.multiply())
