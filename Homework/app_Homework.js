document.getElementById("task_number").addEventListener("submit", (a) => {
    a.preventDefault();
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
    var a = prompt("Please, enter your sybject you want to do here:");
    var subject = document.createElement("div");
    subject.innerHTML = a;
    subject.className = "name_part";
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
function time(input){ 
    var number = document.getElementById("data_number").value;
    var remain_num = cal_time()/number;
    console.log(remain_num)
    if (remain_num>=30){
            console.log("succeed")
            var each_num = remain_num - 5;
            var set_time = document.createElement("div");
            set_time.className = "time_part";
            set_time.innerHTML = `${each_num.toFixed(1)} minutes`;
            input.appendChild(set_time);
            alert("After each exercise, you should take a 5-minute rest!");
        }
    if(remain_num<30){
        console.log("succeed")
        var each_num = remain_num;
        var set_time = document.createElement("div");
        set_time.className = "time_part";
        set_time.innerHTML = `${each_num.toFixed(1)} minutes`;
        input.appendChild(set_time);
        alert("You should hurry up!")
    }
    if(remain_num<25){
        console.log("succeed")
        var each_num = remain_num;
        var set_time = document.createElement("div");
        set_time.className = "time_part";
        set_time.innerHTML = `${each_num.toFixed(1)} minutes`;
        input.appendChild(set_time);
        alert("More effort! You don't have much time.")
    }
}

// document.getElementById("start").addEventListener("click", ()=>{
//     var number = document.getElementById("data_number").value;
//     var remain_num = cal_time()/number;
//     if(remain_num>=30){
//         var get =  document.getElementById("container");
//         var countdown = document.createElement("div");
//         countdown.className = "countdown";
//         countdown.setAttribute("onclick", "countdown_5(this)");
//         get.appendChild(countdown);
//     }
//     if(remain_num<30){
//         var get =  document.getElementById("container");
//         var countdown = document.createElement("div");
//         countdown.className = "countdown";
//         countdown.setAttribute("onclick", "countdown(this)");
//         get.appendChild(countdown);
//     }
// })
// function countdown_5(input){
//     console.log("ok");
//     var number = document.getElementById("data_number").value;
//     var remain_num = cal_time()/number;
//     var each_num = remain_num - 5;
//     var d = new Date();
//     var second = d.getSeconds();
//     function start(){
//         if(second === -1){
//             each_num -= 1;
//             s = 59;
//         }
//         if(each_num === -1){
//             alert("Time out!");
//         }
//         var show = document.createElement("div");
//         show.className = "show_part";
//         show.innerHTML = `${each_num}:${second}`;
//         input.appendChild(show);
//     }
//     start();
// }
// function countdown(input){
//     console.log("ok");
//     var number = document.getElementById("data_number").value;
//     var remain_num = cal_time()/number;
//     var each_num = remain_num;
//     var d = new Date();
//     var second = d.getSeconds();
//     function start(){
//         for(var i=0; each_num>=0; i++){
//             if(second === 0){
//                 each_num -= 1;
//                 s = 59;
//             }
//             if(each_num === 0){
//                 alert("Time out!");
//             }
//             var show = document.createElement("div");
//             show.className = "show_part";
//             show.innerHTML = `${each_num}:${second}`;
//             input.appendChild(show);
//         }
//     }
//     start();
// }

