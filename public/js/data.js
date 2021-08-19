
let cakeData = [];
const addData = (ev) => {
    ev.preventDefault()
    //console.log('Sucessfully prevented form submission');
    //console.log('Creating data object');
 
    let cakeShape = document.getElementsByName('selectedcake');
    for (let cake of cakeShape) {
      if (cake.checked) {
        //console.log(cake.checked);
        selCakeShape = cake.value;
        break;
      }
      else
        selCakeShape = "";
    }
 
    if (getIcingSugar() ===5) {icing = true}
    else {icing = false}
 
 
    let data =
    {
        UniqueId: Date.now(),
        cakeSize : document.getElementById('cakeSize').value,
        cakeShape : selCakeShape,
        sponge : document.getElementById('sponge').value,
        butterCream: document.getElementById('butterCream').value,
        icing: icing,
        specialDecoration: document.querySelector("#decTextArea").value,
        cakeMessage: document.querySelector("#cakeMessageTextArea").value,
        dateTime: document.querySelector("#dateAndTimeReq").value,
        price: calculateTotal()
    }
    //console.log(`Customers unique ID is : ${data.id}`);
    //console.log(`Customers name is : ${data.name}`);
    //console.log('Putting the data taken into an array');
   
    
    cakeData.push(data)
   
    localStorage.setItem('cakeData', JSON.stringify(cakeData));
   
    //add back to force post the form
    //document.querySelector('form').submit()
 
    let options =
{
  method: 'POST',
  headers:
  {
    'Content-Type': 'application/json; charset=utf-8'
  }
  ,
  body: JSON.stringify(cakeData)
}
 
//Req - Represents a resource request.
//Res - Represents the response to a request.
 
 
fetch('/data', options)
  .then(res => { if (res.ok) {console.log('Success')}})
  .then(data => data);


 fetch('/create-checkout-session', {
    method: 'POST',
    });


 
  //remove the data from the array as a last step
  cakeData.shift(data);
 
  document.querySelector('form').reset()
}


 
document.querySelector("#btn").addEventListener('click', addData);