var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
    document.getElementById("camera").innerHTML = "";
    document.getElementById("result").innerHTML = "";
}

recognition.onresult = function(event){
    console.log(event);
    speech = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = speech;
    console.log(speech);
    if(speech=="take my selfie"){
        speak();
    }
}

function speak(){
    var synth = window.speechSynthesis;
     var stuff = "Taking selfie in 5 seconds";
     var UtterThis = new SpeechSynthesisUtterance(stuff);
     synth.speak(UtterThis);
     Webcam.attach(cam);
     setTimeout(function(){
        shot();
        save();
    },10000);
}

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:100
});

var cam = document.getElementById("camera");

function shot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = '<img id="selfie" src="' + data_uri + '">';
});}



function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie").src;
    link.href = image;
    link.click();
}







