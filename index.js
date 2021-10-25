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
  for(i=0;i< 5; i++) {
    if(carArray[i].milage <= '20kmpl') {
      test ++
    }
}
console.log("cars milage below 20 are " + test)
}
checkMilage()