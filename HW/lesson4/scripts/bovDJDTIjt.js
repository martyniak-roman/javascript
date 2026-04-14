function create_array(array){
    document.write(`<ul>
        <li>${array[0].id}</li>
        <li>${array[0].name}</li>
        <li>${array[0].age}</li>
`)
}

create_array([{
    id: 1,
    name: "Andriy",
    age: 18
}])