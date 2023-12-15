const openBtn = document.getElementById("open-btn");
const sectionWelcome = document.getElementById("section-welcome");
const calendarCard = document.getElementById("calendar-card");
const sectionCalendar = document.getElementById("section-calendar");
const welcomeImg = document.getElementsByClassName("section-welcome-img");
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
    openBtn.style.display = "none";
    setTimeout(() => {
        sectionWelcome.style.display = "none";
        sectionCalendar.style.display = "flex";
        // sectionCalendar.style.transition = "opacity 2s ease";
        
        calendarCard.style.transition = "opacity 2s ease";
        calendarCard.style.opacity = 1;
      }, "2000");
 });


for (let i = 1 ; i < 26; i++) {
    const dayCard = document.createElement ("div");
    dayCard.classList = "backcard";
    // dayCard.dataset.gif = gif
    dayCard.style.width ="100px";
    dayCard.style.height = "150px";
    dayCard.style.backgroundColor = "rgba(255,255,255,0.7)";
    dayCard.innerText = [i];
    calendarCard.appendChild(dayCard);
    dayCard.addEventListener("click", function(){
        if (dayCard.innerText == i &&  i <= day ) {
            dayCard.style.backgroundImage = `url('images/gif/gif${i}.gif')`;
            dayCard.innerText = "";
        }
    });
    
     //arrayGif.push(createBackCard.innerText);

}
console.log (day);
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