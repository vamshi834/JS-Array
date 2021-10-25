console.clear()
//array using forloop
var car1 = {
  car: 'City',
  milage: '18kmpl'
}
var car2 = {
  car: 'Civic',
  milage: '18kmpl'
}
var car3 = {
  car: 'i20',
  milage: '22kmpl'
}
var car4= {
  car: 'Ciaz',
  milage: '25kmpl'
}
var car5 = {
  car: 'EcoSport',
  milage: '19kmpl'
}
var carArray = [car1, car2, car3, car4, car5]
function checkMilage(){
  var test = 0
  for(i=0;i< 5; i++) { // if we dont know the length of the array we can use "i< ArrayName.length"
    if(carArray[i].milage <= '20kmpl') {
      test ++
    }
}
console.log("cars milage below 20 are " + test)
}
checkMilage()


//
var cars =['Nexa', 'Kia', 'Suzuki', 'Honda', 'Hundai', 'Tesla', 'Tata']
console.log(typeof(cars))
//to know the full array
console.log(cars)
//to know the specific position
console.log(cars[2])
console.log(cars[6])
console.log(cars[7])// if we give the out of position value it will show "undefined".

//to update a modification in an array
// arrayName[arrayPosition] = 'updation'
cars[2] = 'Maruthi Suzuki'
console.log(cars)
// we can add more array elements like this.

// suppose array position is 7 but we give the value to update is 10 but in b/w 7-9 it will show undefined value.

//to add in b/w the array elements.
cars.splice(4, 0, 'toyota')
console.log(cars)
// 1st one tells us where to start
// 2nd one tells how many items need to be deleted
// 3rd n 4th ... tells what items to be added
cars.splice(0, 0, 'Ford')
console.log(cars)

//delete items at specific position
cars.splice(0, 1)
console.log(cars)

//concatenation two or more arrays
var cars2 = ['shift', 'duster']
var cars3 =['alto', 'wagnor']
var cars = cars.concat(cars2, cars3)
console.log(cars)

//sorting

cars2.sort()// this for ascending(low to high)
console.log(cars2)
cars.reverse() // this is for descending(high to low)
console.log(cars)

