var SpeechRecognition=window.webkitSpeechRecognition;
var recognition =new SpeechRecognition();
function start(){
    document.getElementById("txtarea").innerHTML="";
    recognition.start()
}
recognition.onresult=function(event){
    console.log(event)
    word=event.results[0][0].transcript
    document.getElementById("txtarea").innerHTML=word
    if(word == "take my selfie"){
        console.log("take my selfie");
        speak();
    }
}
function speak(){
    var Speak=window.speechSynthesis
    var word="taking your selfie in five seconds"
    var sound=new SpeechSynthesisUtterance(word)
    Speak.speak(sound)
    Webcam.attach(camera)
    setTimeout(function(){
        take_snapshot();
        save()
    },5000);
}
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
 });
camera=document.getElementById("camera")
function take_snapshot(){
    Webcam.snap(function(data_url){
        document.getElementById("selfie").innerHTML='<img id="selfie_image" '+"src="+data_url+">";

    });
}
function save(){
    link=document.getElementById("download");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}
