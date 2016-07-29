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
        return JSON.stringify(model)
    }

    toPairs() {
        let model = []
        Object.getOwnPropertyNames(this).forEach(
            (key) => model.push([key, this[key]])
        )
        return JSON.stringify(model)
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

///////////////////////////

const s1 = 'We promptly judged antique ivory buckles for the next prize'
      s2 = 'We promptly judged antique ivory buckles for the prize'

console.log(s2.replace(/\s/g, '').toLowerCase().match(/([a-z])(?!.*\1)/g).length == 26 ? 'pangram' : 'not pangram');


function beautify(s) {
    if s.match
}