const array = ['Alex', 'Roma', 'Serg','Sain', 'Anna', 'Build', 12, true,false, 15]

for (let i = 0; i < array.length; i++){
    if (typeof array[i] === 'boolean'){
        console.log(array[i])
    }
}