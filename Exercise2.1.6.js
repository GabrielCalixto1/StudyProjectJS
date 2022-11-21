//escope
function confirmData(name) {
    var age = 20; // realocated var age
    fullName = name + 'da Silva';
    function getYearOfBirth() {
        //removed var age
        var year = 2022 - age;
        return year;
    }
    console.log('nome completo', fullName);
    console.log('ano de nascimento', getYearOfBirth());
    console.log('idade', age);

}

confirmData('Marcos')

//var,let e const

function confirmData2(name) {
    const age = 40; // realocated var age
    const fullName = name + ' da Silva';
    let generation = 'milênio';
    function getYearOfBirth() {
        //removed var age
        let year = 2022 - age;
        return year;
    }
    if (getYearOfBirth() <= 1995) {
        generation = "geração X" //remove "var"
    }

    console.log('nome completo', fullName);
    console.log('ano de nascimento', getYearOfBirth());
    console.log('geração', generation);

}

confirmData2('Marcos')

//try...catch

function confirmData3(name) {

    fullName = name + 'da Silva';
    function getYearOfBirth() {
        var age = 20;
        var year = 2022 - age;
        return year;
    }
    console.log('nome completo', fullName);
    console.log('ano de nascimento', getYearOfBirth());
    console.log('idade', age);

}

try {
    confirmData3('Marcos')

} catch (error) {
    console.log("Um erro foi encontrado e não foi possível concluir a sua ação")
    console.log(error.message)
}

//Functions

function confirmData4(name, age) {
    const fullName = name + ' da Silva';

    function getYearOfBirth() {
        let year = 2022 - age;
        return year;
    }
    function belongingGeneration(age) {
        let generation = 'milênio';
        if (age <= 1995) {
            generation = "geração X" 
        }
        return generation
    }

    let generation = belongingGeneration(age);
    console.log('nome completo', fullName);
    console.log('ano de nascimento', getYearOfBirth());
    console.log('geração', generation);

}

confirmData4('Marcos', 40)
