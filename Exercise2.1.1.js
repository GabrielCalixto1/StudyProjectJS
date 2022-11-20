//1 e 2
var num1 = prompt("primeiro número")
var operator = prompt("Qual operador? + , - , / , * , %(módolo) ")
var num2 = prompt("segundo número")
var sum
num1 = parseFloat(num1)
num2 = parseFloat(num2)

switch (operator) {
    case '+':
        sum = num1 + num2
        break;
    case '-':
        sum = num1 - num2
        break;
    case '*':
        sum = num1 * num2
        break;
    case '/':
        sum = num1 / num2
        break;
    case '%':
        sum = num1 % num2
        break;
    default:
        alert("Operador inválido")
        break
}
alert(sum)

//3 e 4

function sum5(fSum) {
    return fSum+ 5
}
alert(sum5(sum))

function sub3(fSum) {
    return fSum - 3
}
alert(sub3(sum))



