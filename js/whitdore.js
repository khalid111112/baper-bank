document.getElementById('btn-Withdraw').addEventListener('click', function(){
   const WithdrawField = document.getElementById('withdraw-field');
  const newwithDrawAmontSting = WithdrawField.value ;
  const newwithDrawAmont = parseFloat(newwithDrawAmontSting);
 const withdrawTotalElement = document.getElementById('Withdraw-total');
 const previousWithdrawTotalString = withdrawTotalElement.innerText;
 const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
 
console.log(newwithDrawAmont);
if()


 const balanceTotalElement = document.getElementById('balanc-total');
 const previousBalanceTotalString = balanceTotalElement.innerText;
 const previousBalanceTotal = parseFloat(previousBalanceTotalString); 

 WithdrawField.value = '';

 if(newwithDrawAmont > previousBalanceTotal){
    alert('Baap er bank e eto taka nai ');
    return;
 }



 const currentWithdrawTotal = previousWithdrawTotal + newwithDrawAmont;
 withdrawTotalElement.innerText = currentWithdrawTotal;

 const newBalanceTotal = previousBalanceTotal - newwithDrawAmont;
 balanceTotalElement.innerText = newBalanceTotal;


   
})