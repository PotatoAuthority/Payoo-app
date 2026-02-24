function p(text){
    console.log(text);
}
p('connected: cashout.js')


document.getElementById('cashout-btn').addEventListener('click', function(){
    //current balance
    const balance = getBalance();
    p(balance);
    //get cashout balance
    const cashout = getValue('cashout');
    p(cashout);

    //get number
    const agentNum = getValue('agent');

    //calculated balacne
    const final_balance = Number(balance) - Number(cashout);
    p(final_balance);

    //get pin
    const pinElem = document.getElementById('pin-input');
    const pin = getValue('pin-input');

    if(agentNum.length != 11){
        alert('Invalid Num');
        return;
    }

    if(cashout <= 0){
        alert('Invalid amount');
        return;
    }

    if(final_balance < 0){
        alert('Invalid Balance');
        return;
    }

    if(pin == 1234){
        setBalance(final_balance);
        alert('Cashout Success');
    }
    else{
        alert('Wrong PIN');
        return;
    }
})