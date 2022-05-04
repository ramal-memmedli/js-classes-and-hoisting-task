class Person {
    constructor (name, surname, yearOfBirth) {
        this.Name = name;
        this.Surname = surname;
        this.YearOfBirth = yearOfBirth;
    }
    ShowFullName () {
        return `Name: ${this.Name} Surname: ${this.Surname}`;
    }
}

class Developer extends Person {
    constructor (name, surname, yearOfBirth, languages, company, salary) {
        super(name, surname, yearOfBirth);
        this.Languages = languages;
        this.Company = company;
        this.Salary = salary
    }

    ShowDeveloperInfo () {
        return this.ShowFullName() + ` Year of birth: ${this.YearOfBirth} Languages: ${this.Languages} Company name: ${this.Company} Salary: ${this.Salary}`;
    }

    GetDeveloperSalary() {
        return this.Salary;
    }
}


let developer = new Developer("Test", "Testov", 2000, ["C#", "C++", "Java"], "Google", 200000);

console.log(developer.ShowFullName());
console.log(developer.ShowDeveloperInfo());
console.log(developer.GetDeveloperSalary());
console.log(developer);