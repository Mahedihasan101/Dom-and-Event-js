document.getElementById('add-mony-btn').addEventListener('click', function (e) {
    e.preventDefault()

    const bank = document.getElementById('bank').value
    const accountNumber = document.getElementById('mobaile-number').value
    const amount = parseInt(document.getElementById('add-amount').value)
    const pin = document.getElementById('add-pin').value 

    const availableBalance = parseInt(document.getElementById('available-balance').innerText)
    
    const totalNewAvailableBalance = amount + availableBalance

    document.getElementById('available-balance').innerText = totalNewAvailableBalance
})