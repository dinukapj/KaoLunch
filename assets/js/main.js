/* 
* Contributed by Dinuka Jayasuriya (Dinster on YouTube)
*/

var welcomeTexts = ["Ready for Lunch?", "End your starvation", "Time to eat", "Click the button"];
var places = ["Curry Leaf", "Subway", "Burger King"];

function welcome() {
    var place_label = document.getElementById("place_label");
    $.each(welcomeTexts, function (i, val) {
        setTimeout(function () {
            $('#place_label').fadeOut("slow", function () {
                $(this).text(val).fadeIn("slow");
            });
        }, i * 2000);
    });
}

function execute_randomizer() {
    s = setInterval(function () {
        tick();
        //start_loader();
    }, 50);
}

function tick() {
    var place_label = document.getElementById("place_label");
    var emoji_haha = document.getElementById("emoji_haha");
    var emoji_wow = document.getElementById("emoji_wow");
    var loading_circle = document.getElementById("loading_circle");
    
    if (i + 1 > places.length - 1) {
        var item = places[Math.floor(Math.random() * places.length)];
        place_label.innerText = item;
    }
    else {
        place_label.innerText = places[i + 1];
    }
    i++;
    round++;
    if (i >= places.length && round == 150) {
        clearInterval(s);
        var item = places[Math.floor(Math.random() * places.length)];
        place_label.innerText = item;

        emoji_haha.style.opacity = 1;
        emoji_wow.style.opacity = 1;
        //loading_circle.style.display = 'none';
        
        i = 0;
        round = 0;
    }
}
var i = 0;
var s;
var round = 0;

function start_loader(){
    var loading_circle = document.getElementById("loading_circle");
    loading_circle.classList.remove("p-" + counter);
    counter++;
    if(counter <= 100){
        counter = 0;
    }
    loading_circle.classList.add("p-" + counter);
}
var counter = 0;