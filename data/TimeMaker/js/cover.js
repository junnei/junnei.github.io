//공통
const dayList = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const weekList = ['1st','2nd','3rd','4th','5th','6th'];
const monthList = ['January','February','March','April','May','June','July','August','September','October','November','December'];

const today = new Date();

//주간 계획표
const currentWeek = document.getElementById('current-week');
const calendarDay = document.getElementById('calendar-day');
const calendarContents = document.getElementById('calendar-contents');

const weekPreBtn = document.getElementById('week-pre-btn');
const weekNextBtn = document.getElementById('week-next-btn');

let viewWeek = today;


//몇번째 주인지 계산하는 함수.
function getThisWeek(date,day) {
    const addWeek = parseInt(date / 7);
    return (addWeek + ((date % 7 - day) > 1 ? 2 : 1));
}

//주간 계획표 타이틀
function setWeekTitle(year, month, date, day) {
    const yearTitle = document.createElement('div');
    yearTitle.innerHTML = year;
    yearTitle.classList.add('current-year');
    const weekTitle = document.createElement('div');
    weekTitle.innerHTML = monthList[month]+' '+weekList[getThisWeek(date,day)-1];
    currentWeek.appendChild(yearTitle);
    currentWeek.appendChild(weekTitle);
}

//주간 계획표 범위
function setWeekRange(year, month, date, day) {
    for(let i = 0; i < 7 ;i++){
        const input = document.createElement('div');
        input.classList.add('calendar-date');

        const data = new Date(year, month, date - day + i);
        input.addEventListener('click',() => {
            viewDay = data;
            repaint();
        });

        const input_day = document.createElement('div');
        input_day.classList.add('week-day');
        input_day.append(dayList[data.getDay()]);
        const input_date = document.createElement('div');
        input_date.classList.add('week-date');
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
        item.classList.add('today');
        
        const bg = document.createElement('div');
        bg.id = 'today-bg';
        item.append(bg);
    }
}


//주간 계획표 내용
function setWeekContent(year, month, date, day) {
    for(let i = 0; i < 7 ;i++){
        const input = document.createElement('div');
        input.classList.add('calendar-content');
        const data = new Date(year, month, date - day + i);
        const keyId = data.getFullYear() +'-'+ ((data.getMonth() + 1) < 10 ? '0' + (data.getMonth() + 1) : (data.getMonth() + 1)).toString() +'-'+ (data.getDate() < 10 ? '0' + data.getDate() : data.getDate());
        
        if (JSON.parse(localStorage.getItem(keyId)) === null) {
            const add = document.createElement('button');
            add.id = 'add-new-btn';

                const newBtn = document.createElement('img');
                newBtn.src = "svg/plus.svg";
            add.appendChild(newBtn);
            add.addEventListener('click',()=>{
                toDoInput.focus();
                activateSetting();
                handleSetting();
                const todoDate = document.getElementById("input-date");
                todoDate.value = keyId;
            });
    
            input.appendChild(add);

        } else {
            textData = JSON.parse(localStorage.getItem(keyId));
            textData.map(x => {
                const div = document.createElement('div');
                    const item = document.createElement('div');
                        const todo = document.createElement('div');
                        todo.classList.add('todo-content');
                        todo.appendChild(document.createTextNode(x.text));
                    item.appendChild(todo);
                    item.classList.add('todo');
                    if(x.complete==1){
                        item.classList.add('complete');
                    }
                    item.style.backgroundColor = x.color;
                div.appendChild(item);
                div.draggable = true;
                div.classList.add('todo-wrap');
                div.addEventListener('click',activeContent);
                div.addEventListener('dragstart', ()=>{
                    dragStartDate = keyId;
                    dragItem = x;
                });
                div.addEventListener('dragend', dragEnd);
                input.appendChild(div);
            });
        }

        input.addEventListener('dragover', dragOver);
        input.addEventListener('dragenter', dragEnter);
        input.addEventListener('dragleave', dragLeave);
        input.addEventListener('drop', (e)=>{
            e.target.classList.remove('hovered');
            deleteTodo(dragStartDate,dragItem.id);
            if (JSON.parse(localStorage.getItem(keyId)) === null) {
                textData = [];
            }
            else{
                textData = JSON.parse(localStorage.getItem(keyId));
            }
            const textObj = { id: textData.length + 1, text: dragItem.text , color: dragItem.color, start: dragItem.start, end: dragItem.end, complete: dragItem.complete};
            textData.push(textObj);
            localStorage.setItem(keyId, JSON.stringify(textData));
            repaint();
        });
        calendarContents.append(input);
    }
}

