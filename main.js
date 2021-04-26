var names=[
  "Family Book",
    "Deepak.Phadtare",
    "Aarti.Phadtare",
    "Dnyanesha.Phadtare",
    "Tanisha.Phadtare"
  ]
  
  var albums=[
    "family.jpg",
    "father.JPG",
    "mother.JPG",
    "dnyanesha.JPG",
    "tanisha.JPG"
  ]
  
  var i =0 ;
  function nextslide() {
    if(i > 4 ){ i = 0; }  
document.getElementById("name").innerHTML = names[i];
 document.getElementById("album").src = albums[i]; i++;}
  