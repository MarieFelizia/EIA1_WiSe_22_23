const TonC= document.querySelector("#TonC")
const TonDf = document.querySelector("#TonDf")
const TonD = document.querySelector("#TonD")
const TonEf = document.querySelector("#TonEf")
const TonE= document.querySelector("#TonE")
const TonF = document.querySelector("#TonF")
const TonGf = document.querySelector("#TonGf")
const TonG = document.querySelector("#TonG")
const TonAf = document.querySelector("#TonAf")
const TonA = document.querySelector("#TonA")
const TonBf = document.querySelector("#TonBf")
const TonB = document.querySelector("#TonB")


const soundC:HTMLAudioElement = new Audio('c.mp3')
const soundDf:HTMLAudioElement = new Audio('df.mp3')
const soundD:HTMLAudioElement = new Audio('d.mp3')
const soundEf:HTMLAudioElement = new Audio('ef.mp3')
const soundE:HTMLAudioElement = new Audio('e.mp3')
const soundF:HTMLAudioElement = new Audio('f.mp3')
const soundGf:HTMLAudioElement = new Audio('gf.mp3')
const soundG:HTMLAudioElement = new Audio('g.mp3')
const soundAf:HTMLAudioElement = new Audio('af.mp3')
const soundA:HTMLAudioElement = new Audio('a.mp3')
const soundBf:HTMLAudioElement = new Audio('bf.mp3')
const soundB:HTMLAudioElement = new Audio('b.mp3')

function playSample(ton){ 
    ton.play()
}

TonC.addEventListener("click",function(){
    playSample(soundC)
})

TonDf.addEventListener("click",function(){
    playSample(soundDf)
})

TonD.addEventListener("click",function(){
    playSample(soundD)
})

TonEf.addEventListener("click",function(){
    playSample(soundEf)
})

TonE.addEventListener("click",function(){
    playSample(soundE)
})

TonF.addEventListener("click",function(){
    playSample(soundF)
})

TonGf.addEventListener("click",function(){
    playSample(soundGf)
})

TonG.addEventListener("click",function(){
    playSample(soundG)
})

TonAf.addEventListener("click",function(){
    playSample(soundAf)
})

TonA.addEventListener("click",function(){
    playSample(soundA)
})

TonBf.addEventListener("click",function(){
    playSample(soundBf)
})

TonB.addEventListener("click",function(){
    playSample(soundB)
})

let Tonabfolge=  [soundC, soundD, soundE, soundF, soundG, soundA, soundB]

const playButton= document.querySelector("#playButton")

playButton.addEventListener("click", function(){ 
    setInterval(function() {
       for (let i = 0; i < Tonabfolge.length; i++) {
        playSample(Tonabfolge[i])
       }

     }, 5000);
})