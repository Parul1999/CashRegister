const form = document.querySelectorAll('#form');
const checkBtn = document.querySelector('#total');
const output = document.querySelector('#output')
const noOfNotes = document.querySelectorAll('.no-of-notes');
const showCashGivenButton = document.querySelector('#next');


var notes = [2000,500,100,20,10,5,1];
function findTotal()
{
    var billAmount = Math.ceil(form[0][0].value);
    var cashGiven = form[0][1].value;
    if(cashGiven>0 && billAmount>0)
   {
    if(cashGiven<billAmount)
    {
        output.innerText ="More money or washing plates ?"
    }
    else if(cashGiven==billAmount)
   {
    output.innerText ="Nothing To Return !!!"
   }
    else
    {
        var remainingAmount=cashGiven-billAmount;
        output.innerText ="Return = " + remainingAmount;
        calcNotes(remainingAmount);
    }
  }
  else if(billAmount == "")
  {
    output.innerText ="Enter Bill Amount!!" 
  }
  else if(cashGiven == "")
  {
    output.innerText = "Enter Cash Given Amount!!" 
  }
  else if(cashGiven > 0 && !(billAmount >0))
  {
    output.innerText ="Enter Valid Bill Amount !!"
  }
  else
  {
    output.innerText ="Enter Valid Cash Given Amount !!"
  }
}

function calcNotes(amount)
{

   for(var i = 0 ;i<notes.length;i++)
  {
      var numOfnotes = Math.trunc(amount/notes[i]);
      noOfNotes[i].innerText = numOfnotes;
      amount = amount % notes[i]
   }
}
function showCashBtn()
{
  if(form[0][0].value >0)
    {
    //similar to document.getElementById('#cash')
    cash.style.display="inline-block"
    cashlabel.style.display="inline-block"
    //remove text , if any was present earlier
    output.innerText="";
    //hide next btn
    showCashGivenButton.style.display="none"
    //display check btn
    checkBtn.style.display="inline-block"
    
}
    else if(form[0][0].value=="")
    {
        output.innerText ="Enter Bill Amount !!"
    }
    else
    {
        output.innerText ="Enter Valid Bill Amount !!"
    }
}
showCashGivenButton.addEventListener('click',showCashBtn)
checkBtn.addEventListener('click',findTotal)
