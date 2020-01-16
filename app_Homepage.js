// document.getElementById("btn_plan").addEventListener("click", () => {
//     window.location.assign("http://127.0.0.1:5500/Source%20code/Schedule/app_Schedule.html");
// })
// document.getElementById("btn_prac").addEventListener("click", () => {
//     window.location.assign("http://127.0.0.1:5500/Source%20code/Exercise/app_Exercise.html");
// })
// document.getElementById("btn_news").addEventListener("click", () =>{
//     window.location.assign("http://127.0.0.1:5500/Source%20code/News/app_News.html");
// })


var flag = 1;
function nextImg(input){
    var get = document.getElementById("img_part_instruct");
    switch(flag){
        case 1: 
            get.src = "../Assets/img_1.png";
            break;
        case 2:
            get.src = "../Assets/img_2.png";
            break;
        case 3:
            get.src = "../Assets/img_3.png";
            break;
         case 4:
            get.src = "../Assets/img_4.png";
            break;
        case 5:
            get.src = "../Assets/img_5.png";
            break;
        case 6:
            get.src = "../Assets/img_6.png"
            break;
    }
    if(flag<7){
        flag += 1;
    }
    else{
        flag -= 6;
    }
}

var index = 1;
function change_img(){
    for (var i=1; i<=2; i++){
        var get = document.getElementById(`index_${i}`);
        get.style.display = "none";
    }

    var got  = document.getElementById(`index_${index}`);
    got.style.display = "block";
    index++;
    if(index>2){
        index=1;
    }

    setTimeout(change_img, 2000);
}

change_img();

var btn_1 = document.getElementById("schedule");
btn_1.addEventListener("click", () => {
    window.location.assign("http://127.0.0.1:5500/Schedule/app_Schedule.html");
});

var btn_2 = document.getElementById("exercise");
btn_2.addEventListener("click", () => {
    window.location.assign("http://127.0.0.1:5500/Exercise/app_Exercise.html");
});

var btn_3 = document.getElementById("news");
btn_3.addEventListener("click", () => {
    window.location.assign("http://127.0.0.1:5500/News/app_News.html");
});