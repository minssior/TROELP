// function setup() {
    
//     const canvas = createCanvas(
//         4320,1550 );

//     }


const parentElement = document.querySelector("#parentElement");

const line = document.createElement("div");
line.style.width = "100%";
line.style.height = "2px";
line.style.backgroundColor = "black";
line.style.opacity = 0;

parentElement.appendChild(line);

parentElement.addEventListener("mouseenter", function() {
  line.style.opacity = 1;
});

parentElement.addEventListener("mouseleave", function() {
  line.style.opacity = 0;
});
