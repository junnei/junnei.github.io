const currentTitle = document.getElementById('current-title');
const calendarDay = document.getElementById('calendar-day');
const calendarContents = document.getElementById('calendar-contents');

const dayList = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const weekList = ['1st','2nd','3rd','4th','5th','6th'];
const monthList = ['January','February','March','April','May','June','July','August','September','October','November','December'];

const preBtn = document.getElementById('week-pre-btn');
const nextBtn = document.getElementById('week-next-btn');

const today = new Date();
let viewWeek = today;

//몇번째 주인지 계산하는 함수.
function getThisWeek(date,day) {
    const addWeek = parseInt(date / 7);
    return (addWeek + ((date % 7 - day) > 1 ? 2 : 1));
}


function setTitle(year, month, date, day) {
    const yearTitle = document.createElement('div');
    yearTitle.innerHTML = year;
    yearTitle.classList.add('current-year');
    const weekTitle = document.createElement('div');
    weekTitle.innerHTML = monthList[month]+' '+weekList[getThisWeek(date,day)-1];
    currentTitle.appendChild(yearTitle);
    currentTitle.appendChild(weekTitle);
}

function setWeek(year, month, date, day) {
    for(let i = 0; i < 7 ;i++){
        const input = document.createElement('div');
        input.classList.add('calendar-date');
        const data = new Date(year, month, date - day + i);
        const input_day = document.createElement('div');
        input_day.append(dayList[data.getDay()]);
        const input_date = document.createElement('div');
        input_date.append((data.getDate() < 10 ? '0' + data.getDate() : data.getDate()).toString());

        input.appendChild(input_day);
        input.appendChild(input_date);
        

        if(data.getDay()==0){
            input.classList.add('Sun');
        }
        if(data.getDay()==6){
            input.classList.add('Sat');
        }
        calendarDay.append(input);
    }
    //오늘인 경우
    if(today.toLocaleDateString()===year+'. '+(month+1)+'. '+(date)+'.'){
        const item = calendarDay.childNodes[day];
        item.style.color = 'white';
        item.style.fontWeight = '900';
    }
}

function setContent(year, month, date, day) {
    for(let i = 0; i < 7 ;i++){
        const input = document.createElement('div');
        input.classList.add('calendar-content');
        const data = new Date(year, month, date - day + i);
        const keyId = data.getFullYear() + ((data.getMonth() + 1) < 10 ? '0' + (data.getMonth() + 1) : (data.getMonth() + 1)).toString() + (data.getDate() < 10 ? '0' + data.getDate() : data.getDate());
        
        if (JSON.parse(localStorage.getItem(keyId)) === null) {
            const div = document.createElement('div');
            div.appendChild(document.createTextNode('Content for ' + keyId));    
            input.appendChild(div);
        } else {
            textData = JSON.parse(localStorage.getItem(keyId));
            textData.map(x => {
                const div = document.createElement('div');
                div.appendChild(document.createTextNode(x.text));
                input.appendChild(div);
            });
        }
        calendarContents.append(input);
    }
}

//toDos
const toDoInput = document.querySelector(".input-box");
const addBtn = document.querySelector(".add-btn");

function initTodos() {
    toDoInput.addEventListener("keydown", (e)=> {
        if(e.key=='Enter'){
            handleSubmit();
        }
    });
    addBtn.addEventListener("click", handleSubmit);
}

function handleSubmit() {
    const currentValue = toDoInput.value;
    const today = new Date();
    const key = today.getFullYear() + ((today.getMonth() + 1) < 10 ? '0' + (today.getMonth() + 1) : (today.getMonth() + 1)).toString() + ( today.getDate() < 10 ? '0' + today.getDate() : today.getDate() )
    write(key, currentValue);
    toDoInput.value = "";
    repaint();
}

function write(cell, currentValue) {
    if (currentValue === undefined || currentValue === "") return;
    const keyId = cell;
    
    if (JSON.parse(localStorage.getItem(keyId)) === null) {
        textData = [];
    }
    else {
        textData = JSON.parse(localStorage.getItem(keyId));
    }
    const textObj = { id: textData.length + 1, text: currentValue };
    textData.push(textObj);
    localStorage.setItem(keyId, JSON.stringify(textData));
  }



function initCalendar() {
    const year = today.getFullYear();
    const month = today.getMonth();
    const date = today.getDate()
    const day = today.getDay();
    setTitle(year, month, date, day);
    setWeek(year, month, date, day);
    setContent(year, month, date, day);
    
    preBtn.addEventListener('click',lastWeek);
    nextBtn.addEventListener('click',nextWeek);
    initTodos();
}

function lastWeek() {
    moveDay(-7);
    console.log(viewWeek);
}

function nextWeek() {
    moveDay(7);
    console.log(viewWeek);
}

function moveDay(move) {
    let viewYear = viewWeek.getFullYear();
    let viewMonth = viewWeek.getMonth();
    let viewDate = viewWeek.getDate()
    viewWeek = new Date(viewYear, viewMonth, viewDate + move);
    repaint();
}

function repaint(){

    let year = viewWeek.getFullYear();
    let month = viewWeek.getMonth();
    let date = viewWeek.getDate();
    let day = viewWeek.getDay();

    currentTitle.innerHTML = '';
    calendarDay.innerHTML = '';
    calendarContents.innerHTML = '';
    setTitle(year, month, date, day);
    setWeek(year, month, date, day);
    setContent(year, month, date, day);
}
initCalendar();
