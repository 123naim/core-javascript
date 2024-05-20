// Inner Function
function something(greet, name){
    function getFirstName(){
        if(name){
            return name.split(' ')[1];
        }
    }
    const result = greet + ' ' + getFirstName(0);
    console.log(result)
}

something('Good mornign', 'Nayem Iqbal')