//Movement Animation to happen
const container = document.querySelector(".card-container");
const profileInfo = `Thx for click me 😀<br/>
<br/>

안녕하세요. 장성준입니다.<br/>

Hi There, I'm Seongjun Jang.<br/>

<br/>

이 사이트는
<span style="color:rgb(30, 13, 220); font-weight: 800; text-shadow: 0px 0px 5px white;">
#JavaScript30 챌린지
</span>를 위해 만들었습니다.<br/>

This site is for JavaScript30 Challange.<br/>

<br/>

자바스크립트와 CSS만으로 만들었고
<span style="color:black; font-weight: 700; text-shadow: 0px 0px 5px white;">
모든 코드를 Github에서 확인
</span>
해 보실 수 있습니다.<br/>

Made with

<span style="color:rgb(240, 250, 100); font-weight: 700; text-shadow: 0px 0px 3.5px rgba(0,0,0,0.8);">
JS, CSS Only! 
</span>
All codes are available in
<a target="_blank" style="text-decoration: none;" href="https://github.com/junnei/junnei.github.io">
<strong style="color:black; font-weight: 700; text-shadow: 0px 0px 5px white;">
Github : 
</strong>
<img style="vertical-align:-25%;" height="32" width="32" src="https://unpkg.com/simple-icons@v4/icons/github.svg" />
</a><br/>

<br/>

Feel free to enjoy! WELCOME!!<br/>

<br/>

Contact<br/>

<a target="_blank" style="text-decoration: none;" href="mailto:peinguin77@gmail.com">
<img style="vertical-align:-25%;" height="32" width="32" src="https://unpkg.com/simple-icons@v4/icons/gmail.svg" />
</a> 

<a target="_blank" style="text-decoration: none;" href="https://www.instagram.com/djun._/">
<img style="vertical-align:-25%;" height="32" width="32" src="https://unpkg.com/simple-icons@v4/icons/instagram.svg" />
</a>

`;
const data = [
  '01 - JavaScript Drum Kit',
  '02 - JS and CSS Clock',
  '03 - CSS Variables'
]

function createCard(project) {

  var card = document.createElement("div");
  card.classList.add('card');
  card.id = project;

  var thumbnail = document.createElement("div");
  thumbnail.classList.add('card-thumbnail');

  var image = document.createElement("img");
  image.classList.add('card-image');
  image.src = "./images/" + project + '.png';
  image.alt = project;

  thumbnail.appendChild(image);

  var info = document.createElement("div");
  info.classList.add('card-info');
  info.innerHTML = "Project " + project.slice(0, 2);

  card.appendChild(thumbnail);
  card.appendChild(info);
  return card;
}


async function init() {
  await data.map(project => container.append(createCard(project)));
}

function modalButton() {
  const button = document.querySelector("#button");
  const info = button.querySelector('.button-info');
  const container = button.querySelector('.button-container');

  function openButton() {
    info.innerHTML = "!!!";
    button.style.transition = 'all 2s ease';
    button.style.width = '68vw';
    button.style.height = '60vh';
    button.style.transform = 'translate(10vw,15vh)';
    button.style.boxShadow = '-5px -5px 20px rgba(245,255,255,1), 5px 5px 20px rgba(0,0,0,0.6)';
    container.style.boxShadow = '-2px -2px 5px rgba(255,255,255,0.6), 2px 2px 5px rgba(0,0,0,0.8)';

    info.style.transition = 'all 0.1s ease';
    info.style.fontSize = 'x-large';
    info.style.fontWeight = 600;
    info.style.textShadow = '0px 0px 3px rgba(0,0,0,0.6)';
    setTimeout(function () {
      info.innerHTML = profileInfo;
    }, 100);
  }

  function closeButton() {
    info.innerHTML = "!!!";
    button.style.transition = 'all 1s ease';
    button.style.width = '10vw';
    button.style.height = '10vh';
    button.style.transform = 'none';
    button.style.boxShadow = '0px 5px 10px rgba(0, 0, 0, 0.6)';
    container.style.boxShadow = 'none';

    info.style.fontSize = 'xx-large';
    info.style.fontWeight = 900;
    info.style.textShadow = '0px 0px 3px gray';
    setTimeout(function () {
      info.innerHTML = '?';
    }, 100);
  }

  button.addEventListener("click", (e) => {
    if (button.classList.contains("closed")) {

      button.classList.remove("closed");
      button.classList.add("open");

      button.style.animation = "none";
      button.style.background = `
    linear-gradient(
      to right,
      rgba(245, 70, 66, 0.8),
      rgba(255, 255, 156, 0.98)
    )`

      button.addEventListener("transitionstart", (e) => { openButton(); });
      button.removeEventListener("transitionstart", (e) => { openButton(); });

    } else {

      button.classList.remove("open");
      button.classList.add("closed");

      button.style.background = `
    linear-gradient(
      to right,
      rgba(245, 70, 66, 0.75),
      rgba(255, 255, 156, 0.75)
    )`
      button.addEventListener("transitionstart", (e) => { closeButton(); });
      button.removeEventListener("transitionstart", (e) => { closeButton(); });

    }
  });
}

