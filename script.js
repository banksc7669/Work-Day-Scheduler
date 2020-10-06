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


    

