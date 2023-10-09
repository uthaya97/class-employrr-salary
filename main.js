class Manager {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }
    annualIncome() {
        document.write("Annual Income = " + this.salary * 12)
    }

}

let manager1 = new Manager();

class Bonus extends Manager {
    constructor(name, salary, bonus) {
        super(name, salary);
        this.bonus = bonus
        document.write(`Name : ${this.name} <br> Salary: ${this.salary}<br>`)

    }
}

let managerone = new Bonus("ayahtu", 10000, 1000)
managerone.annualIncome()
document.write("<br>Bonus = " + managerone.bonus + "<br><br>")


let managertwo = new Bonus("uthaya", 15000, 2000)
managertwo.annualIncome()
document.write("<br>Bonus = " + managertwo.bonus + "<br><br>")