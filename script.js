let workDay = {
    "8 AM": "",
    "9 AM": "",
    "10 AM": "",
    "11 AM": "",
    "12 PM": "",
    "1 PM": "",
    "2 PM": "",
    "3 PM": "",
    "4 PM": "",
    "5 PM": "",
  };

  //Times below: 
  let currentTime = moment().format("H")

  console.log(currentTime)

  document.querySelector("#currentDay").innerHTML = moment().format("LLL")

  //console logging the first div's "time" data-attribute
  console.log(document.querySelector("#eight_am").dataset.time)

  //if statement checking comparing the "time" data-attribute to the current time
  if (+document.querySelector("#eight_am").dataset.time < +currentTime) {
    document.querySelector("#eight_am").classList.add("past")
  } else if (+document.querySelector("#eight_am").dataset.time === +currentTime) {
    document.querySelector("#eight_am").classList.add("present")
  } else {
    document.querySelector("#eight_am").classList.add("future")
  }

//using localStorage to fill the textareas with saved values
  document.querySelector("#eight_am > textarea").value = localStorage.getItem("8am")

//adding click event to save button, to take textArea's value and store it in LocalStorage

  document.querySelector("#eight_am > button").addEventListener("click",function(event){
    localStorage.setItem("8am",document.querySelector("#eight_am > textarea").value)

  })

  //console logging the first div's "time" data-attribute
  console.log(document.querySelector("#nine_am").dataset.time)

  //if statement checking comparing the "time" data-attribute to the current time
  if (+document.querySelector("#nine_am").dataset.time < +currentTime) {
    document.querySelector("#nine_am").classList.add("past")
  } else if (+document.querySelector("#nine_am").dataset.time === +currentTime) {
    document.querySelector("#nine_am").classList.add("present")
  } else {
    document.querySelector("#nine_am").classList.add("future")
  }

//using localStorage to fill the textareas with saved values
  document.querySelector("#nine_am > textarea").value = localStorage.getItem("9am")

//adding click event to save button, to take textArea's value and store it in LocalStorage

  document.querySelector("#nine_am > button").addEventListener("click",function(event){
    localStorage.setItem("9am",document.querySelector("#nine_am > textarea").value)

  })
    
  //console logging the first div's "time" data-attribute
  console.log(document.querySelector("#ten_am").dataset.time)

  //if statement checking comparing the "time" data-attribute to the current time
  if (+document.querySelector("#ten_am").dataset.time < +currentTime) {
    document.querySelector("#ten_am").classList.add("past")
  } else if (+document.querySelector("#ten_am").dataset.time === +currentTime) {
    document.querySelector("#ten_am").classList.add("present")
  } else {
    document.querySelector("#ten_am").classList.add("future")
  }

//using localStorage to fill the textareas with saved values
  document.querySelector("#ten_am > textarea").value = localStorage.getItem("10am")

