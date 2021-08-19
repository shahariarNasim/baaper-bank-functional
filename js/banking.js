// function doubleit(num){

//     const hel=num*2;
//     return hel;
// }
// const res = doubleit(5);
//  const resu = doubleit(4);
// console.log(res);
// console.log(resu);

// for input deposite & withdraw
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmount = inputField.value;
    //clear the deposite input field
    inputField.value = '';
    return inputAmount;

}
// input and update deposite & withdraw
function updateTotalField(totalFieldId, amount) {
    // debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const newTotal = parseFloat(totalText) + parseFloat(amount);
    totalElement.innerText = newTotal;

}

// update balance deposite & withdraw
function updateBalance(newAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotal.innerText;
  
    if(isAdd == true) {
        const newBalanceTotal = parseFloat(previousBalanceTotal) + parseFloat(newAmount);
        balanceTotal.innerText = newBalanceTotal;
    }
    else {
        const newBalanceTotal = parseFloat(previousBalanceTotal) - parseFloat(newAmount);
        balanceTotal.innerText = newBalanceTotal;
    }

}


// handle deposite button event

document.getElementById('deposit-button').addEventListener('click', function () {
    // get input value
    /*  const depositInput=document.getElementById('deposit-input');
     const newdepositAmount=depositInput.value; */

    // update deposit total
    /* const depositTotal=document.getElementById('deposite-total');
    const previousDepositAmount=depositTotal.innerText;
    const newDepositTotal=parseFloat(previousDepositAmount)+parseFloat(newdepositAmount);
    depositTotal.innerText=newDepositTotal; */


                // update balance total for deposit
    /*   const balanceTotal=document.getElementById('balance-total'); 
      const previousBalanceTotal=balanceTotal.innerText;
      const newBalanceTotal=parseFloat(previousBalanceTotal)+parseFloat(newdepositAmount);
      balanceTotal.innerText=newBalanceTotal; */

    const newdepositAmount = getInputValue('deposit-input');
    if(newdepositAmount>0){
        updateTotalField('deposite-total', newdepositAmount);
        updateBalance(newdepositAmount, true);
    }
    

    //  clear the deposite input field
    //  depositInput.value=''; 
});

// handle withdraw event hanlder
document.getElementById('withdraw-button').addEventListener('click', function () {

               // get input withraw
    /* const withdrawInput =document.getElementById('withdraw-input');
       const newWithdrawAmount=withdrawInput.value; */


               // update withdraw amount
    /*  const withdrawTotal=document.getElementById('withdraw-total');
        const previousWithdrawTotal=withdrawTotal.innerText;
        const newWithdrawTotal=parseFloat(newWithdrawAmount)+parseFloat(previousWithdrawTotal);
        withdrawTotal.innerText=newWithdrawTotal; */


             // update  balance total for withdraw
    /*   const balanceTotalWithdraw=document.getElementById('balance-total');
         const previousBalanceTotalWithdraw=balanceTotalWithdraw.innerText;
         const afterwithdrawTotal= parseFloat(previousBalanceTotalWithdraw) - parseFloat(newWithdrawAmount);
         balanceTotalWithdraw.innerText=afterwithdrawTotal; */

    const newWithdrawAmount = getInputValue('withdraw-input');
    if(newWithdrawAmount>0){
        updateTotalField('withdraw-total', newWithdrawAmount);
        updateBalance(newWithdrawAmount, false);
    }
   

    // //clear the deposite input field
    // withdrawInput.value='';
});
