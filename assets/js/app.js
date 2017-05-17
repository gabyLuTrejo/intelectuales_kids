/*
 * Archivo principal de funcionalidad de JS
 */
 // Get the image and insert it inside the modal - use its "alt" text as a caption
	 var img = document.getElementsByClassName('imagen');
	 console.log(img);
	 var longitud=img.length;
	 console.log(longitud)
	 for(var i=0;i<longitud; i++){
	 	img[i].addEventListener( 'click', openModal);
	 }
	 function openModal(){
	 	document.getElementById('myModal').style.display="block";

	 	document.getElementById("imagensota").src= this.src;
		document.getElementById("caption").innerHTML = this.alt;
	 }
	 var span = document.getElementsByClassName("close")[0];

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
			document.getElementById("myModal").style.display = "none";
		}






		var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}
