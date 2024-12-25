const hexbtn = document.querySelector(".hex-btn");
const hexcoloroutvalue = document.querySelector(".text");
const hexcontainer = document.querySelector(".hex-container");

hexbtn.addEventListener("click", () => {
  const characterset = "0123456789ABCDEF";
  let hexcoloroutput = ""; 

  for (let i = 0; i < 6; i++) { // Loop for exactly 6 characters for a hex code.
    hexcoloroutput += characterset.charAt(Math.floor(Math.random() * characterset.length));
  }

  hexcoloroutvalue.textContent = `#${hexcoloroutput}`;
  console.log(`#${hexcoloroutput}`); // Added "#" to cCoonsole for consistency.

  hexcontainer.style.backgroundColor = `#${hexcoloroutput}`;
  hexbtn.style.color = `#${hexcoloroutput}`;
});

// for rgb container
const getredrange = document.querySelector("#red");
const getbluerange = document.querySelector("#blue");
const getyellowrange = document.querySelector("#yellow");
const rgbcontainer = document.querySelector(".rgb-container");
const rgbbtn = document.querySelector(".rgb-btn");
const txt = document.querySelector(".text1");
rgbbtn.addEventListener("click",()=>{
  let redrange = getredrange.value;
  let bluerange = getbluerange.value;
  let yellowrange = getyellowrange.value;

  rgbbtn.style.color = `rgb(${redrange},${bluerange},${yellowrange})`;
  rgbcontainer.style.backgroundColor = `rgb(${redrange},${bluerange},${yellowrange})`;
  txt.textContent = `rgb(${redrange},${bluerange},${yellowrange})`;

})

