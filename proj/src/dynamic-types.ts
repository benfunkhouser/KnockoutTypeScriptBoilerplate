module demo_02_03 {
    var person : string;
    person = 'John Papa';
    console.log(person.substring(1,4));

    // Compile time error checking prevents this
    // person = {
    //     name: 'Colleen',
    //     age: 25
    // };
    // console.log(person.substring(1,4));
}