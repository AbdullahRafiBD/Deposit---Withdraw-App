const depositeBtn = document.getElementById('depositBtn');

const depositeCalculation=()=>{
    // console.log('working')

    // geting input from user
    const userDepositAmount = parseFloat(document.getElementById('userDepositAmount').value); // parseFloat() -> string to number convert 
    document.getElementById('userDepositAmount').value="";
    // alert(typeof userDepositAmount)

    if (isNaN(userDepositAmount)) {
        // alert('Please enter valid Number')
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter valid Number',
        })
    } else {
        // taking data from Display
        const displayDeposit = parseFloat(document.getElementById('displayDeposit').innerText);
        // console.log(userDepositAmount,displayDeposit)

        // Calculation
        const newDisplayDeposit = userDepositAmount + displayDeposit;
        document.getElementById('displayDeposit').innerText = newDisplayDeposit
        // console.log(newDisplayDeposit)

        // total
        const totalDisplay = parseFloat(document.getElementById('totalDisplay').innerText);
        const updateTotal = totalDisplay + userDepositAmount
        document.getElementById('totalDisplay').innerText = updateTotal
    }

    
}

depositeBtn.addEventListener('click',depositeCalculation);