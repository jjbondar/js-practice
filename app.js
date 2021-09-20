var userIn = document.getElementById("userIn").value;
function grammar() {
   var userIn = document.getElementById("userIn").value;
   var output = document.getElementById("output");
   var split = userIn.split('');
   split.reverse();
   split = split.join(" ");
   output.innerText = split;
   console.log(split);
  }