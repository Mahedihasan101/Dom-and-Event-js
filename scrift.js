// login button functionality
document.getElementById('loginButton').addEventListener('click', function (e) {
    e.preventDefault()
    const mobileNumber = 12345678910
    const pinNumber = 1234
    const mobaileNumberValue = document.getElementById('mobaile-number').value
    const mobaileNumberConverted = parseInt(mobaileNumberValue)
    const pinNumberValue = document.getElementById('pin-number').value
    const pinNumberConverted = parseInt(pinNumberValue)

    if (mobaileNumberConverted === mobileNumber && pinNumberConverted === pinNumber) {
        
        window.location.href="./home.html"

    }
    else {
        console.log('invalid credentials')

    }

})