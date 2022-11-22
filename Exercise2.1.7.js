let baseSalary = prompt("Digite seu salário")
baseSalary = parseFloat(baseSalary)
let salaryWithPercent;

function setPercent(salary) {

    while (salary > 0 && salary <= 1500) {
        salary = salary * 1.2
        return salary
    }
    while (salary > 1500 && salary < 2000) {
        salary = salary * 1.15
        return salary
    }
    while (salary >= 2000 && salary < 3000) {
        salary = salary * 1.1
        return salary
    }

    while (salary >= 3000) {
        salary = salary * 1.05
        return salary
    }

}

try {
    salaryWithPercent = setPercent(baseSalary)
    console.log(salaryWithPercent)
} catch (error) {
    console.log(message.error)
}