function main() {
  const allCard = document.querySelectorAll(".card");

  for (let i = 0; i < allCard.length; i++) {
    const card = allCard[i];
    //Items
    const img = card.querySelector(".card-thumbnail img");
    const description = card.querySelector(".card-info");

    //Animate In
    card.addEventListener("mouseenter", (e) => {
      card.style.transition = "all 0.1s ease";
      card.style.transform = "rotateY(-2deg) rotateX(1deg) rotateZ(2deg)";
      //Popout
      img.style.transform = "translateZ(100px) rotateZ(-2deg) translateX(0.3vw) translateY(0.5vh)";
      description.style.transform = "translateZ(20px)";
    });
    //Animate Out
    card.addEventListener("mouseleave", (e) => {
      card.style.transition = "all 0.1s ease";
      card.style.transform = `rotateY(0deg) rotateX(0deg) rotateZ(0deg)`;
      //Popback
      img.style.transform = "translateZ(0px) rotateZ(0deg) translateX(0px) translateY(0px)";
      description.style.transform = "translateZ(0px)";
    });


    card.addEventListener("click", (e) => {
      for (let i = 0; i < allCard.length; i++) {
        const temp = allCard[i];
        temp.style.transition = "all 0.2s ease";
        temp.style.transform = `rotateY(0deg) rotateX(0deg) rotateZ(0deg)`;
        temp.style.opacity = 0;
      }

      const main = card.cloneNode(true);

      main.style.transition = "all 1s ease";
      main.style.opacity = 1;
      //Items
      const image = main.querySelector(".card-thumbnail img");
      const info = main.querySelector(".card-info");

      image.style.transform = "translateZ(0px) rotateZ(0deg) translateX(0px) translateY(0px)";
      image.style.width = "32vw";
      image.style.height = "20vw";
      image.style.borderRadius = "5vw 5vw";
      image.style.transform = "translateY(-8vh)";
      
      info.style.transform = "translateZ(0px)";
      info.style.fontSize = 'xx-large';

      main.style.maxHeight = "none";
      main.style.background = `linear-gradient(
      to right,
      rgba(190, 89, 177, 0.7),
      rgba(86, 64, 187, 0.7)
    )`;
      main.style.position = "fixed";
      main.style.width = '40vw';
      main.style.height = '60vh';
      main.style.zIndex = 10;
      card.after(main);

      var a = document.createElement('a');
      a.target = "_blank";
      a.style.textAlign = 'center';
      a.href = "./" + main.id + "/index-FINISHED.html";
      var button = document.createElement("button");
      button.classList.add("go");
      button.innerHTML = "Go";
      a.appendChild(button);
      info.after(a);
      const go = main.querySelector(".go");

      var div = document.createElement('div');
      div.classList.add("contents");
      div.innerHTML = main.id;
      info.after(div);

      //Moving Animation Event
      main.addEventListener("mousemove", (e) => {
        main.style.transition = "all 0.1s ease-out";
        let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 8;
        main.style.transform = `rotateY(${xAxis}deg) rotateX(${-yAxis}deg)`;
      });

      main.addEventListener("mouseenter", (e) => {
        main.style.transition = "all 1s ease-in";
        info.style.transition = "all 1s ease";
        div.style.transition = "all 1s ease";
        go.style.transition = "all 1s ease";
        //Popout
        main.style.width = '70vw';
        main.style.boxShadow = "inset -3px -3px 10px rgba(0,0,0,0.3), inset 3px -3px 10px rgba(0,0,0,0.3)";
        
        image.style.width = "45vw";
        image.style.height = "23vw";

        image.style.transform = "scale(1.2) translateY(-8vh) translateZ(200px)";
        info.style.transform = "translateZ(150px)";
        div.style.transform = "translateZ(120px)";
        go.style.transform = "translateZ(100px)";
        go.style.padding = "3vh 8vw";
        go.style.fontSize = "xx-large";
        go.style.boxShadow = '0px 0px 15px';
      });

      //Animate Out
      main.addEventListener("mouseleave", (e) => {
        main.style.transition = "all 1s ease-out";
        info.style.transition = "all 1s ease-out";
        div.style.transition = "all 1s ease-out";
        go.style.transition = "all 1s ease-out";

        //Popback
        main.style.transform = `rotateY(0deg) rotateX(0deg)`;
        main.style.width = '40vw';
        main.style.boxShadow = "none";

        image.style.width = "25vw";
        image.style.height = "15vw";

        image.style.transform = "translateY(0vh) translateZ(0px)";
        info.style.transform = "translateZ(0px)";
        div.style.transform = "translateZ(0px)";
        go.style.transform = "translateZ(0px)";
        go.style.padding = "1.2vh 5vw";
        go.style.fontSize = "large";
        go.style.boxShadow = "none";
      });


      main.addEventListener("click", (e) => {
        main.remove();
        for (let i = 0; i < allCard.length; i++) {
          const temp = allCard[i];
          temp.style.transform = `rotateY(0deg) rotateX(0deg) rotateZ(0deg)`;
          temp.style.opacity = 1;
        }
      });
    })
  }

}

init().then(main).then(modalButton);