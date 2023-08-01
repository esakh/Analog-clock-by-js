const min = document.querySelector('.hand-min')
const hour = document.querySelector('.hand-hour')
const second = document.querySelector('.hand-second')
const digitalClock = document.querySelector('.digital-clock')
    setInterval(()=>{
    const time = new Date()
    let milSecond = time.getMilliseconds() * 0.006
    let seconds = time.getSeconds()*6 + milSecond
    let minutes = time.getMinutes()*6 + seconds/60
    let hours = (time.getHours()||12)*30 + minutes/12
    second.style.transform =`rotate(${seconds}deg)`
    min.style.transform =`rotate(${minutes}deg)`
    hour.style.transform =`rotate(${hours}deg)`

    let digitalMin = time.getMinutes().toString().padStart(2 , '0')
    let digitalSeconds = time.getSeconds().toString().padStart(2 , '0')
    let digitalHour = time.getHours()|| 12
    let pmOrAm = digitalHour <12 ?'Am':'Pm'
    digitalClock.textContent = `${digitalHour} : ${digitalMin} : ${digitalSeconds}  ${pmOrAm}`
} , 20)
