
//1//
function myFunction() {
    var x = document.getElementById("square");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  //2//
  const square = document.getElementById("square")
  square.addEventListener("mouseover",getRandomColor());

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
   }
   var newColor = getRandomColor(); // #E943F0


   //3//

   var names = ["Diego", "Gabriel", "Lucas"];

   window.addEventListener('load', display);

   //4//
   function add(){
    const namevalue=   document.getElementById("namevalue").value;
    name.push(value);
   
    display();
   
   }
   
   function display(){
   let output="";
   
   name.forEach(function(x){
       output +=
        `
       <ul>
       <li>
           ${x}
       </li>
       </ul>
       `
   });
   
   document.getElementById("values").innerHTML =output;
   
   }