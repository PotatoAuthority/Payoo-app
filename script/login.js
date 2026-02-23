console.log('login script connected');

document.getElementById('login-btn').addEventListener('click', function(){
    const phoneHtml = document.getElementById('phone-input');
    const phone = phoneHtml.value;
    console.log(phone);

    const pinHtml = document.getElementById('pin-input');
    const pin = pinHtml.value;

    if(phone == '01234567891' && pin == '1234'){
        alert('login success');
        window.location.assign('./home.html');
    } 
    else{
        alert('wrong credentials!');
        return;
    }
})