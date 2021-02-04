document.getElementById('button').addEventListener("click", function() {
	document.querySelector('.modal').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.modal').style.display = "none";
});


//Movement Animation to happen
const container = document.querySelector(".card-container");
const allCard = document.querySelectorAll(".card");

for (let i = 0; i < allCard.length; i++) {
  const card = allCard[i];
  //Items
  const img = card.querySelector(".card-thumbnail img");
  const description = card.querySelector(".card-info");

  //Moving Animation Event
  /*card.addEventListener("mousemove", (e) => {
    let xAxis = ((rect.left + rect.right) / 2 - e.pageX) / 25;
    let yAxis = ((rect.top + rect.bottom)  / 2 - e.pageY) / 25;
    console.log( (rect.left + rect.right) / 2,e.pageX, xAxis, (rect.top + rect.bottom) / 2,e.pageY, yAxis);
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });*/
  //Animate In
  card.addEventListener("mouseenter", (e) => {
    card.style.transition = "all 0.1s ease";
    card.style.transform = "rotateY(-2deg) rotateX(1deg) rotateZ(2deg)";
    //Popout
    img.style.transform = "translateZ(100px) rotateZ(-2deg)";
    description.style.transform = "translateZ(20px)";
  });
  //Animate Out
  card.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.3s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg) rotateZ(0deg)`;
    //Popback
    img.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
  });
}