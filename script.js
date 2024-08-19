function openModal(imageUrl){
  
    var modal=document.getElementById('myModal');
    var modalimg=document.getElementById('modalImage');
    modal.style.display="block";
    modalimg.src=imageUrl;

}

function closeModal(){
    var modal =document.getElementById('myModal');
    modal.style.display="none";

}
