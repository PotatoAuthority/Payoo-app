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

        //transaction history
        const transElem = document.getElementById('trans-cards-container');
        const trans_card = document.createElement('div');

        trans_card.innerHTML = `
        <div class="trans-card card p-4 bg-base-100 w-full mx-auto rounded-6 space-y-2">
                <div class=" flex flex-row justify-start items-center gap-2">
                    <img src="./assets/opt-1.png" alt="">
                    <p class="font-semibold text-[17px]">Cashout</p>
                </div>
                
                <p>Amount: ${cashout}$ To ${agentNum}</p>
                <p>Time: ${new Date()} </p>
            </div>
        `;

        transElem.append(trans_card);

        

        alert('Cashout Success');
    }
    else{
        alert('Wrong PIN');
        return;
    }
})