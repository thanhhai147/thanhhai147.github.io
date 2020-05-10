var content = new Array;

  
document.getElementById("task_number").addEventListener("submit", (a) => {
    a.preventDefault();
    var start = document.getElementById("start");
    start.style.display = "block";
    var number = document.getElementById("data_number").value;
    var content = document.getElementById("content");
    var b = content.childElementCount;
    if(b==0){
        if(number > 5){
            alert("You have too many exerceises to complete in time. So you should arrange you homework again!");
        }
        if(number > 0 && number <= 5){
            var get = document.getElementById("content");
            for(var i=0; i<number; i++){
                var index = document.createElement("div");
                index.className = "small_task";
                index.id = `index_${i}`;
                index.setAttribute("onclick","create(this)");
                get.appendChild(index);
            }
        }
    }
})


function create(input){
    var a = input.childElementCount;
    if(a == 0){
        for(var j=0; j<2; j++){
            if(j==0){
                var index_1 = document.createElement("div");
                index_1.innerHTML = "Name:";
                index_1.className = "name";
                index_1.id = `name_${input.id}`;
                index_1.setAttribute("onclick","enter(this)");
                input.appendChild(index_1);
            }
            if(j==1){
                var index_1 = document.createElement("div");
                index_1.innerHTML = "Time:";
                index_1.className = "time";
                index_1.id = `time_${input.id}`;
                index_1.setAttribute("onclick","time(this)");
                input.appendChild(index_1);
            }
        }
    }
}

function enter(input){
    var str = input.id;
    var id_str = str.substr(str.length-1,2);
    var a = prompt("Please, enter your sybject you want to do here:");
    content.splice(id_str,0,a);
    var subject = document.createElement("div");
    subject.innerHTML = a;
    subject.className = "name_part";
    subject.id = `content_${input.id}`
    input.appendChild(subject);
}

function cal_time(){
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var sum = h*60 + m;
    var t = 22*60-sum;
    return t;
}

var each_num;
function time(input){ 
    var number = document.getElementById("data_number").value;
    var remain_num = cal_time()/number;
    console.log(remain_num)
    if (remain_num>=30){
            console.log("succeed")
            each_num = remain_num - 5;
            var set_time = document.createElement("div");
            set_time.className = "time_part";
            set_time.innerHTML = `${each_num.toFixed(0)} minutes`;
            input.appendChild(set_time);
            alert("After each exercise, you should take a 5-minute rest!");
        }
    if(remain_num<30){
        console.log("succeed")
        each_num = remain_num;
        var set_time = document.createElement("div");
        set_time.className = "time_part";
        set_time.innerHTML = `${each_num.toFixed(0)} minutes`;
        input.appendChild(set_time);
        alert("You should hurry up!")
    }
    if(remain_num<25){
        console.log("succeed")
        each_num = remain_num;
        var set_time = document.createElement("div");
        set_time.className = "time_part";
        set_time.innerHTML = `${each_num.toFixed(0)} minutes`;
        input.appendChild(set_time);
        alert("More effort! You don't have much time.")
    }
}

var index_num=0;

function countdown(){
    var got = document.getElementById("count_content");
    got.innerHTML = content[index_num];
    if(got.innerHTML=="undefined"){
        alert("goodjob");
    }
    else{
        var get = document.getElementById("count");
    var m = each_num % 60;
    var mediate = m.toFixed(0);
    var hour  = (each_num-mediate) / 60;
    var second = 0;
    get.innerHTML = `${hour}:${mediate}:${second}`;
    setTimeout(function first(){
        second = 59;
        if(mediate>0){
            mediate--;
        }
        if(mediate==0 && hour>0){
            mediate = 59;
            hour--;
        }
        get.innerHTML = `${hour}:${mediate}:${second}`;
    },1000);
    setInterval(function count(){
        if(second>0){
            second--;
            get.innerHTML = `${hour}:${mediate}:${second}`;
        }
        if(second==0 && mediate>0){
            second = 59;
            mediate--;
            get.innerHTML = `${hour}:${mediate}:${second}`;
        }
        if(second==0 && mediate==0){
            second = 59;
            mediate = 59;
            hour--;
            get.innerHTML = `${hour}:${mediate}:${second}`;
        }
        if(second==0 && mediate==0 && hour==0){
            clearInterval();
            alert('Time out!');
        }
    },1000);
    }
}



function confirm(input){
    var board = document.getElementById("count_board");
    board.style.display = "block";
    countdown();
    var change = document.getElementById("finish");
    change.style.display = "block";
    change.addEventListener("click",() => {
        index_num++;
        countdown();
    });
}