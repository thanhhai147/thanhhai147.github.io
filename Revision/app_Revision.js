var number_day;
var number_subject;


document.getElementById("form").addEventListener("submit", (x) => {
        x.preventDefault();
        number_day = document.getElementById("day_num").value;
        number_subject = document.getElementById("sub_num").value;
        var mediate_num = number_subject % number_day;
        var each_day = (number_subject - mediate_num) / number_day;

        var d = new Date();
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Sunday";
        var day = d.getDay();
        var date = d.getDate();
        var month = d.getMonth();
        var year = d.getFullYear();
    

        number_day = document.getElementById("day_num").value;
        number_subject = document.getElementById("sub_num").value;
        var b = number_day - 1;
        console.log(b,number_day);
        var a = new Array(b);
        for(var i=0; i<number_day; i++){
            a[i] = {
                time: `${weekday[day]}`,
                classname: `index_${i}`
            };
            day++; 
            date++;
            if(day>=7){
                day = day - 7;
            } 
            if(month==2){
                if(date==29||date==30){
                    month++;
                }
            }
            if(month==1,3,5,7,8,10,12){
                if(date==32){
                    month++;
                }
            }
            if(month==4,6,9,11){
                if(date==31){
                    month++;
                }
            }
            if(month==13){
                year++;
            }
            day++;
        }
        var put = document.getElementById("content");
        if(put.childElementCount==0){
            if(number_day>number_subject){
                for(var i=0; i<number_subject; i++){
                    var index = document.createElement("div");
                    index.className = "sub_board";
                    index.id = `sub_board_${i}`;
                    put.appendChild(index);
                    

                    var get = document.getElementById(index.id);
                    for(var j=0; j<2; j++){
                        if(j==0){
                            var title = document.createElement("div");
                            title.className = "title";
                            title.id = `title_${i}`;
                            title.innerHTML = `The subject of ${a[i]["time"]}:`;
                            get.appendChild(title);
                        }
                        else{
                            var sub_content = document.createElement("div");
                            sub_content.className = "sub_content";
                            sub_content.id = `sub_content_${i}`;
                            get.appendChild(sub_content);
                        }
                    }

                    var post = document.getElementById(`sub_content_${i}`);
                    var create = document.createElement("div");
                    create.className = "subject";
                    create.id = `subject_${i}`;
                    create.setAttribute("onclick","enter(this)");
                    create.innerHTML = "Subject:"
                    post.appendChild(create);
                }
            }
        if(number_subject>number_day){
            for(var i=0; i<number_day; i++){
                var index = document.createElement("div");
                index.className = "sub_board";
                index.id = `sub_board_${i}`;
                put.appendChild(index);
                            
        
                var get = document.getElementById(index.id);
                for(var j=0; j<2; j++){
                    if(j==0){
                        var title = document.createElement("div");
                        title.className = "title";
                        title.id = `title_${i}`;
                        title.innerHTML = `The subject of ${a[i]["time"]}:`;
                        get.appendChild(title);
                    }
                    else{
                        var sub_content = document.createElement("div");
                        sub_content.className = "sub_content";
                        sub_content.id = `sub_content_${i}`;
                        get.appendChild(sub_content);
                    }
                }
        

                var post = document.getElementById(`sub_content_${i}`);
                for(var k=0; k<each_day; k++){
                    var create = document.createElement("div");
                    create.className = "subject";
                    create.id = `subject_${i}_${k}`;
                    create.setAttribute("onclick","enter(this)");
                    create.innerHTML = "Subject:";
                    post.appendChild(create);
                }
            }
            if(mediate_num!=0){
                var t=0;
                for(var l=0; l<number_day; l++){
                    if(t==mediate_num){
                        break;
                    }
                    var add = document.getElementById(`sub_content_${l}`);
                    var create = document.createElement("div");
                    create.className = "subject";
                    create.setAttribute("onclick","enter(this)");
                    create.innerHTML = "Subject:";
                    add.appendChild(create);
                    t++;
                }
            }
        }
    }
})


function enter(input){
    var a = prompt("Enter the subject here:");
    input.innerHTML = "Subject: "+a;
}

    

