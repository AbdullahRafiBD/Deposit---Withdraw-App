
  const ctx = document.getElementById('myChart');

 const chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Total', 'Deposit', 'Withdraw'],
      datasets: [{
        label: ' Money',
        data: [10, 10, 10],
        borderWidth: 5
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


const deposite = document.getElementById('depositBtn');
deposite.addEventListener('click', ()=>{
  const displayDeposit = parseFloat(document.getElementById('displayDeposit').innerText);
  const displayTotal = parseFloat(document.getElementById('totalDisplay').innerText);
  // console.log(displayDeposit)
  chart.data.datasets[0].data[1] = displayDeposit
  chart.data.datasets[0].data[0] = displayTotal
  // console.log(chart.data.datasets[0].data)
  chart.update()
});

const withdraw = document.getElementById('withdrawBtn');

withdraw.addEventListener('click', () => {
  const displayWithdraw = parseFloat(document.getElementById('displayWithdraw').innerText);
  const displayTotal = parseFloat(document.getElementById('totalDisplay').innerText);
  // console.log(displayWithdraw)
  chart.data.datasets[0].data[2] = displayWithdraw
  chart.data.datasets[0].data[0] = displayTotal
  chart.update()
});