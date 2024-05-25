function length(str){
    let len = 0;
    while(true){
        if(str.charAt(len) === ''){
            break;
        }else{
            len++
        }
    }
    return len
}
const str = 'nayem'
const result = length(str);
console.log(result)