var html = ""; // Empty stirng for innerHTML
var arr = []; // Empty array to store values
let addVinput = document.getElementById("addVinput");

// Tag name add function
function addInput() {
  var inputval = document.getElementById("addVinput").value;
  var mainDIv = document.getElementById("mainDiv")
  // Condition for checking empty or duplicate values
  if (arr.includes(inputval)) {
    document.getElementById("addVinput").value = "";
    errorNameMessege()
  }
  else {
    if (inputval == "") {
      errorNameEmpty()
    }
    else {
      // Dynamically adding html code
      html += `<div class="col-md-3 mt-4">
          <div class="col-lg-12 " style="background-color: red; color:white; border-top-right-radius: 20px 20px;
          border-top-left-radius: 20px 20px; ">
          <h1 class="text-center">Hello</h1>
          <h6 class="text-center m-0">my name is</h6>
          </div>
          <div class="col-lg-12 text-center m-0 " id="name" style="background-color: white; border:1px solid red;">${inputval}</div>

          <div class="col-lg-12" style="background-color: red; color:rgb(255, 0, 0); border-bottom-right-radius: 20px 20px;
          border-bottom-left-radius: 20px 20px;; ">ok</div>
          </div>
          </div>`
      mainDIv.innerHTML = html;
      document.getElementById("addVinput").value = "";
      arr.push(inputval)
    }
  }
}
// Error messege functions 
function errorNameEmpty() {
  document.getElementById("error1").style.display = 'block';
  setTimeout(() => {
    document.getElementById("error1").style.display = "none"
  }, 3000);
}

function errorNameMessege() {
  document.getElementById("error2").style.display = 'block';
  setTimeout(() => {
    document.getElementById("error2").style.display = 'none';
  }, 3000);
}
// Event listener for Enter button 
addVinput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("addbtn").click();
  }
});

