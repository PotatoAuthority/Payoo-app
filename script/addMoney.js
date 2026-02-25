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

        //transaction history
        const transElem = document.getElementById('trans-cards-container');
        const trans_card = document.createElement('div');

        trans_card.innerHTML = `
        <div class="trans-card card p-4 bg-base-100 w-full mx-auto rounded-6 space-y-2">
                <div class=" flex flex-row justify-start items-center gap-2">
                    <img src="./assets/opt-1.png" alt="">
                    <p class="font-semibold text-[17px]">Add Money</p>
                </div>
                
                <p>Amount: ${add_money}$ added from ${bank}</p>
                <p>A/C: ${ac_num} </p>
                <p>Time: ${new Date()} </p>
            </div>
        `;

        transElem.append(trans_card);
        alert('Balance Added');
    }
})