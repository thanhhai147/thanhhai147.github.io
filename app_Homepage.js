document.getElementById("btn_plan").addEventListener("click", () => {
    window.location.assign("https://thanhhai147.github.io/Schedule/app_Schedule.html");
})
document.getElementById("btn_prac").addEventListener("click", () => {
    window.location.assign("http://127.https://thanhhai147.github.io/Exercise/app_Exercise.html.0.1:5500/Source%20code/Exercise/app_Exercise.html");
})
document.getElementById("btn_news").addEventListener("click", () =>{
    window.location.assign("http://127.0.0.https://thanhhai147.github.io/News/app_News.html:5500/Source%20code/News/app_News.html");
})


var flag = 1;
function nextImg(input){
    console.log("asd");
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

// var index = 0;
// function changeImg(input){
//     var get = document.getElementById("img_study");
//     var d = new Date();
//     var second = d.getSeconds();
//     var second_1 = second + 3;
//     if(second = second_1){
//         switch(index){
//             case 0:
//                 get.src = "../Assets/study_0.jpg";
//                 break;
//             case 1:
//                 get.src = "../Assets/study_1.jpg"
//                 break;
//         }
//         if(index==0){
//             index += 1;
//         }
//         else{
//             index -= 1;
//         }
//     }
// }