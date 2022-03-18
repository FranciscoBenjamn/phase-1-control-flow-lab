function scuberGreetingForFeet(someValue){
  // Write your code here!
let result
if(someValue <= 400) {
  return 'This one is on me!'
 } 
 else if(someValue >= 2500) {
   return 'No can do.'
 } 
 else if(someValue > 2000) 
   return 'I will gladly take your thirty bucks.'
}

function ternaryCheckCity(someCity){
  // Write your code here!
  return someCity === 'NYC'? 'Ok, sounds good.':'No go.'
}
function switchOnCharmFromTip(tipAmount){
  // Write your code here!
  switch(tipAmount){
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
   }
  }