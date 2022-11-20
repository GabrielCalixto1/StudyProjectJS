//1 for
let list = [12, 6, 9, 42, 11, 102, 44, 15]
let total = 0;
for (let index = 0; index < list.length; index++) {
    total = total + list[index]
}

alert(total)

//1 while
total = 0
let index = 0
while (index < list.length) {
    total = total + list[index]
    index++
}
alert(total)

//1 do while
total = 0
index = 0
do {
    total = total + list[index]
    index++

} while (index < list.length);


//2 numero primo
index = 0
do { 
    alert(index)
    index++
    
} while (index%2 != 0);


//3 entre 30 e 40
for (index = 0; index< 100; index++) {

    alert(index)
    
    while(index >= 40-1 && index <= 50-1)
    {
        index++
    }

}
