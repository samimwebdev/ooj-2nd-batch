//Object
// const person = {
//   firstName: 'samim',
//   lastName: 'Hasan',
//   fullName() {
//     return this.firstName + ' ' + this.lastName
//   },
//   get fName() {
//     //extra task
//     //modify FirstName
//     return this.firstName.toUpperCase()
//   },
//   set fName(firstName) {
//     // validation check
//     if (firstName) {
//       this.firstName = firstName
//     }
//   }
// }

// console.log(person.firstName, person.lastName, person.fullName())
// console.log(person.fName)
// person.fName = 'khalil'
// console.log(person)

// function Person(firstName, lastName) {
//   this.firstName = firstName
//   this.lastName = lastName
//   this.fullName = function () {
//     return this.firstName + ' ' + this.lastName
//   }

//   Object.defineProperties(this, {
//     fName: {
//       get() {
//         return this.firstName
//       },
//       set(firstName) {
//         this.firstName = firstName
//       }
//     }
//   })
// }

// const person = new Person('samim', 'Hasan')

// console.log(person.firstName, person.lastName, person.fullName())

// console.log(person.fName)
// person.fName = 'Khalil'

//Javascript built in Constructor

//proto(object) and prototype(constructor function relation)

// const str = new String('samim')
// console.log(str[0])
// console.log(str.length)
// console.log(str.toUpperCase())
// console.log(str.__proto__ === String.prototype)
// console.log(str.__proto__.__proto__ === Object.prototype)

// const arr = new Array([0, 1, 2])
//Benefits of prototype chain
// const obj = new Object()

//javascript prototype
function Person(firstName, lastName, gender) {
  this.lastName = lastName
  this.firstName = firstName
  this.gender = gender

  function prefixName() {
    if (gender === 'Male') {
      return 'Mr ' + firstName + ' ' + lastName
    }
  }

  Object.defineProperties(this, {
    fName: {
      get() {
        return this.firstName
      },
      set(firstName) {
        this.firstName = firstName
      }
    },
    nameWithPrefix: {
      get() {
        return prefixName()
      }
    }
  })
}

Person.prototype.fullName = function () {
  return this.firstName + ' ' + this.lastName
}

function ProfessionalContact(firstName, lastName, profession) {
  Person.call(this, firstName, lastName)
  this.profession = profession
}
//object.create  creates a object as a prototype

ProfessionalContact.prototype = Object.create(Person.prototype)

ProfessionalContact.prototype.constructor = ProfessionalContact

ProfessionalContact.prototype.getTitle = function () {
  return this.firstName + this.lastName + '-' + this.profession
}

function HomeContact(firstName, lastName, location) {
  Person.call(this, firstName, lastName, location)
  this.location = location
}

HomeContact.prototype = Object.create(Person.prototype)

HomeContact.prototype.constructor = ProfessionalContact

HomeContact.prototype.getTitle = function () {
  return this.firstName + this.lastName + '-' + this.location
}

const samimProfessional = new ProfessionalContact(
  'samim',
  'Hasan',
  'programmer'
)
const samimHome = new HomeContact('samim', 'Hasan', 'Dhaka')

console.log(samimProfessional.getTitle())
console.log(samimHome.getTitle())
