let minutes=25;
let seconds=60;
let timmer=0;

function start(){
    timmer=setInterval(()=>{
        seconds--;
        if(seconds == 0){
            minutes--;
            seconds=59;
        }

        let s=seconds<=9?"0"+seconds:seconds
        let m=minutes < 9 ?"0"+minutes:minutes

        document.getElementById("display").innerText=m+":"+s

        if(minutes == 0){
            minutes=25;;
            seconds=0
        }

    },1000)
}

function stop(){
    clearInterval(timmer)
}

function reset(){
    clearInterval(timmer)
    document.getElementById("display").innerText="25:00";
}