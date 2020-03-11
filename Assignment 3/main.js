let s=1
let cp=1
let c=1
let oc=1
let e=3
let ac=1
function mySkills(){
    var fields= document.getElementById("skills").innerHTML;

    s++;
     fields=fields+" <input id="+'s'+s+" placeholder='Skills' type='text' tabindex='4'>"
     
     
   document.getElementById('skills').innerHTML=fields;
}
function myEducation(){
    var fields= document.getElementById('edu').innerHTML;
    e++;
    fields=fields+" <input id="+'e'+e+" placeholder='Others' type='text' tabindex='4' >"
    
  document.getElementById('edu').innerHTML=fields;
}
function myprojects(){
    var fields= document.getElementById('courseproj').innerHTML;
    cp++;
    fields=fields+" <input id="+'cp'+cp+" placeholder='Others' type='text' tabindex='4' >"

  document.getElementById('courseproj').innerHTML=fields;
}

function mycertf(){
    var fields= document.getElementById('certificate').innerHTML;
    c++;
    fields=fields+" <input id="+'c'+c+" placeholder='Others' type='text' tabindex='4' >"

  document.getElementById('certificate').innerHTML=fields;
}

function myonlinecertf(){
    var fields= document.getElementById('onlinecertificate').innerHTML;
    oc++;
    fields=fields+" <input id="+'oc'+oc+" placeholder='Others' type='text' tabindex='4' >"

  document.getElementById('onlinecertificate').innerHTML=fields;
}
function myach(){

  var fields= document.getElementById('ach').innerHTML;
  ac++;
  fields=fields+" <input id="+'ac'+ac+" placeholder='Others' type='text' tabindex='4' >"

document.getElementById('ach').innerHTML=fields;
}
/*window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var img = document.querySelector('img'); 
            img.src = URL.createObjectURL(this.files[0]); 
            img.onload = imageIsLoaded;
            localStorage.setItem("myimg", imageIsLoaded);
        }
    });
  });
  
  function imageIsLoaded() { 
    alert("Image Uploaded");  // blob url
  
  }*/
  function locStorage(){
   // window.location.href="CVwithCSS.html";
    localStorage.clear();
localStorage.setItem("s",s);
localStorage.setItem("cp",cp);
localStorage.setItem("c",c);
localStorage.setItem("oc",oc);
localStorage.setItem("e",e);
localStorage.setItem("ac",ac);
   
var i;
localStorage.setItem("name",document.getElementById("name").value);

localStorage.setItem("email",document.getElementById("email").value);
localStorage.setItem("num",document.getElementById("num").value);
localStorage.setItem("add",document.getElementById("add").value);
localStorage.setItem("obj",document.getElementById("obj").value);
localStorage.setItem("s"+(1),document.getElementById("s"+(1)).value);
localStorage.setItem("img",document.getElementById("img").value);

//alert(localStorage.getItem("s"+1));
localStorage.setItem("cp"+(1),document.getElementById("cp"+(1)).value);
localStorage.setItem("c"+(1),document.getElementById("c"+(1)).value);
localStorage.setItem("oc"+(1),document.getElementById("oc"+(1)).value);
localStorage.setItem("e"+(1),document.getElementById("e"+(1)).value);
localStorage.setItem("ac"+(1),document.getElementById("ac"+(1)).value);
for(i=1;i<s;i++){
  localStorage.setItem("s"+(i+1),document.getElementById("s"+(i+1)).value);
  
}
for(i=1;i<cp;i++){
  localStorage.setItem("cp"+(i+1),document.getElementById("cp"+(i+1)).value);
}
for(i=1;i<c;i++){
  localStorage.setItem("c"+(i+1),document.getElementById("c"+(i+1)).value);
}
for(i=1;i<oc;i++){
  localStorage.setItem("oc"+(i+1),document.getElementById("oc"+(i+1)).value);
}
for(i=1;i<e;i++){
  localStorage.setItem("e"+(i+1),document.getElementById("e"+(i+1)).value);
}

for(i=1;i<ac;i++){
  localStorage.setItem("ac"+(i+1),document.getElementById("ac"+(i+1)).value);
}


  }

 function myUpdate(){
   var i;
   var imgn="";
 var  s=localStorage.getItem("s");
 var  cp=localStorage.getItem("cp");
 var  c=localStorage.getItem("c");
 var  oc=localStorage.getItem("oc");
 var  e=localStorage.getItem("e");
 var ac=localStorage.getItem("ac");
 var imgname=localStorage.getItem("img");


  document.getElementById('myname').innerHTML=localStorage.getItem("name");
   document.getElementById('myemail').innerHTML=localStorage.getItem("email");
   document.getElementById('mynum').innerHTML=localStorage.getItem("num");
   document.getElementById('myadd').innerHTML=localStorage.getItem("add");
   document.getElementById('myobj').innerHTML=localStorage.getItem("obj");
  for(i=12;i<imgname.length;i++){
    imgn+=imgname[i];
  }
  document.getElementById("myimg").src=imgn;
 
   for(i=0;i<s;i++){
     var fields=document.getElementById("myskills").innerHTML;
fields+="<li>"+localStorage.getItem("s"+(i+1))+"</li>"
document.getElementById("myskills").innerHTML=fields;
   }
   for(i=0;i<e;i++){
    var fields=document.getElementById("myedu").innerHTML;
fields+="<li>"+localStorage.getItem("e"+(i+1))+"</li>"
document.getElementById("myedu").innerHTML=fields;
  }
  for(i=0;i<cp;i++){
    var fields=document.getElementById("myproj").innerHTML;
fields+="<li>"+localStorage.getItem("cp"+(i+1))+"</li>"
document.getElementById("myproj").innerHTML=fields;
  }
  for(i=0;i<c;i++){
    var fields=document.getElementById("mycert").innerHTML;
fields+="<li>"+localStorage.getItem("c"+(i+1))+"</li>"
document.getElementById("mycert").innerHTML=fields;
  }
  for(i=0;i<oc;i++){
    var fields=document.getElementById("myocert").innerHTML;
fields+="<li>"+localStorage.getItem("oc"+(i+1))+"</li>"
document.getElementById("myocert").innerHTML=fields;
  }
  for(i=0;i<ac;i++){
    var fields=document.getElementById("myach").innerHTML;
fields+="<li>"+localStorage.getItem("ac"+(i+1))+"</li>"
document.getElementById("myach").innerHTML=fields;
  }
 } 