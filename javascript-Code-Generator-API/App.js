const submitBtn = document.querySelector('#submit');

const generateCode = () => {

    let inputValue = document.getElementById('input').value;

    let qrImg = document.getElementById('img')

    qrImg.classList.add('hide')

    if(inputValue.trim().length > 0){
        qrImg.classList.remove('hide')
        submitBtn.innerHTML = "Generating QR Code...";
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${inputValue}`;
    }

    setTimeout(() => {
        submitBtn.innerHTML = "Generate QR Code";
    },1000)


}

submitBtn.addEventListener("click" , generateCode)