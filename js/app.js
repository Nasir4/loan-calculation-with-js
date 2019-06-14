//Listen for submit

document.getElementById('loan-form').addEventListener('submit', function(e){
  //Hide Results
  document.getElementById('results').style.display = 'none';
  //Show Loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResult, 1500);
    e.preventDefault()
});

function calculateResult(){

    console.log('Nasir');

    //UI verables

    const amount = document.getElementById('amount');
    const intrest = document.getElementById('intrest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const princpal = parseFloat(amount.value);
    const calculatedInterst = parseFloat(intrest.value) / 100 / 12;
    const calculatedPayment = parseFloat(years.value) * 12;

    //compute monthly payment
    const x = Math.pow(1 + calculatedInterst, calculatedPayment);
    const monthly = (princpal*x*calculatedInterst)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayment).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayment)-princpal).toFixed(2);
         //Show Results
        document.getElementById('results').style.display = 'block';
         //Hide Loading
        document.getElementById('loading').style.display = 'none';
    } else {
       showError('Please Check Your Number');
    }
    
}

//show Error
function showError(error){

   //Hide Results
   document.getElementById('results').style.display = 'none';
   //Show Loader
   document.getElementById('loading').style.display = 'none';

  //create Dive
  const errorDiv = document.createElement('div');

  //Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading')

  //addClass
  errorDiv.className = 'alert alert-danger';

  //create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  //insert above error heading
  card.insertBefore(errorDiv, heading);

  //clear error after 3 seconds
  setTimeout(clearError, 3000);

}

//clear Error
function clearError(){
    document.querySelector('.alert').remove();
}