//adding click event to save button, to take textArea's value and store it in LocalStorage

  document.querySelector("#ten_am> button").addEventListener("click",function(event){
    localStorage.setItem("10am",document.querySelector("#ten_am > textarea").value)

  })

    //console logging the first div's "time" data-attribute
    console.log(document.querySelector("#eleven_am").dataset.time)

    //if statement checking comparing the "time" data-attribute to the current time
    if (+document.querySelector("#eleven_am").dataset.time < +currentTime) {
      document.querySelector("#eleven_am").classList.add("past")
    } else if (+document.querySelector("#eleven_am").dataset.time === +currentTime) {
      document.querySelector("#eleven_am").classList.add("present")
    } else {
      document.querySelector("#eleven_am").classList.add("future")
    }
  
  //using localStorage to fill the textareas with saved values
    document.querySelector("#eleven_am > textarea").value = localStorage.getItem("11am")
  
  //adding click event to save button, to take textArea's value and store it in LocalStorage
  
    document.querySelector("#eleven_am > button").addEventListener("click",function(event){
      localStorage.setItem("11am",document.querySelector("#eleven_am > textarea").value)
  
    })

        //console logging the first div's "time" data-attribute
        console.log(document.querySelector("#twelve_pm").dataset.time)

        //if statement checking comparing the "time" data-attribute to the current time
        if (+document.querySelector("#twelve_pm").dataset.time < +currentTime) {
          document.querySelector("#twelve_pm").classList.add("past")
        } else if (+document.querySelector("#twelve_pm").dataset.time === +currentTime) {
          document.querySelector("#twelve_pm").classList.add("present")
        } else {
          document.querySelector("#twelve_pm").classList.add("future")
        }
      
      //using localStorage to fill the textareas with saved values
        document.querySelector("#twelve_pm > textarea").value = localStorage.getItem("12pm")
      
      //adding click event to save button, to take textArea's value and store it in LocalStorage
      
        document.querySelector("#twelve_pm > button").addEventListener("click",function(event){
          localStorage.setItem("12pm",document.querySelector("#twelve_pm > textarea").value)
      
        })
        //console logging the first div's "time" data-attribute
        console.log(document.querySelector("#one_pm").dataset.time)

        //if statement checking comparing the "time" data-attribute to the current time
        if (+document.querySelector("#one_pm").dataset.time < +currentTime) {
          document.querySelector("#one_pm").classList.add("past")
        } else if (+document.querySelector("#one_pm").dataset.time === +currentTime) {
          document.querySelector("#one_pm").classList.add("present")
        } else {
          document.querySelector("#one_pm").classList.add("future")
        }
      
      //using localStorage to fill the textareas with saved values
        document.querySelector("#one_pm > textarea").value = localStorage.getItem("1pm")
      
      //adding click event to save button, to take textArea's value and store it in LocalStorage
      
        document.querySelector("#one_pm > button").addEventListener("click",function(event){
          localStorage.setItem("1pm",document.querySelector("#one_pm > textarea").value)
      
        })
                //console logging the first div's "time" data-attribute
        console.log(document.querySelector("#two_pm").dataset.time)

        //if statement checking comparing the "time" data-attribute to the current time
        if (+document.querySelector("#two_pm").dataset.time < +currentTime) {
          document.querySelector("#two_pm").classList.add("past")
        } else if (+document.querySelector("#two_pm").dataset.time === +currentTime) {
          document.querySelector("#two_pm").classList.add("present")
        } else {
          document.querySelector("#two_pm").classList.add("future")
        }
      
      //using localStorage to fill the textareas with saved values
        document.querySelector("#two_pm > textarea").value = localStorage.getItem("2pm")
      
      //adding click event to save button, to take textArea's value and store it in LocalStorage
      
        document.querySelector("#two_pm> button").addEventListener("click",function(event){
          localStorage.setItem("2pm",document.querySelector("#two_pm > textarea").value)
      
        })
                        //console logging the first div's "time" data-attribute
        console.log(document.querySelector("#three_pm").dataset.time)

        //if statement checking comparing the "time" data-attribute to the current time
        if (+document.querySelector("#three_pm").dataset.time < +currentTime) {
          document.querySelector("#three_pm").classList.add("past")
        } else if (+document.querySelector("#three_pm").dataset.time === +currentTime) {
          document.querySelector("#three_pm").classList.add("present")
        } else {
          document.querySelector("#three_pm").classList.add("future")
        }
      
      //using localStorage to fill the textareas with saved values
        document.querySelector("#three_pm > textarea").value = localStorage.getItem("3pm")
      
      //adding click event to save button, to take textArea's value and store it in LocalStorage
      
        document.querySelector("#three_pm > button").addEventListener("click",function(event){
          localStorage.setItem("3pm",document.querySelector("#three_pm > textarea").value)
      
        })

      //console logging the first div's "time" data-attribute
        console.log(document.querySelector("#four_pm").dataset.time)

        //if statement checking comparing the "time" data-attribute to the current time
        if (+document.querySelector("#four_pm").dataset.time < +currentTime) {
          document.querySelector("#four_pm").classList.add("past")
        } else if (+document.querySelector("#four_pm").dataset.time === +currentTime) {
          document.querySelector("#four_pm").classList.add("present")
        } else {
          document.querySelector("#four_pm").classList.add("future")
        }
      
      //using localStorage to fill the textareas with saved values
        document.querySelector("#four_pm > textarea").value = localStorage.getItem("4pm")
      
      //adding click event to save button, to take textArea's value and store it in LocalStorage
      
        document.querySelector("#four_pm > button").addEventListener("click",function(event){
          localStorage.setItem("4pm",document.querySelector("#four _pm> textarea").value)
      
        })

              //console logging the first div's "time" data-attribute
        console.log(document.querySelector("#five_pm").dataset.time)

        //if statement checking comparing the "time" data-attribute to the current time
        if (+document.querySelector("#five_pm").dataset.time < +currentTime) {
          document.querySelector("#five_pm").classList.add("past")
        } else if (+document.querySelector("#five_pm").dataset.time === +currentTime) {
          document.querySelector("#five_pm").classList.add("present")
        } else {
          document.querySelector("#five_pm").classList.add("future")
        }
      
      //using localStorage to fill the textareas with saved values
        document.querySelector("#five_pm > textarea").value = localStorage.getItem("5pm")
      
      //adding click event to save button, to take textArea's value and store it in LocalStorage
      
        document.querySelector("#five_pm > button").addEventListener("click",function(event){
          localStorage.setItem("5pm",document.querySelector("#five_pm > textarea").value)
      
        })