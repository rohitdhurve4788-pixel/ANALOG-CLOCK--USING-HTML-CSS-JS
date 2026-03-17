let hour=document.querySelector('.hour')
let min=document.querySelector('.minute')
let sec=document.querySelector('.second')

function timer(){
    let now=new Date()
const hr=now.getHours()
const minute=now.getMinutes()
const second=now.getSeconds()


hour.style.transform=`translatex(-50%)rotate(${(hr%12*30+minute*0.5)}deg)`
min.style.transform=`translatex(-50%)rotate(${minute*6}deg)`
sec.style.transform=`translatex(-50%)rotate(${second*6}deg)`


}
timer()
setInterval(timer,1000)

