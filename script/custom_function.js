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

function getBalance(){
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    console.log('balance', balance);
    return Number(balance);
}

function setBalance(input){
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = input;
    console.log('balance', input);
}

function setVisible(id){
    document.getElementById('cashout-cont').classList.add('hidden');
    document.getElementById('addMoney-cont').classList.add('hidden');
    document.getElementById('transaction-cont').classList.add('hidden');

    const element = document.getElementById(id);
    element.classList.remove('hidden');

    //auto scroll to section
    element.scrollIntoView({ behavior: 'smooth' });
}