console.log('This is JS Part of Project5');
const alarmSubmit = document.getElementById('alarmSubmit');
alarmSubmit.addEventListener('click',setAlarm);
// var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
// audio.play();
// function ringBell(){
//     Audio.play();
// }
function setAlarm(e){
    e.preventDefault();
    // console.log('setting Alarm...');
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);
    console.log(`setting alarm for ${alarmDate}...`);
    now = new Date();
    let timeToAlarm = alarmDate - now;
    console.log(timeToAlarm);
    if(timeToAlarm >= 0){
        setTimeout(()=>{
            console.log('ringing now');
            // ringBell();
        },timeToAlarm);
    }

}