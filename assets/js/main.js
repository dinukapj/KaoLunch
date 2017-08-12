/* 
* Contributed by Dinuka Jayasuriya (Dinster on YouTube)
*/

var welcomeTexts = ["KaoLunch", "Ready for Lunch?"];
var places = ["Curry Leaf", "Subway", "Burger King", "Texas Chicken", "Nasi Kandar", "Village Park"];
var teamWelcome = ["Hungry again?", "Not Curry Leaf please!", "Hungry lah", "Another day, another lunch"];
var teamSayings = ["Not again lah, damn it!", "We had that last week also.. fine!", "Urgh, again..", "Damn hungry already"];
var teamPictures = ["https://avatars0.githubusercontent.com/u/4633021?v=4&s=250", "https://avatars0.githubusercontent.com/u/6925550?v=4&s=250", "https://avatars3.githubusercontent.com/u/26051658?v=4&s=250", "https://avatars1.githubusercontent.com/u/11241826?v=4&s=250", "https://avatars3.githubusercontent.com/u/1059690?v=4&s=250", "https://avatars1.githubusercontent.com/u/6603176?v=4&s=250", "https://avatars1.githubusercontent.com/u/10361779?v=4&s=250", "https://avatars1.githubusercontent.com/u/5396714?v=4&s=250"];

function welcome() {
    var place_label = document.getElementById("place_label");
    $.each(welcomeTexts, function (i, val) {
        setTimeout(function () {
            $('#place_label').fadeOut("slow", function () {
                $(this).text(val).fadeIn("slow");
            });
        }, i * 2000);
    });
    setIntercom(true);
}

function execute_randomizer() {
    var emoji_haha = document.getElementById("emoji_haha");
    var emoji_wow = document.getElementById("emoji_wow");
    var lunch_button = document.getElementById("lunch_button");
    lunch_button.style.opacity = 0;
    var intercom_bubble = document.getElementById("intercom-container");

    intercom_bubble.style.opacity = 0;
    
    if (emoji_haha.style.opacity == 1) {
        $('#emoji_haha').finish().delay(100).fadeOut('slow', function () {
            emoji_haha.style.opacity = 0;
        });
        $('#emoji_wow').finish().delay(100).fadeOut('slow', function () {
            emoji_wow.style.opacity = 0;
        });
    }

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
    var lunch_button = document.getElementById("lunch_button");
    var intercom_bubble = document.getElementById("intercom-container");

    if (i + 1 > places.length - 1) {
        var item = places[Math.floor(Math.random() * places.length)];
        place_label.innerText = item;
    }
    else {
        place_label.innerText = places[i + 1];
    }
    i++;
    round++;
    if (i >= places.length && round == 50) {
        clearInterval(s);
        var item = places[Math.floor(Math.random() * places.length)];
        place_label.innerText = item;

        emoji_haha.style.opacity = 1;
        emoji_wow.style.opacity = 1;

        emoji_haha.style.display = 'none';
        emoji_wow.style.display = 'none';

        setIntercom(false);
        
        intercom_bubble.style.opacity = 1;
        intercom_bubble.style.display = 'none';
        $('#intercom-container').finish().delay(100).fadeIn('slow');

        $('#emoji_haha').finish().delay(100).fadeIn('slow');
        $('#emoji_wow').finish().delay(100).fadeIn('slow');
        
        lunch_button.style.opacity = 1;

        //loading_circle.style.display = 'none';

        i = 0;
        round = 0;
    }
}
var i = 0;
var s;
var round = 0;

function setIntercom(isWelcome) {
    if (isWelcome) {
        $('#intercom_message').text(teamWelcome[Math.floor(Math.random() * teamWelcome.length)]);
    }
    else {
        $('#intercom_message').text(teamSayings[Math.floor(Math.random() * teamSayings.length)]);
    }
    $('#intercom_avatar').css("background-image", "url(" + teamPictures[Math.floor(Math.random() * teamPictures.length)] + ")");
    teamPictures
}

function start_loader() {
    var loading_circle = document.getElementById("loading_circle");
    loading_circle.classList.remove("p-" + counter);
    counter++;
    if (counter <= 100) {
        counter = 0;
    }
    loading_circle.classList.add("p-" + counter);
}
var counter = 0;