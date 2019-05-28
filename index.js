// Use the provided index.html
// -----------------------------------------------------------------------------------

// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.


function getUSA() {
    let usa = document.getElementsByTagName("span")
    console.log(usa[2].textContent)

    // console.log(Array.isArray(usa))//false->usa is not an array, we need transfer to an array
    // Array.from(usa).forEach(element => {
    //     console.log(element)
    // });

  }


// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.
function getPeopleInSales() {
    let salesPeople = document.getElementsByClassName("empName")
    console.log(salesPeople[0].textContent)
    console.log(salesPeople[2].textContent)
    console.log(salesPeople[4].textContent)
    console.log(salesPeople[5].textContent)
}
 

// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>
function getAnchorChildren() {
    let anchorChildren = document.getElementsByTagName("span")
    console.log(anchorChildren[3].textContent)
    console.log(anchorChildren[4].textContent)
    console.log(anchorChildren[5].textContent)
    console.log(anchorChildren[6].textContent)
}
// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'skills' select element.
// Print the value and the contents.
function getHobbies(){
    let values = document.getElementsByTagName("select")
//Print value
    console.log(values[2][2].value)
    console.log(values[2][5].value)
//Print contents
    console.log(values[2][2].textContent)
    console.log(values[2][5].textContent)
    
    // console.log(document.getElementsByTagName("option")[values[1]].value)
    
}

// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute. 
function getCustomAttribute() {
    let value1 = document.getElementsByTagName("span")
    console.log(value1[1].getAttribute("data-customAttr"))
    console.log(value1[1])

    let value2 = document.getElementsByClassName("empName")
    console.log(value2[4].getAttribute("data-customAttr"))
    console.log(value2[4])

    let value3 = document.getElementsByTagName("input")
    console.log(value3[0].getAttribute("data-customAttr"))
    console.log(value3[0])

    let value4 = document.getElementsByTagName("input")
    console.log(value4[1].getAttribute("data-customAttr"))
    console.log(value4[1])

    let value5 = document.getElementsByTagName("span")
    console.log(value5[6].getAttribute("data-customAttr"))
    console.log(value5[6])

}
// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>  

// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element?????
window.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('num1').addEventListener("change", function() {
        let input1 =  document.getElementById("num1").value
        let input2 =  document.getElementById("num2").value
        
        sum = parseInt(input1) + parseInt(input2)

        document.getElementById("sum").innerText = sum

    })
})





// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.
window.addEventListener("DOMContentLoaded", function(event) {
    document.getElementsByTagName('select')[2].addEventListener("change", function() {
        let e = document.getElementsByTagName('select')[2]
        skill = e.options[e.selectedIndex].text
        alert(`Are you sure ${skill} is one of your skills?`);

    })
})

// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor
window.addEventListener("DOMContentLoaded", function(event) {
    radios = document.querySelectorAll("[name=favoriteColor]")
     //console.log(radios)
    let preColor = "Default color"
    for(let radio of radios) {
        radio.addEventListener("click", function(event) {

            let color = event.target.value
            alert(`So you like ${color} more than ${preColor} now?`)
            preColor = color
           
            radio.style.backgroundColor = color
            // radios.forEach(radio => radio.style.backgroundColor = color)???????

        })


    }




    // document.getElementsByTagName('input')[3].addEventListener("click", function() {
    //     let color = document.getElementsByTagName('input')[3].value

        
    //     // let preColor = document.getElementsByTagName('input')[3].value

    //     var radios = document.getElementsByTagName('input');

    //     for (var i = 0, length = radios.length; i < length; i++)
    //     {
    //      if (radios[i].checked)
    //      {
    //       // do whatever you want with the checked radio
    //     //   alert(radios[i].value);
    //       let preColor = document.getElementsByTagName('input')[i].value
    //       console.log(preColor)

    //     //   alert(`So you like ${color} more than ${preColor} now?`);
        
    //       // only one radio can be logically checked, don't check the rest
    //       break;
    //      }
    //     }







    //     alert(`So you like ${color} more than ${preColor} now?`);

    // })
})


// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.
document.addEventListener("DOMContentLoaded", function(event) {

    
    let empName = document.getElementsByClassName("empName")

    for (let hs of empName ) {

        hs.parentElement.addEventListener("mouseenter", function(event) {

            // if (event.target.style.display === "none") {
            //     event.target.style.display = "block"
            // } else {
            //     event.target.style.display = "none"
            // }
           hs.style.display === "none" ? hs.style.display = "block" : hs.style.display = "none"


        })
    } 
  })





// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.

function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("currentTime").innerText = h + ":" + m + ":" + s;
    t = setTimeout(function() {
      startTime()
    }, 500);
  }
  startTime();

// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.


document.addEventListener("DOMContentLoaded", function (event) {

     let changeColor = document.getElementById("helloWorld")

     changeColor.addEventListener("click", function(){setTimeout(colorize, 3000)})

     function colorize (){
        document.getElementById('helloWorld').style.color = randomColors();       
     }

     function randomColors() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
      }


})



// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).
function walkTheDOM(node, func) {
    func(node)
    node = node.firstChild
    while (node) {
        walkTheDOM(node, func)
        node = node.nextSibling
    }

}