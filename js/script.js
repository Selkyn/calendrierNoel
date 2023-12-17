const openBtn = document.getElementById("open-btn");
const sectionWelcome = document.getElementById("section-welcome");
const calendarCard = document.getElementById("calendar-card");
const sectionCalendar = document.getElementById("section-calendar");
const welcomeImg = document.getElementsByClassName("section-welcome-img");
const closeBtn = document.getElementById("close-btn");
const pereNoel = document.getElementById("pere-noel");
 //const arrayGif = [];
const nowTime = new Date()
const day = nowTime.getDate();
console.log(welcomeImg)

 openBtn.addEventListener('click', function() {
    for (let i = 0; i < welcomeImg.length; i++) {
        // welcomeImg[i].style.margin = "0 100vw";
        welcomeImg[i].style.transition = "transform 2s ease";
        welcomeImg[i].style.transform = i === 0 ? "translateX(-100%)" : "translateX(100%)";
    }
    pereNoel.style.transition = "opacity 2.5s ease";
    pereNoel.style.opacity = 0;
    openBtn.style.display = "none";
    closeBtn.style.display = "grid";
    setTimeout(() => {
        sectionWelcome.style.display = "none";
        sectionCalendar.style.display = "flex";
        // sectionCalendar.style.transition = "opacity 2s ease";
        setTimeout(() => {
        calendarCard.style.transition = "opacity 2s ease";
        calendarCard.style.opacity = 1;
        }, "500");
      }, "2000");
 });

 closeBtn.addEventListener("click", function() {
    pereNoel.style.transition = "opacity 2.5s ease";
    pereNoel.style.opacity = 1;
    calendarCard.style.transition = "opacity 1s ease";
    calendarCard.style.opacity = 0;
    closeBtn.style.display = "none";
    for (let i = 0; i < welcomeImg.length; i++) {
        
        setTimeout(() => {
            sectionWelcome.style.display = "flex";
            setTimeout(() => {
        // welcomeImg[i].style.margin = "0";
                sectionCalendar.style.display = "none";
                welcomeImg[i].style.transition = "transform 2s ease";
                welcomeImg[i].style.transform = "translateX(0%)"
                setTimeout(() => {
                    openBtn.style.display = "grid";
                }, "2000");
            }, "1000");
        }, "1000");
    }
 })

// La boucle de l'Enfer
for (let i = 1 ; i < 26; i++) {
    const dayCard = document.createElement ("div");
    dayCard.classList = "backcard";
    dayCard.classList.add(`day-card${i}`);
    // dayCard.dataset.gif = gif
    dayCard.style.width ="100px";
    dayCard.style.height = "100px";
    dayCard.style.backgroundColor = "rgba(255,255,255,0.7)";
    dayCard.innerText = [i];
    calendarCard.appendChild(dayCard);

    if (i === day) {
        dayCard.style.color = "green";
        dayCard.id += "day-card-today";
        dayCard.addEventListener("mouseover", function(){
            dayCard.style.backgroundColor = "rgba(100,255,100,0.7)";
            dayCard.style.color = "white"
            dayCard.style.fontSize = "75px"
        });
        dayCard.addEventListener("mouseout", function () {
            dayCard.style.backgroundColor = "rgba(255,255,255,0.7)";
            dayCard.style.color = "green";
            dayCard.style.fontSize = "40px"
        });
    }else if (i > day){
        dayCard.style.color = "red";
        dayCard.addEventListener("mouseover", function(){
            dayCard.style.backgroundColor = "rgba(255,0,0,0.7)";
            dayCard.style.color = "black"
            dayCard.style.fontSize = "75px"
        });
        dayCard.addEventListener("mouseout", function () {
            dayCard.style.backgroundColor = "rgba(255,255,255,0.7)";
            dayCard.style.color = "red";
            dayCard.style.fontSize = "40px"
         });
        
        
    }else {
        dayCard.addEventListener("mouseover", function(){
            dayCard.style.backgroundColor = "rgba(100,255,100,0.7)";
            dayCard.style.color = "black"
            dayCard.style.fontSize = "75px"
        });
        dayCard.addEventListener("mouseout", function () {
            dayCard.style.backgroundColor = "rgba(255,255,255,0.7)";
            dayCard.style.color = "black";
            dayCard.style.fontSize = "40px"
        });
    }

    dayCard.addEventListener("click", function(){
        if (dayCard.innerText == i &&  i <= day ) {
            dayCard.style.backgroundImage = `url('images/gif/gif${i}.gif')`;
            dayCard.innerText = "";
        }
    });
    }


    console.log (day);

    // const backCard = document.getElementsByClassName("backcard");
    // for (let y = 0; y < backCard.length; y ++) {
    //     if (day = backCardy) {
    //         backCard.style.color = "black";
    //     }
    // };


// function flipCard (flip) {
//     const createBackCard = flip.target
//     for (let i = 0; i <= 26; i++) {
//         if (createBackCard.innerText == i) {
//             createBackCard.style.backgroundImage = `url('images/gif/gif${i}.gif')`;
//         }
//     }
//     createBackCard.innerText = "";
// }













































// function flipCard (flip) {
//     const createBackCard = flip.target;
//     for (let i = 1; i <=25; i++) {
//         let gifCard = "gif" + i;

//         let card = document.querySelector("." + gifCard);

        
//             card.style.backgroundImage = `url('images/gif/gif${i}.gif')`;
        
//     }
// }

// function flipCard (flip) {
//     const createBackCard = flip.target;
    //let backCard = document.getElementsByClassName("backcard");
    // for (let i = 1; i < numbers.length; i ++) {
    //     if ()
    //     createBackCard.style.backgroundImage = `url('imgages/gif/gif${numbers[i]}.gif')`;
    // }
    //createBackCard.style.backgroundImage = "url('images/gif/gif1.gif')";
    // //
    // for (let i = 0 ; i < arrayGif.length; i++) {
    //     //createBackCard.style.backgroundImage = "url('images/gif/gif1.gif')"; 
    //     //if (arrayGif.innerText === arrayGif[i]) {
    //         backCard.style.backgroundImage = `url('imgages/gif/gif${i}.gif')`;
    //     //}
        
        //arrayGif.push(createBackCard);
    // };
    // for( let y = 0; y < arrayGif.length; y ++) {
        
     //}
    
    //backCard.innerText = "";
// }


// function generateCards() {
//     const gifs = ["gif1", "gif2", "gif3", "gif4", "gif5", "gif6", "gif7", "gif8", "gif9", "gif10", "gif11", "gif12", "gif13", "gif14", "gif15", "gif16", "gif17", "gif18", "gif19", "gif20", "gif21", "gif22", "gif23", "gif24", "gif25"];
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];