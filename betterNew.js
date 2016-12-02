// A better new
/**
 * An example that shows how effect the creation of a class using prototype and Object.create
 * Avoids the new keyword and unnecessary binding
 */



const properties = {
  first: 'the first prop',
  second: 'the second prop',
  third: 'the third prop'
}
function MyClass(props) {
  this.props = props
}

MyClass.prototype.keys = function() {
  return Object.keys(this.props)
}

function spawn(constructor) {
  const obj = Object.create(constructor.prototype)
  const argsArray = Array.prototype.slice.apply(arguments)
  return constructor.apply(obj, argsArray.slice(1)) || obj
}

const spawnedClass = spawn(MyClass, properties)
const newClass = new MyClass(properties)
console.log(spawnedClass.keys())
console.log(newClass.keys())