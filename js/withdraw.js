const withdrawBtn = document.getElementById('withdrawBtn');


const withdrawCalculation = () => {
    // console.log('working')

    // geting input from user
    const userWithdrawAmount = parseFloat(document.getElementById('userWithdrawAmount').value); // parseFloat() -> string to number convert 
    document.getElementById('userWithdrawAmount').value = "";
    // alert(userWithdrawAmount)

    if (isNaN(userWithdrawAmount)) {
        // alert('Please enter valid Number')
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter valid Number',
        })
    } else {
        // taking data from Display
        const displayWithdraw = parseFloat(document.getElementById('displayWithdraw').innerText);
        // console.log(userWithdrawAmount,displayWithdraw)

        // Calculation
        const newDisplayWithdraw = userWithdrawAmount + displayWithdraw;
        document.getElementById('displayWithdraw').innerText = newDisplayWithdraw
        // console.log(newDisplayDeposit)


        // total
        const totalDisplay = parseFloat(document.getElementById('totalDisplay').innerText);

        if (userWithdrawAmount > totalDisplay) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No Balance',
            })
        } else {
            const updateTotal = totalDisplay - userWithdrawAmount
            document.getElementById('totalDisplay').innerText = updateTotal

        }
        
    }



}






withdrawBtn.addEventListener('click', withdrawCalculation);