function dragEnd() {
    this.className = 'visible';
}

function activeContent() {
    if(this.classList.contains('active')){
        this.classList.remove('visible');
        this.classList.remove('active');
    } else {
        this.classList.add('visible');
        const input = this;
        setTimeout(function () {
            input.classList.add('active');
        }, 1);
    }
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.classList.add('hovered');
}

function dragLeave() {
    this.classList.remove('hovered');
}


//주간 계획표 Init
function initCalendar() {
    const year = today.getFullYear();
    const month = today.getMonth();
    const date = today.getDate()
    const day = today.getDay();
    setWeekTitle(year, month, date, day);
    setWeekRange(year, month, date, day);
    setWeekContent(year, month, date, day);
    
    weekPreBtn.addEventListener('click',lastWeek);
    weekNextBtn.addEventListener('click',nextWeek);
}

function lastWeek() {
    moveDays(-7);
}

function nextWeek() {
    moveDays(7);
}

function moveDays(move) {
    let viewYear = viewWeek.getFullYear();
    let viewMonth = viewWeek.getMonth();
    let viewDate = viewWeek.getDate();
    viewWeek = new Date(viewYear, viewMonth, viewDate + move);
    repaintWeek();
}

function repaintWeek(){
    let year = viewWeek.getFullYear();
    let month = viewWeek.getMonth();
    let date = viewWeek.getDate();
    let day = viewWeek.getDay();

    currentWeek.innerHTML = '';
    calendarDay.innerHTML = '';
    calendarContents.innerHTML = '';
    setWeekTitle(year, month, date, day);
    setWeekRange(year, month, date, day);
    setWeekContent(year, month, date, day);
}




//일간 계획표
const currentDay = document.getElementById('current-day');
const dayContents = document.getElementById('day-contents');

const dayPreBtn = document.getElementById('day-pre-btn');
const dayNextBtn = document.getElementById('day-next-btn');

let viewDay = today;

//일간 계획표 타이틀
function setDayTitle(year, month, date, day) {

    const dayTitle = document.createElement('div');
    dayTitle.innerHTML = monthList[month]+', '+date;

    const yesterDay = new Date;
    yesterDay.setDate(today.getDate() - 1);
    const tomorrow = new Date;
    tomorrow.setDate(today.getDate() + 1);

    //오늘, 어제, 내일이면 추가 타이틀
    if(today.toLocaleDateString()===year+'. '+(month+1)+'. '+(date)+'.'){
        const miniDayTitle = document.createElement('div');
        miniDayTitle.classList.add('border-bottom');
        miniDayTitle.innerHTML += 'Today';
        dayTitle.style.fontWeight = '600';
        currentDay.appendChild(miniDayTitle);
    } else if(yesterDay.toLocaleDateString()===year+'. '+(month+1)+'. '+(date)+'.'){
        const miniDayTitle = document.createElement('div');
        miniDayTitle.classList.add('border-bottom');
        miniDayTitle.innerHTML += 'Yesterday';
        currentDay.appendChild(miniDayTitle);
    } else if(tomorrow.toLocaleDateString()===year+'. '+(month+1)+'. '+(date)+'.'){
        const miniDayTitle = document.createElement('div');
        miniDayTitle.classList.add('border-bottom');
        miniDayTitle.innerHTML += 'Tomorrow';
        currentDay.appendChild(miniDayTitle);
    }
    currentDay.appendChild(dayTitle);

}

