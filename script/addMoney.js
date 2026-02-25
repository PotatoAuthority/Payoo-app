function p(text){
    console.log(text);
}
p('connected: addMoney.js')

document.getElementById('addMoney-btn').addEventListener('click', function(){
    //bank
    const bank = getValue('bank-opt');
    //ac num
    const ac_num = getValue('b_account_num');
    //add amount
    const add_money = getValue('add_amount');
    //pin
    const pin = getValue('addMoney_pin');

    if(bank == 'Select bank'){
        alert('Please select a bank');
        return;
    }

    if(ac_num.length != 11){
        alert('Enter valid bank A/C');
        return;
    }

    if(add_money <= 0){
        alert('Add valid amount');
        return;
    }

    if(pin != 1234){
        alert('Please Enter Valid PIN');
    }
    else{
        const total = getBalance() + Number(add_money);
        setBalance(total);
        alert('Balance Added');
    }
})