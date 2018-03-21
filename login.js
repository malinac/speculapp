function openForm(event, actionName){
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i=0;i<tabcontent.length;i++){
    tabcontent[i].style.display="none";
  }

  tablinks=document.getElementsByClassName("tablink");
  for (i=0;i<tablinks.length;i++){
    tablinks[i].className=tablinks[i].className.replace(" active","");
  }

  document.getElementById(actionName).style.display="block";
  event.currentTarget.className += " active";

}