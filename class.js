//weakMap
//symbol
const _namePrefix = Symbol()

class Person {
  constructor(firstName, lastName, gender = 'Male') {
    this.firstName = firstName
    this.lastName = lastName
    this.gender = gender
  }

  [_namePrefix]() {
    if (this.gender === 'Male') {
      return 'Mr ' + this.firstName + ' ' + this.lastName
    }
  }

  get fName() {
    return this.firstName
  }

  get nameWithPrefix() {
    return this[_namePrefix]()
  }

  static getOwnProperty() {
    return 1
  }

  fullName() {
    return this.firstName + ' ' + this.lastName
  }
}

class ProfessionalContact extends Person {
  constructor(firstName, lastName, profession) {
    super(firstName, lastName)
    this.profession = profession
  }
  getTitle() {
    return super.fullName() + '-' + this.profession
  }
}

class HomeContact extends Person {
  constructor(firstName, lastName, location) {
    super(firstName, lastName)
    this.location = location
  }
  getTitle() {
    return super.fullName() + this.location
  }
}

const samimHome = new HomeContact('samim', 'hasan', 'Dhaka')
