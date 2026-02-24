console.log('functions.js added')
function getValue(id){
    const elem = document.getElementById(id);
    const value = elem.value;
    console.log(id, value);
    return value;
}

function getText(id){
    const elem = document.getElementById(id);
    const value = elem.innerText;
    console.log(id, value);
    return value;
}