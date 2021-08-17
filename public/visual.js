function hideShowDecTextArea() {
    let textArea = document.getElementById('decTextArea');
   
    if (textArea.style.display === 'block') {
        textArea.style.display = "none";
    }
   
    else {
      textArea.style.display = "block";
    }
   
  }
   
  function hideShowOtherSpongeTextArea(){
   
    let spongeTextArea = document.getElementById('spongeTextArea')
   
    let spongeEle = document.getElementById('sponge');
   
    if (spongeEle.value === 'otherSpongeFlavour') {
        spongeTextArea.style.display = "block";
    }
   
    else {
      spongeTextArea.style.display = "none";
    }
   
  }
   
  function hideShowCupTextArea(){
   
    let cupSpongeEle = document.getElementById('cupSponge');
    let cupTextEle = document.getElementById('cupTextArea');
   
    if (cupSpongeEle.value === 'otherSpongeFlavour') {
        cupTextEle.style.display = "block";
    }
   
    else {
      cupTextEle.style.display = "none";
    }
   
   
  }
   
  function hideShowCakeMessageTextArea() {
   
    let cakeMessageTextArea = document.getElementById('cakeMessageTextArea');
    let cakeMsgEle = document.getElementById('cakeMessage');
   
    if (cakeMsgEle.checked) {
        cakeMessageTextArea.style.display = "block";
    }
   
    else {
      cakeMessageTextArea.style.display = "none";
    }
   
   
  }
   
  //Used for swapping between Cakes and Cupcakes
  function selCakes(){
   
      let cakesWrapper = document.getElementById('cakesWrapper');
      let cupcakesWrapper = document.getElementById('cupcakesWrapper');
      let cupcakes = document.getElementById('cupcakes');
      let cake = document.getElementById('cake');
   
   
      if (cake.checked) {
          //console.log('cake');
          cakesWrapper.style.display = "block";
      }
   
      else {
        cakesWrapper.style.display = "none";
      }
   
      if (cupcakes.checked) {
          console.log('cupcakes');
          cupcakesWrapper.style.display = "block";
   
      }
   
      else {
          cupcakesWrapper.style.display = "none";
      }
   
      }
   
  let dateTime = new Date();
   
  document.getElementById('dateTime').innerHTML = dateTime.getFullYear();