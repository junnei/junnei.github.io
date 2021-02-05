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
    card.style.transition = "all 0.1s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg) rotateZ(0deg)`;
    //Popback
    img.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
  });

  
  card.addEventListener("click", (e) => {
    for (let i = 0; i < allCard.length; i++) {
      const temp = allCard[i];
      if(card!==temp){
        temp.style.transition = "all 1s ease";
        temp.style.transform = `rotateY(0deg) rotateX(0deg) rotateZ(0deg)`;
        temp.style.opacity = 0;
      }
    }
    card.style.transform = `rotateY(0deg) rotateX(0deg) rotateZ(0deg)`;
    img.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    const main = card.cloneNode(true);
    card.style.opacity = 0;
    main.style.position = "fixed";
    main.style.width = '37vh';
    main.style.height = '60vh';
    main.style.zIndex = 10;
    card.after(main);

    //Items
    const image = main.querySelector(".card-thumbnail img");
    const info = main.querySelector(".card-info");

    var a = document.createElement('a');
    a.target = "_blank";
    a.style.textAlign = 'center';
    a.href = "./01 - JavaScript Drum Kit/index-FINISHED.html";
    var button = document. createElement("button");
    button.classList.add("go");
    button.innerHTML = "Go";
    a.appendChild(button);
    info.after(a);
    const go = main.querySelector(".go");

    main.addEventListener("mousemove", (e) => {
      main.style.transition = "all 0.2s ease-in-out";
      let xAxis = (window.innerWidth / 2 - e.pageX) / 5;
      let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
      main.style.transform = `rotateY(${xAxis}deg) rotateX(${-yAxis}deg)`;
    });

    main.addEventListener("mouseenter", (e) => {
      main.style.transition = "all 1s ease";
      info.style.transition = "all 1s ease";
      go.style.transition = "all 1s ease";
      //Popout
      image.style.transform = "translateZ(100px)";
      info.style.transform = "translateZ(80px)";
      go.style.transform = "translateZ(50px)";
    });

    //Animate Out
    main.addEventListener("mouseleave", (e) => {
      main.style.transition = "all 1s ease";
      info.style.transition = "all 1s ease";
      go.style.transition = "all 1s ease";

      main.style.transform = `rotateY(0deg) rotateX(0deg)`;
      //Popback
      image.style.transform = "translateZ(0px)";
      info.style.transform = "translateZ(0px)";
      go.style.transform = "translateZ(0px)";
    });
  })
}


const button = document.querySelector("#button");
const info = button.querySelector('.button-info');

button.addEventListener("click", (e) =>{
  if(button.classList.contains("closed")){
    
    button.classList.remove("closed");
    button.classList.add("open");

    button.style.background = `
    linear-gradient(
      to right,
      rgba(245, 70, 66, 0.85),
      rgba(255, 255, 156, 0.95)
    )`
    

    button.addEventListener("transitionstart", (e) => {
      info.innerHTML = "!!!";
      button.style.width = '68vw';
      button.style.height = '60vh';
      button.style.transform = 'translate(10vw,15vh)';
      setTimeout(function(){
        info.innerHTML = "WOWOWOWOWOWOWOWOWO!!!\nWOWOWOWOWOWOWOWOWO!!!\nWOWOWOWOWOWOWOWOWO!!!";
      },100);
    });

  } else {
    button.style.background = `
    linear-gradient(
      to right,
      rgba(245, 70, 66, 0.75),
      rgba(255, 255, 156, 0.75)
    )`
    button.style.transform = 'none';
    button.addEventListener("transitionstart", (e) => {
      info.innerHTML = "Thx for click me 😀"
      button.style.width = '10vw';
      button.style.height = '10vh';
      button.style.transform = 'none';
      setTimeout(function(){
        info.innerHTML = "?";
      },100);
    })
    button.classList.remove("open");
    button.classList.add("closed");
  }
})

