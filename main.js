var SpeechRecognition=window.webkitSpeechRecognition;

var recognition= new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
    console.log("lets go2");
}
recognition.onresult=function(event) {
  
var Content= event.results[0][0].transcript;
console.log(Content);

document.getElementById("textbox").innerHTML=Content;
speak();
}

function speak(){
    synth=window.speechSynthesis;
    speak_data="Taking your Selfie in 5 seconds";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    console.log("lets go");
    setTimeout (function(){
        img_id="selfie1";
        take_snapshot();
        speak_data="Taking your next Selfie in 5 seconds";
        var utterThis=new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
       },5000); 
       setTimeout (function(){
        img_id="selfie2";
        take_snapshot();
        speak_data="Taking your next Selfie in 5 seconds";
        var utterThis=new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
       },10000); 
       setTimeout (function(){
        img_id="selfie3";
        take_snapshot();
       },15000);  

}

 Webcam.set({
    width:450,
    height:320,
    image_format:'png',
    png_quality:90,
 });
 camera=document.getElementById("webcam");
 function take_snapshot(){
    console.log(img_id);

    Webcam.snap(function(data_uri){
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML='<img id="selfie1" src="'+data_uri+'"/>';
            //document.getElementById("result1").innerHTML='<span><img id="selfie1" src="'+data_uri+'"/>';

        }
        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML='<img id="selfie2" src="'+data_uri+'"/>';
            
        }
        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML='<img id="selfie3" src="'+data_uri+'"/>';
            
        }
    })
}
