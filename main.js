module.exports = {
  taxCalculator: function(amount){
    var rtn = 0;
    if (amount<=10) rtn+=amount * .1;
    if (amount>10 && amount<=20) rtn+=(amount-10) *.07+ 1;
    if (amount>20 && amount<=30) rtn+=(amount-20) *.05 + 1.70;
    if (amount>30) rtn+=(amount-30) *.03 + 2.20;
    return rtn;
  }
}
