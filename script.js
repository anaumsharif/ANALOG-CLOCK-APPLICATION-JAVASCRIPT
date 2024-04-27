let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function displayTime(){
    let date = new Date();
    // console.log(date);

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    // console.log(hh,mm,ss);



    let hRotation = 30**hh + mm/2;   // 30 degree rotation at every hour and 0.5 degree for every  minute
    let mRotation = 6*mm;   // 6 degree rotation 
    let sRotation = 6*ss;   // 6 degree rotation 
    console.log(hRotation,mRotation,sRotation);



    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;

}
setInterval(displayTime,1000);