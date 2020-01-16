



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

