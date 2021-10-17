
    function DisplayText() {
      document.getElementById("text1").innerHTML="Hello java Script"
      window.alert(12+15)
      document.body.style.backgroundColor="pink"
      var today = new Date();
      var date = "date : "+ today.getDate() + ' -' + today.getMonth +'-' +today.getUTCFullYear();
      document.getElementById("text2").innerHTML=date;
      
    }

    