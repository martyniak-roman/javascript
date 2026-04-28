const arr = []

function addToLocalStorage(arrayName,objToAdd){
    const isItem = localStorage.getItem(arrayName)
    if(!isItem){
        throw new Error('Error');
    }

    const array = JSON.parse(isItem)
    if (typeof objToAdd == 'object'){
        array.push(objToAdd);
    }

    localStorage.setItem(arrayName, JSON.stringify(array))
}

addToLocalStorage('sessionsList', {})