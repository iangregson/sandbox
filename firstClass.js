// firstClass

class Dog {
    constructor(name, age, favouriteThing) {
        this.name = name || 'No name given'
        this.age = age || null
        this.favouriteThing = favouriteThing || '' 
    }

    speak() {
        console.log(this.name + ' goes \'woof\'!');
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

    toArray() {
        let model = []
        Object.getOwnPropertyNames(this).forEach(
            (key) => model.push(this[key])
        )
        return model
    }

    toPairs() {
        let model = []
        Object.getOwnPropertyNames(this).forEach(
            (key) => model.push([key, this[key]])
        )
        return model
    }
}

const scruffy = new Dog('Scruffy', 3, 'Rawhide chew')
const bellaJSON = JSON.stringify(
    {
        name: 'Bella',
        age: 3,
        favouriteThing: 'Chicken'
    }
)
scruffy.speak()
console.log(scruffy.toJSON())
console.log(scruffy.toArray());
console.log(scruffy.toPairs());

const bella = new Dog()
bella.fromJSON(bellaJSON)
bella.speak()
console.log(bella.toJSON())
console.log(bella.toArray());
console.log(bella.toPairs());