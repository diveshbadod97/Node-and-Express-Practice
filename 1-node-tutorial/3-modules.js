//Modules

const names = require('./4-namesformodules')
const sayHi = require('./5-utilsformodules')
console.log(names)
sayHi('General Kenobi')
sayHi(names.john)
sayHi(names.peter)

const data = require('./6-moreformodules')
console.log(data)

sayHi(data.singlePerson.name)

require('./7-moreformodules')