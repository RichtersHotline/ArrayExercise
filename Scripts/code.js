let data = ["Keenan", 4, 6, 9, 11, "Timmie", 22]
console.log(data)
let NumberHolder = data.filter(Number)

console.log(NumberHolder)

console.log(data.find(value => value == 4))
console.log(data.findIndex(value => value == 4))
let OnlyNumbers = data.filter(numb => typeof numb === `number`)
let TotalNumbers = OnlyNumbers.reduce((numb1, numb2) => numb1 + numb2, 0) 
console.log(TotalNumbers)

//Spread Operator and and Concat

let Slicer = data.slice(1, 4)
console.log(Slicer)