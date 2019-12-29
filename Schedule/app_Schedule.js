// var Myflag={
//     Monday:true,
//     Tuesday:true,
//     Wednesday:true
// };
// var Myday=["Monday","Tuesday"];
// console.log(Myflag);
// function createMorning(input) {
//     var get = document.getElementById("content");
//     var day = input.innerHTML;
//     for(var i =0;i<Myday.length;i++){
//         if(day.includes(Myday[i])){
//             day=Myday[i];
//             break;
//         }
//     }
//     if(Myflag[day]){
//         get.style.visibility = "visible";
//         var title = document.createElement("div");
//         title.innerHTML = "Morning";
//         input.appendChild(title);
//         for(var i=0; i<5; i++){
//             var index = document.createElement("div");
//             index.innerHTML = `lesson_${i}`;
//             input.appendChild(index);
//         }
//         Myflag[day] = false;
//         return;
//     }
//     if(!Myflag[day]){
//         if( input.chlidElementCount==5){
//         get.style.visibility = "visible"
//         }
//         else{
//         get.style.visibility = "hidden";
//         }
//     Myflag[day] = true; 
//     }
//     console.log(Myflag);
// }
// function createMorning(input){
//     var get = document.getElementById("morning");
//     var number = get.childElementCount;
//     console.log(number);
//     if(number==0){
//         get.style.visibility = "visible"
//         var title = document.createElement("div");
//         title.className = "title_session";
//         title.innerHTML = "Morning";
//         get.appendChild(title)
//         for(var i=0; i<5; i++){
//             var flag = document.createElement("div");
//             flag.className = "lesson";
//             flag.innerHTML = `lesson_${i}`;
//             get.appendChild(flag);
//         }
//     }
//     if(number!=0 && get.style.visibility=="visible"){
//         get.style.visibility = "hidden";
//     }
//     if(number!=0 && get.style.visibility=="hidden"){
//         get.style.visibility = "visible";
//     }
// }



function create(input){
    var get = document.getElementById("content");
    for(var i=0; i<7; i++){
        var index = document.createElement("div");
        index.id = `day_${i}`;
        index.className = "day"
        get.appendChild(index);
        var put = document.getElementById(`day_${i}`);
        for(var j=0; j<2; j++){
            if(j==0){
                var createSession = document.createElement("div");
                createSession.id = `morning_session_day${i}`;
                createSession.className = "morning_session";
                put.appendChild(createSession);

                var post = document.getElementById(createSession.id)
                for(var k=0; k<6; k++){
                    if(k==0){
                        var create = document.createElement("div");
                        create.id = `morning_day_${i}`;
                        create.className = "morning";
                        post.appendChild(create);

                        var got = document.getElementById(create.id);
                        var part = document.createElement("div");
                        part.className = "morning_part";
                        part.innerHTML = "Morning";
                        got.appendChild(part);
                    }
                    else{
                        var create = document.createElement("div");
                        create.id = `lesson_day_morning_${i}_${k}`;
                        create.className = "lesson";
                        post.appendChild(create);

                        for(var l=0; l<2; l++){
                            if(l==0){
                                var got = document.getElementById(create.id);
                                var part = document.createElement("div");
                                part.className = "title";
                                part.id = `lesson_part_morning_day_${i}_k`;
                                part.innerHTML = `Lesson ${k}`;
                                part.setAttribute("onclick","enter_lesson(this)");
                                got.appendChild(part);
                            }
                            else{
                                var got = document.getElementById(create.id);
                                var part = document.createElement("div");
                                part.className = "time";
                                part.innerHTML = "Time:";
                                part.setAttribute("onclick","enter_time(this)");
                                got.appendChild(part);
                            }
                        }
                    }
                }
            }
            else{
                var createSession = document.createElement("div");
                createSession.id = `afternoon_session_day${i}`;
                createSession.className = "afternoon_session";
                put.appendChild(createSession);

                var post = document.getElementById(createSession.id);
                for(var k=0; k<6; k++){
                    if(k==0){
                        var create = document.createElement("div");
                        create.id = `afternoon_day_${i}`;
                        create.className = "afternoon";
                        post.appendChild(create);

                        var got = document.getElementById(create.id);
                        var part = document.createElement("div");
                        part.className = "afternoon_part";
                        part.innerHTML = "Afternoon";
                        got.appendChild(part);
                    }
                    else{
                        var create = document.createElement("div");
                        create.id = `lesson_day_afternoon_${i}_${k}`;
                        create.className = "lesson";
                        post.appendChild(create);

                        for(var l=0; l<2; l++){
                            if(l==0){
                                var got = document.getElementById(create.id);
                                var part = document.createElement("div");
                                part.className = "title";
                                part.id = `lesson_part_morning_day_${i}_k`;
                                part.innerHTML = `Lesson ${k}`;
                                part.setAttribute("onclick","enter_lesson(this)");
                                got.appendChild(part);
                            }
                            else{
                                var got = document.getElementById(create.id);
                                var part = document.createElement("div");
                                part.className = "time";
                                part.innerHTML = "Time:";
                                part.setAttribute("onclick","enter_time(this)");
                                got.appendChild(part);
                            }
                        }
                    }
                }
            }
        }
    }
}


function enter_lesson(input){
    var a = prompt("Enter your lesson here:");
    var b = document.getElementById(input.id);
    var create = document.createElement("div");
    create.className = "lesson_content";
    create.innerHTML = a;
    b.appendChild(create);
}

function enter_time(input){
    var a = prompt("Enter your lesson's time here:");
    var b = document.getElementsByClassName("time");
    input.innerHTML = `Time: ${a}`;
}

