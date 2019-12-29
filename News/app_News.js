function load(input){
    for(var i=0; i<3; i++){
        var get = document.getElementById(`sport_url_${i}`);
        for(var j=0; j<2; j++){
            if(j==0){
                var index = document.createElement("div");
                index.className = "title_part";
                index.id = `sport_title_part_${i}`;
                get.appendChild(index);
            }
            else{
                var index =document.createElement("div");
                index.className = "article_part";
                index.id = `sport_article_part_${i}`;
                get.appendChild(index);
                var put = document.getElementById(index.id);
                var create = document.createElement("img");
                create.id=`sport_img_${i}`;
                create.className = "img";
                put.appendChild(create);
            }
        }
    }
    for(var i=0; i<3; i++){
        var get = document.getElementById(`tech_url_${i}`);
        for(var j=0; j<2; j++){
            if(j==0){
                var index = document.createElement("div");
                index.className = "title_part";
                index.id = `tech_title_part_${i}`;
                get.appendChild(index);
            }
            else{
                var index =document.createElement("div");
                index.className = "article_part";
                index.id = `tech_article_part_${i}`;
                get.appendChild(index);
                var put = document.getElementById(index.id);
                var create = document.createElement("img");
                create.id=`tech_img_${i}`;
                create.className = "img";
                put.appendChild(create);
            }
        }
    }
}


var sport_url = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=d4076cfd983e4c38b2da346e0b6a752f";
var sport_req = new Request(sport_url);
fetch(sport_req).then(async function (response){
    try{
        const data = await response.json();
        for(var i=0; i<3; i++){
            var index = document.getElementById(`sport_title_part_${i}`);
            index.innerHTML = data.articles[i].title;
            var create = document.getElementById(`sport_img_${i}`);
            create.src = data.articles[i].urlToImage;
            var a = document.getElementById(`sport_url_${i}`);
            a.href = data.articles[i].url;
        }
    }catch(error){
        alert("404");
    }
})


var tech_url = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=d4076cfd983e4c38b2da346e0b6a752f";
var tech_req = new Request(tech_url);
fetch(tech_req).then(async function(response){
    try{
        const data = await response.json();
        for(var i=0; i<3; i++){
            var index = document.getElementById(`tech_title_part_${i}`);
            index.innerHTML = data.articles[i].title;
            var create = document.getElementById(`tech_img_${i}`);
            create.src = data.articles[i].urlToImage;
            var a = document.getElementById(`tech_url_${i}`);
            a.href = data.articles[i].url;
        }
    }catch(error){
        alert("404");
    }

})
var hot_url = "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=d4076cfd983e4c38b2da346e0b6a752f";
var hot_req = new Request(hot_url);
fetch(hot_req).then(async function(response){
    try{
        const data = await response.json();
        var index = document.getElementById("hot_title");
        var create = document.getElementById("hot_article");
        var img = document.getElementById("hot_image");
        index.innerHTML = data.articles[0].title;
        create.innerHTML = data.articles[0].content;
        img.src = data.articles[0].urlToImage;
        var a = document.getElementById(`hot_url`);
        a.href = data.articles[0].url;
    }catch(error){
        alert("404")
    }
})