//일간 계획표 내용
function setDayContent(year, month, date, day) {
    const input = document.createElement('div');
    input.classList.add('day-content');
    const keyId = year +'-'+ ((month + 1) < 10 ? '0' + (month + 1) : (month + 1).toString()) +'-'+ (date < 10 ? '0' + date : date);
    
    if (JSON.parse(localStorage.getItem(keyId)) === null) {
        const div = document.createElement('div');
        div.innerHTML = 'Make your life better!<br/><br/>Add New Todos<br/><br/>';    
            
            const add = document.createElement('button');
            add.id = 'add-new-btn';

                const newBtn = document.createElement('img');
                newBtn.src = "svg/plus.svg";
            add.appendChild(newBtn);
            add.addEventListener('click',()=>{
                toDoInput.focus();
                activateSetting();
                handleSetting();
                const todoDate = document.getElementById("input-date");
                todoDate.value = keyId;
            });

        input.appendChild(div);
        input.appendChild(add);

    } else {
        textData = JSON.parse(localStorage.getItem(keyId));
        textData.map(x => {
            const div = document.createElement('div');
                const item = document.createElement('div');
                item.classList.add('todo-icon');
                item.style.backgroundColor = x.color;
                if(x.complete==1){
                    item.classList.add('complete');
                }
                item.addEventListener('click',()=>{completeTodo(keyId,x.id)});

                const todo = document.createElement('div');
                todo.classList.add('todo-content');
                todo.appendChild(document.createTextNode(x.text));
                
                const time = document.createElement('div');
                if(x.start!="00:00" || x.end!="00:00"){
                    time.append(x.start+'~'+x.end);
                }
                todo.appendChild(time);
                const del = document.createElement('div');
                del.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg>`;
                del.classList.add('todo-delete');
                del.addEventListener('click',()=>{deleteTodo(keyId,x.id)});
            div.classList.add('todo-wrap');
            div.appendChild(item);
            div.appendChild(todo);
            div.appendChild(del);
            input.appendChild(div);
        });
    }
    dayContents.append(input);
}

function completeTodo(date, id) {
    textData = JSON.parse(localStorage.getItem(date));
    textData.map((x,index)=>{
        if(id == x.id){
            let todos = JSON.parse(localStorage.getItem(date));

            temp = todos.splice(index,1);
            if(temp[0].complete ==0){
                temp[0].complete = 1;
            }
            else{
                temp[0].complete = 0;
            }

            todos = JSON.parse(localStorage.getItem(date));
            todos.splice(index,1,temp[0]);

            localStorage.setItem(date,JSON.stringify(todos));
            repaint();
        }
    });
}

function deleteTodo(date, id) {
    textData = JSON.parse(localStorage.getItem(date));
    textData.map((x,index)=>{
        if(id == x.id){
            let todos = JSON.parse(localStorage.getItem(date));
            if(todos.length>1){
                todos.splice(index,1);
                localStorage.setItem(date,JSON.stringify(todos));
            }
            else{
                localStorage.removeItem(date);
            }
            repaint();
        }
    });
}

function initDay() {
    const year = today.getFullYear();
    const month = today.getMonth();
    const date = today.getDate()
    const day = today.getDay();
    setDayTitle(year, month, date, day);
    setDayContent(year, month, date, day);
    
    dayPreBtn.addEventListener('click',lastDay);
    dayNextBtn.addEventListener('click',nextDay);
}

function lastDay() {
    moveDay(-1);
}

function nextDay() {
    moveDay(1);
}

function moveDay(move) {
    let viewYear = viewDay.getFullYear();
    let viewMonth = viewDay.getMonth();
    let viewDate = viewDay.getDate();
    viewDay = new Date(viewYear, viewMonth, viewDate + move);
    repaintDay();
}

function repaintDay(){
    let year = viewDay.getFullYear();
    let month = viewDay.getMonth();
    let date = viewDay.getDate();
    let day = viewDay.getDay();

    currentDay.innerHTML = '';
    dayContents.innerHTML = '';
    setDayTitle(year, month, date, day);
    setDayContent(year, month, date, day);
}

//세팅
const opacityBtn = document.getElementById("mini-list-opacity");
const closeBtn = document.getElementById("mini-list-close");

function initSetting(){
    opacityBtn.addEventListener('click',()=>{
        const miniList = document.querySelector('.mini-list');
        if(miniList.classList.contains('opacity')){
            miniList.classList.remove('opacity');
        }
        else{
            miniList.classList.add('opacity');
        }
    });
    closeBtn.addEventListener('click',()=>{
        const miniList = document.querySelector('.mini-list');
        if(miniList.classList.contains('close')){
            miniList.classList.remove('close');
        }
        else{
            miniList.classList.add('close');
        }
    });
}
initSetting();

//할일 추가
const toDoInput = document.getElementById("input-box");
const addBtn = document.getElementById("add-btn");
const openBtn = document.getElementById("ellipsis-btn");

const inputData = document.getElementById("input-data");

function initTodos() {
    toDoInput.addEventListener("keydown", (e)=> {
        if(e.key=='Enter'){
            handleSubmit();
        }
    });
    addBtn.addEventListener("click", handleSubmit);
    openBtn.addEventListener("click", ()=>{
        toDoInput.focus();

        activateSetting();
        changeActivateSetting();
        handleSetting();
    });
}

function activateSetting() {
    if(!inputData.classList.contains('active')){
        inputData.classList.add('visible');
        setTimeout(function () {
            inputData.classList.add('active');
        }, 1);
    }
}

function changeActivateSetting() {
    if(inputData.classList.contains('active')){
        inputData.classList.remove('active');
        setTimeout(function () {
            inputData.classList.remove('visible');
        }, 100);
    }
    else{
        inputData.classList.add('visible');
        setTimeout(function () {
            inputData.classList.add('active');
        }, 1);
    }
}

function handleSetting() {
    const colorDiv = document.createElement('div');
    colorDiv.innerHTML = "color";
    colorDiv.classList.add("color-wrap");
        const colorWrap = document.createElement('div');
        colorWrap.id = 'color-picker-wrap';
            const colorInput = document.createElement('Input');
            colorInput.type = "color";
            colorInput.placeholder = "yyyy-mm-dd";
            colorInput.id = "input-color";
            colorInput.addEventListener('change',() => {colorWrap.style.backgroundColor = colorInput.value;})
        colorWrap.appendChild(colorInput);
    colorDiv.appendChild(colorWrap);

    const dateInput = document.createElement('Input');
    dateInput.type = "date";
    dateInput.id="input-date";
    dateInput.style.width='';
    
    const startInput = document.createElement('Input');
    startInput.type = "time";
    startInput.id = "input-time-start";
    startInput.step = "300";

    const endInput = document.createElement('Input');
    endInput.type = "time";
    endInput.id = "input-time-end";
    startInput.step = "300";


    const resetBtn = document.createElement('Button');
    resetBtn.id="reset-btn";
    resetBtn.innerText="x";
    resetBtn.addEventListener('click',()=>{
        const todoColor = document.getElementById("input-color");
        const todoDate = document.getElementById("input-date");
        const todoStart = document.getElementById("input-time-start");
        const todoEnd = document.getElementById("input-time-end");
        todoColor.value = "";
        todoDate.value = "";
        todoStart.value = "";
        todoEnd.value = "";

        const colorWrap = document.getElementById("color-picker-wrap");
        colorWrap.style.backgroundColor = "";
    });


    inputData.innerHTML="";
    inputData.append(colorDiv,dateInput,startInput,endInput,resetBtn);
}

function handleSubmit() {
    const currentValue = toDoInput.value;
    write(currentValue);
    toDoInput.value = "";
    repaint();
}

function write(currentValue) {
    if (currentValue === undefined || currentValue === "") return;


    const todoColor = document.getElementById("input-color");
    const todoDate = document.getElementById("input-date");
    const todoStart = document.getElementById("input-time-start");
    const todoEnd = document.getElementById("input-time-end");
    
    let keyId;
    let currentColor;
    let currentStart;
    let currentEnd;
    
    if(todoDate === null || todoDate.value === ""){
        keyId = today.getFullYear() +'-'+ ((today.getMonth() + 1) < 10 ? '0' + (today.getMonth() + 1) : (today.getMonth() + 1)).toString() +'-'+ (today.getDate() < 10 ? '0' + today.getDate() : today.getDate());
    }
    else{
        keyId = todoDate.value;
    }
    
    if(todoColor === null || todoColor.value === ""){
        currentColor = "white";
    }
    else{
        currentColor = todoColor.value;
    }

    if(todoStart === null || todoStart.value === ""){
        currentStart = "00:00";
    }
    else{
        currentStart = todoStart.value;
    }

    if(todoEnd === null || todoEnd.value === ""){
        currentEnd = "00:00";
    }
    else{
        currentEnd = todoEnd.value;
    }

    if (JSON.parse(localStorage.getItem(keyId)) === null) {
        textData = [];
    }
    else {
        textData = JSON.parse(localStorage.getItem(keyId));
    }
    
    const textObj = { id: textData.length + 1, text: currentValue, color: currentColor, start: currentStart, end: currentEnd, complete:0};
    textData.push(textObj);
    localStorage.setItem(keyId, JSON.stringify(textData));
    
  }

function repaint(){
    repaintWeek();
    repaintDay();
}
initCalendar();
initDay();
initTodos();