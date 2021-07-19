var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function (event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    if (content == "take my selfie"){
        speak();
        console.log("Taking selfie");
    }
}
function speak(){
    var synth= window.speechSynthesis;
    speakData="Taking your selfie in 5 seconds";
    var utterThis=new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        takeSnapshot();
        save();
    },5000);
}
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 100
});
camera=document.getElementById("camera");
function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='selfieimage' src='"+data_uri+"'>";
    });
}
function save(){
    anchor=document.getElementById("link");
    image=document.getElementById("selfieimage").src;
    anchor.href=image;
    anchor.click();
}