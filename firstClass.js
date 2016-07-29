// firstClass

class Animal {
    constructor(name) {
        this.name = name || 'No name given'
    }

    speak() {
        console.log(this.name + ' makes a noise!');
    }

    toJSON() {
        let model = {}
        Object.getOwnPropertyNames(this).forEach(
            (key) => model[key] = this[key]
        )
        return JSON.stringify(model)
    }

    fromJSON(jsonString) {
        const jsonObj = JSON.parse(jsonString)
        for (var key in jsonObj) {
            if (this.hasOwnProperty(key)) {
                this[key] = jsonObj[key]
            } else {
                console.log('Couldn\'t match key');
            }
        }
    }
}

const dog = new Animal('Scruffy')

dog.speak()
console.log(dog.toJSON())
dog.fromJSON('{"name":"Bella"}')
dog.speak()
console.log(dog.name);