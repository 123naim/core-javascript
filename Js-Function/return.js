function addAll () {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

const result = addAll(1, 2, 3);
console.log(result)

function person(name, email){
    return {
        name: name,
        email: email
    }
}

const result2 = person('Md. Nayem', "mdnayemiqbal69@gmail.com")
console.log(result2)